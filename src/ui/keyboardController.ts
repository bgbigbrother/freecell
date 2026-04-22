/**
 * Keyboard controller for FreeCell Solitaire.
 *
 * FreeCell layout:
 *  - Top row: 4 free cells (left) + 4 foundations (right)
 *  - Bottom row: 8 tableau columns
 *  - No stock pile, no face-down cards
 *  - Supermove sequences are alternating-color descending
 */

import type { Card, PileRef } from '../game/types';
import type { GameEngine } from '../game/gameEngine';
import type { IRenderer, KeyboardState, KeyboardSelection } from './renderer';
import type { LayoutConfig } from './layout';

export interface IKeyboardController {
  attach(): void;
  detach(): void;
  getState(): KeyboardState;
  onNewGame(): void;
}

const INTERACTIVE_TAGS = new Set(['INPUT', 'SELECT', 'TEXTAREA', 'BUTTON']);

// FreeCell top row: 4 free cells + 4 foundations
const TOP_ROW_SEQUENCE: PileRef[] = [
  { type: 'freecell', index: 0 },
  { type: 'freecell', index: 1 },
  { type: 'freecell', index: 2 },
  { type: 'freecell', index: 3 },
  { type: 'foundation', index: 0 },
  { type: 'foundation', index: 1 },
  { type: 'foundation', index: 2 },
  { type: 'foundation', index: 3 },
];

const NUM_TABLEAU_COLS = 8;

export class KeyboardController implements IKeyboardController {
  private engine: GameEngine;
  private renderer: IRenderer;
  private afterAction: () => void;
  private onNewGameCallback: (() => void) | undefined;

  private state: KeyboardState = {
    cursor: null,
    selection: null,
  };

  private attached = false;
  private boundHandler: (e: KeyboardEvent) => void;

  constructor(
    engine: GameEngine,
    renderer: IRenderer,
    afterAction: () => void,
    onNewGame?: () => void,
  ) {
    this.engine = engine;
    this.renderer = renderer;
    this.afterAction = afterAction;
    this.onNewGameCallback = onNewGame;
    this.boundHandler = this._handleKeyDown.bind(this);
  }

  attach(): void {
    if (this.attached) return;
    this.attached = true;
    this.state = {
      cursor: { type: 'tableau', index: 0 },
      selection: null,
    };
    document.addEventListener('keydown', this.boundHandler);
  }

  detach(): void {
    if (!this.attached) return;
    this.attached = false;
    document.removeEventListener('keydown', this.boundHandler);
  }

  getState(): KeyboardState {
    return this.state;
  }

  onNewGame(): void {
    this.state = {
      cursor: { type: 'tableau', index: 0 },
      selection: null,
    };
  }

  private _isInputFocused(): boolean {
    const el = document.activeElement;
    if (!el) return false;
    if (INTERACTIVE_TAGS.has(el.tagName)) return true;
    if ((el as HTMLElement).isContentEditable) return true;
    return false;
  }

  private _handleKeyDown(e: KeyboardEvent): void {
    if (this._isInputFocused()) return;

    const { key, metaKey, ctrlKey } = e;

    // F2: new game
    if (key === 'F2') {
      e.preventDefault();
      this.onNewGameCallback?.();
      return;
    }

    // Ctrl+Z / Cmd+Z: undo
    if ((ctrlKey && !metaKey && key === 'z') || (metaKey && key === 'z')) {
      e.preventDefault();
      if (this.engine.canUndo()) {
        this.engine.undo();
        this.afterAction();
      }
      return;
    }

    // Space: select / confirm move
    if (key === ' ') {
      e.preventDefault();
      this._handleSpace();
      return;
    }

    // Escape: cancel selection
    if (key === 'Escape') {
      e.preventDefault();
      this._handleEscape();
      return;
    }

    // Arrow left / right: navigate within zone
    if (key === 'ArrowLeft' || key === 'ArrowRight') {
      e.preventDefault();
      const cursor = this.state.cursor;
      if (!cursor) return;
      const topRowIdx = this._getTopRowIndex(cursor);
      if (topRowIdx !== -1) {
        const newIdx = key === 'ArrowRight'
          ? Math.min(topRowIdx + 1, TOP_ROW_SEQUENCE.length - 1)
          : Math.max(topRowIdx - 1, 0);
        this.state.cursor = { ...TOP_ROW_SEQUENCE[newIdx] };
      } else if (cursor.type === 'tableau') {
        const newCol = key === 'ArrowRight'
          ? Math.min(cursor.index + 1, NUM_TABLEAU_COLS - 1)
          : Math.max(cursor.index - 1, 0);
        this.state.cursor = { type: 'tableau', index: newCol };
      }
      this.renderer.setCursorHighlight(this.state.cursor);
      return;
    }

    // Arrow up / down: navigate between zones or resize selection
    if (key === 'ArrowUp' || key === 'ArrowDown') {
      e.preventDefault();
      const cursor = this.state.cursor;
      if (!cursor) return;
      const layout = this.renderer.getLayout();

      if (key === 'ArrowUp') {
        const { selection } = this.state;
        // Resize selection upward (add more cards) when cursor is on source column
        if (
          selection &&
          selection.from.type === 'tableau' &&
          cursor.type === 'tableau' &&
          cursor.index === selection.from.index
        ) {
          const maxCount = this._getAlternatingSequenceLength(selection.from.index);
          if (selection.count < maxCount) {
            const newCount = selection.count + 1;
            this.state.selection = { ...selection, count: newCount };
            this.renderer.render(this.engine.getState(), this.getState());
          }
          return;
        }
        // Zone navigation: tableau → top row
        if (cursor.type === 'tableau') {
          const colCenter = layout.positions.tableau[cursor.index].x + layout.cardWidth / 2;
          this.state.cursor = this._nearestTopRowPile(colCenter, layout);
        }
      } else {
        const { selection } = this.state;
        // Resize selection downward (remove cards) when cursor is on source column
        if (
          selection &&
          selection.from.type === 'tableau' &&
          cursor.type === 'tableau' &&
          cursor.index === selection.from.index
        ) {
          if (selection.count > 1) {
            const newCount = selection.count - 1;
            this.state.selection = { ...selection, count: newCount };
            this.renderer.render(this.engine.getState(), this.getState());
          }
          return;
        }
        // Zone navigation: top row → tableau
        const topRowIdx = this._getTopRowIndex(cursor);
        if (topRowIdx !== -1) {
          if (cursor.type === 'freecell') {
            const cellCenter = layout.positions.freeCells[cursor.index].x + layout.cardWidth / 2;
            const col = this._nearestTableauColumn(cellCenter, layout);
            this.state.cursor = { type: 'tableau', index: col };
          } else if (cursor.type === 'foundation') {
            const foundCenter = layout.positions.foundations[cursor.index].x + layout.cardWidth / 2;
            const col = this._nearestTableauColumn(foundCenter, layout);
            this.state.cursor = { type: 'tableau', index: col };
          }
        }
      }
      this.renderer.setCursorHighlight(this.state.cursor);
      return;
    }
  }

  private _getTopRowIndex(cursor: PileRef): number {
    for (let i = 0; i < TOP_ROW_SEQUENCE.length; i++) {
      const ref = TOP_ROW_SEQUENCE[i];
      if (ref.type === cursor.type && ref.index === cursor.index) return i;
    }
    return -1;
  }

  private _nearestTopRowPile(centerX: number, layout: LayoutConfig): PileRef {
    const centers: number[] = [
      ...layout.positions.freeCells.map(p => p.x + layout.cardWidth / 2),
      ...layout.positions.foundations.map(p => p.x + layout.cardWidth / 2),
    ];
    let bestIdx = 0;
    let bestDist = Math.abs(centers[0] - centerX);
    for (let i = 1; i < centers.length; i++) {
      const dist = Math.abs(centers[i] - centerX);
      if (dist < bestDist) {
        bestDist = dist;
        bestIdx = i;
      }
    }
    return { ...TOP_ROW_SEQUENCE[bestIdx] };
  }

  private _nearestTableauColumn(centerX: number, layout: LayoutConfig): number {
    let bestCol = 0;
    let bestDist = Math.abs(layout.positions.tableau[0].x + layout.cardWidth / 2 - centerX);
    for (let i = 1; i < NUM_TABLEAU_COLS; i++) {
      const dist = Math.abs(layout.positions.tableau[i].x + layout.cardWidth / 2 - centerX);
      if (dist < bestDist) {
        bestDist = dist;
        bestCol = i;
      }
    }
    return bestCol;
  }

  private _handleSpace(): void {
    const { cursor, selection } = this.state;
    if (!cursor) return;

    if (!selection) {
      // No selection — select a card from the current pile
      switch (cursor.type) {
        case 'freecell': {
          // Select the card in this free cell (if any)
          const gameState = this.engine.getState();
          const card = gameState.freeCells[cursor.index];
          if (!card) return;
          this.state.selection = {
            from: { type: 'freecell', index: cursor.index },
            count: 1,
          };
          this.renderer.render(this.engine.getState(), this.getState());
          break;
        }
        case 'tableau': {
          // Select the bottom card of the column (start with 1, expand with ArrowUp)
          const gameState = this.engine.getState();
          const col = gameState.tableau[cursor.index];
          if (col.length === 0) return;
          this.state.selection = {
            from: { type: 'tableau', index: cursor.index },
            count: 1,
          };
          this.renderer.render(this.engine.getState(), this.getState());
          break;
        }
        case 'foundation': {
          // Foundations are build-only in FreeCell — no manual selection
          break;
        }
      }
    } else {
      // Selection active — attempt to move to cursor destination
      const from = selection.from;
      const to = cursor;

      let success = false;
      if (selection.count === 1) {
        success = this.engine.moveCard(from, to);
      } else {
        success = this.engine.moveStack(from, selection.count, to);
      }

      if (success) {
        this.state.selection = null;
        this.engine.autoMoveToFoundation();
        this.renderer.render(this.engine.getState(), this.getState());
        this.afterAction();
      } else {
        // Invalid move — flash error highlight, keep selection
        this.renderer.highlightDropTarget(cursor, false);
        setTimeout(() => {
          this.renderer.clearHighlights();
        }, 300);
      }
    }
  }

  private _handleEscape(): void {
    const { selection } = this.state;
    if (!selection) return;
    // Cancel selection and return cursor to source pile
    this.state.selection = null;
    this.state.cursor = { ...selection.from };
    this.renderer.render(this.engine.getState(), this.getState());
  }

  /**
   * Returns the length of the longest alternating-color descending sequence
   * from the bottom of the given tableau column.
   */
  private _getAlternatingSequenceLength(colIndex: number): number {
    const col = this.engine.getState().tableau[colIndex];
    if (col.length === 0) return 0;
    let count = 1;
    for (let i = col.length - 2; i >= 0; i--) {
      const lower = col[i + 1];
      const upper = col[i];
      const isOppColor =
        (upper.suit === 'hearts' || upper.suit === 'diamonds') !==
        (lower.suit === 'hearts' || lower.suit === 'diamonds');
      if (isOppColor && upper.rank === lower.rank + 1) {
        count++;
      } else {
        break;
      }
    }
    return count;
  }
}
