import type { Card, PileRef, GameState } from '../game/types';
import type { IGameEngine } from '../game/gameEngine';
import type { IRenderer } from './renderer';

/** Extended engine interface for drag-drop validation */
interface IGameEngineWithState extends IGameEngine {
  getState(): GameState;
}

export interface IDragDropHandler {
  attach(container: HTMLElement): void;
  onDragStart(handler: (source: PileRef, cardIndex: number, count: number) => void): void;
  onDrop(handler: (source: PileRef, target: PileRef) => void): void;
}

interface DragState {
  source: PileRef;
  cardIndex: number;
  count: number;
}

let activeDrag: DragState | null = null;

// Rank/suit helpers for ghost card image URLs
const RANK_TO_IMG: Record<number, string> = {
  1: 'A', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7',
  8: '8', 9: '9', 10: '10', 11: 'J', 12: 'Q', 13: 'K',
};
const SUIT_TO_IMG: Record<string, string> = {
  spades: 'S', hearts: 'H', diamonds: 'D', clubs: 'C',
};
function rankMap(r: number): string { return RANK_TO_IMG[r] ?? String(r); }
function suitMap(s: string): string { return SUIT_TO_IMG[s] ?? s[0].toUpperCase(); }

function isRed(suit: string): boolean {
  return suit === 'diamonds' || suit === 'hearts';
}

function isOppositeColor(a: Card, b: Card): boolean {
  return isRed(a.suit) !== isRed(b.suit);
}

/**
 * Parse a pile element ID into a PileRef.
 * FreeCell supports: "freecell-N", "foundation-N", "tableau-N"
 */
function parsePileId(id: string): PileRef | null {
  const freecellMatch = id.match(/^freecell-(\d)$/);
  if (freecellMatch) return { type: 'freecell', index: parseInt(freecellMatch[1], 10) };

  const foundationMatch = id.match(/^foundation-(\d)$/);
  if (foundationMatch) return { type: 'foundation', index: parseInt(foundationMatch[1], 10) };

  const tableauMatch = id.match(/^tableau-(\d+)$/);
  if (tableauMatch) return { type: 'tableau', index: parseInt(tableauMatch[1], 10) };

  return null;
}

/**
 * Walk up the DOM from an element to find the nearest pile container,
 * returning both the element and its PileRef.
 */
function findPileFromElement(el: Element | null): { element: HTMLElement; pileRef: PileRef } | null {
  let current: Element | null = el;
  while (current && current !== document.body) {
    const id = (current as HTMLElement).id;
    if (id) {
      const ref = parsePileId(id);
      if (ref) return { element: current as HTMLElement, pileRef: ref };
    }
    current = current.parentElement;
  }
  return null;
}

/**
 * Determine the PileRef and cardIndex for the element that was dragged.
 */
function getDragSource(target: EventTarget | null): { pileRef: PileRef; cardIndex: number } | null {
  if (!(target instanceof Element)) return null;
  const el = target as HTMLElement;

  // Card inside a tableau column
  if (el.dataset.cardIndex !== undefined && el.dataset.col !== undefined) {
    const col = parseInt(el.dataset.col, 10);
    const cardIndex = parseInt(el.dataset.cardIndex, 10);
    return { pileRef: { type: 'tableau', index: col }, cardIndex };
  }

  // Card inside a free cell
  if (el.dataset.cellIndex !== undefined) {
    const cellIndex = parseInt(el.dataset.cellIndex, 10);
    return { pileRef: { type: 'freecell', index: cellIndex }, cardIndex: 0 };
  }

  // Walk up to find pile
  const pile = findPileFromElement(el);
  if (!pile) return null;
  return { pileRef: pile.pileRef, cardIndex: -1 };
}

export class DragDropHandler implements IDragDropHandler {
  private engine: IGameEngineWithState;
  private renderer: IRenderer;
  private dragStartHandlers: Array<(source: PileRef, cardIndex: number, count: number) => void> = [];
  private dropHandlers: Array<(source: PileRef, target: PileRef) => void> = [];
  private attached = false;
  private container: HTMLElement | null = null;

  constructor(engine: IGameEngineWithState, renderer: IRenderer) {
    this.engine = engine;
    this.renderer = renderer;
  }

  onDragStart(handler: (source: PileRef, cardIndex: number, count: number) => void): void {
    this.dragStartHandlers.push(handler);
  }

  onDrop(handler: (source: PileRef, target: PileRef) => void): void {
    this.dropHandlers.push(handler);
  }

  attach(container: HTMLElement): void {
    if (this.attached) return;
    this.attached = true;
    this.container = container;

    container.addEventListener('dragstart', this._onDragStart.bind(this));
    container.addEventListener('dragover', this._onDragOver.bind(this));
    container.addEventListener('dragenter', this._onDragEnter.bind(this));
    container.addEventListener('dragleave', this._onDragLeave.bind(this));
    container.addEventListener('drop', this._onDrop.bind(this));
    container.addEventListener('dragend', this._onDragEnd.bind(this));
  }

  // ─── Event handlers ────────────────────────────────────────────────────────

  private _onDragStart(e: DragEvent): void {
    const source = getDragSource(e.target);
    if (!source) { e.preventDefault(); return; }

    const { pileRef, cardIndex } = source;
    const state = this.engine.getState();

    // Only tableau and free cells are valid drag sources
    if (pileRef.type === 'tableau') {
      const col = state.tableau[pileRef.index];
      if (!col || col.length === 0) { e.preventDefault(); return; }

      const idx = cardIndex === -1 ? col.length - 1 : cardIndex;
      const count = this._computeDragCount(col, idx);
      if (count === 0) { e.preventDefault(); return; }

      activeDrag = { source: pileRef, cardIndex: idx, count };

      if (e.dataTransfer) {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', JSON.stringify({ pileRef, cardIndex: idx, count }));

        if (count > 1) {
          const ghost = this._buildStackGhost(col.slice(idx), e.target as HTMLElement);
          if (ghost) {
            document.body.appendChild(ghost);
            e.dataTransfer.setDragImage(ghost, ghost.offsetWidth / 2, 20);
            requestAnimationFrame(() => ghost.remove());
          }
        }
      }

      for (const h of this.dragStartHandlers) h(pileRef, idx, count);

      // Dim source cards while dragging
      requestAnimationFrame(() => {
        const pileEl = this.container?.querySelector<HTMLElement>(`#tableau-${pileRef.index}`);
        if (pileEl) {
          const cardEls = Array.from(pileEl.querySelectorAll<HTMLElement>('.card'));
          cardEls.slice(idx).forEach(el => el.classList.add('card--dragging'));
        }
      });
    } else if (pileRef.type === 'freecell') {
      const card = state.freeCells[pileRef.index];
      if (!card) { e.preventDefault(); return; }

      activeDrag = { source: pileRef, cardIndex: 0, count: 1 };

      if (e.dataTransfer) {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', JSON.stringify({ pileRef, cardIndex: 0, count: 1 }));
      }

      for (const h of this.dragStartHandlers) h(pileRef, 0, 1);

      requestAnimationFrame(() => {
        const pileEl = this.container?.querySelector<HTMLElement>(`#freecell-${pileRef.index}`);
        if (pileEl) {
          pileEl.querySelectorAll<HTMLElement>('.card').forEach(el => el.classList.add('card--dragging'));
        }
      });
    } else {
      e.preventDefault();
    }
  }

  private _onDragOver(e: DragEvent): void {
    const pile = findPileFromElement(e.target as Element);
    if (!pile || !activeDrag) return;

    e.preventDefault();
    if (e.dataTransfer) e.dataTransfer.dropEffect = 'move';

    const valid = this._isValidDrop(activeDrag, pile.pileRef);
    this.renderer.highlightDropTarget(pile.pileRef, valid);
  }

  private _onDragEnter(e: DragEvent): void {
    e.preventDefault();
  }

  private _onDragLeave(e: DragEvent): void {
    const pile = findPileFromElement(e.target as Element);
    if (!pile) return;

    const relatedTarget = e.relatedTarget as Element | null;
    if (relatedTarget && pile.element.contains(relatedTarget)) return;

    this.renderer.clearHighlights();
  }

  private _onDrop(e: DragEvent): void {
    e.preventDefault();
    this.renderer.clearHighlights();

    if (!activeDrag) return;

    const pile = findPileFromElement(e.target as Element);
    if (!pile) {
      this._animateFailedDrop(e.target as Element);
      activeDrag = null;
      return;
    }

    const { source, count } = activeDrag;
    const target = pile.pileRef;

    // No-op: same pile
    if (source.type === target.type && source.index === target.index) {
      activeDrag = null;
      return;
    }

    // Notify external drop listeners
    for (const h of this.dropHandlers) h(source, target);

    let success = false;

    if (count === 1) {
      // Single card move — works for any source/target combination
      success = this.engine.moveCard(source, target);
    } else {
      // Multi-card supermove — only tableau-to-tableau
      success = this.engine.moveStack(source, count, target);
    }

    if (success) {
      // Auto-move safe cards to foundation after a successful move
      this.engine.autoMoveToFoundation();
      this.renderer.render(this.engine.getState());
    } else {
      this._animateFailedDrop(e.target as Element);
    }

    activeDrag = null;
  }

  private _onDragEnd(_e: DragEvent): void {
    this.renderer.clearHighlights();
    this.container?.querySelectorAll('.card--dragging').forEach(el => el.classList.remove('card--dragging'));
    activeDrag = null;
  }

  // ─── Helpers ───────────────────────────────────────────────────────────────

  /**
   * Compute how many cards from index `fromIdx` to the end of the column
   * form a valid alternating-color descending sequence (for supermove).
   */
  private _computeDragCount(col: Card[], fromIdx: number): number {
    if (fromIdx >= col.length) return 0;

    const subCol = col.slice(fromIdx);
    if (subCol.length === 0) return 0;

    // Verify alternating-color descending sequence from fromIdx to end
    for (let i = 1; i < subCol.length; i++) {
      if (!isOppositeColor(subCol[i], subCol[i - 1])) return 1;
      if (subCol[i].rank !== subCol[i - 1].rank - 1) return 1;
    }

    // All cards from fromIdx form a valid sequence
    return subCol.length;
  }

  /**
   * Quick validity check for drop target highlighting.
   */
  private _isValidDrop(drag: DragState, target: PileRef): boolean {
    const state = this.engine.getState();
    const { source, cardIndex, count } = drag;

    // Same pile → no-op
    if (source.type === target.type && source.index === target.index) return false;

    // Get the bottom card of the dragged sequence
    let bottomCard: Card | null = null;
    if (source.type === 'tableau') {
      const col = state.tableau[source.index];
      if (!col || cardIndex >= col.length) return false;
      bottomCard = col[cardIndex];
    } else if (source.type === 'freecell') {
      bottomCard = state.freeCells[source.index];
    }
    if (!bottomCard) return false;

    if (target.type === 'tableau') {
      const dstCol = state.tableau[target.index];
      if (dstCol.length === 0) return true;
      const top = dstCol[dstCol.length - 1];
      if (!isOppositeColor(bottomCard, top) || bottomCard.rank !== top.rank - 1) return false;

      // For multi-card moves, check supermove capacity
      if (count > 1) {
        const emptyFreeCells = state.freeCells.filter(c => c === null).length;
        let emptyTableauCols = 0;
        for (let i = 0; i < 8; i++) {
          if (i === source.index || i === target.index) continue;
          if (state.tableau[i].length === 0) emptyTableauCols++;
        }
        const maxMoveable = (emptyFreeCells + 1) * Math.pow(2, emptyTableauCols);
        if (count > maxMoveable) return false;
      }
      return true;
    }

    if (target.type === 'freecell') {
      // Only single cards can go to free cells
      if (count > 1) return false;
      return state.freeCells[target.index] === null;
    }

    if (target.type === 'foundation') {
      // Only single cards can go to foundations
      if (count > 1) return false;
      const foundation = state.foundations[target.index];
      if (foundation.length === 0) return bottomCard.rank === 1;
      const top = foundation[foundation.length - 1];
      return bottomCard.suit === top.suit && bottomCard.rank === top.rank + 1;
    }

    return false;
  }

  /**
   * Build an off-screen ghost element showing the full dragged stack.
   */
  private _buildStackGhost(cards: Card[], draggedEl: HTMLElement): HTMLElement | null {
    if (!cards || cards.length === 0) return null;

    const cardWidth = draggedEl.closest<HTMLElement>('.pile')?.offsetWidth
      ?? draggedEl.offsetWidth ?? 80;

    let FACE_UP_OFFSET = 28;
    const pileEl = draggedEl.closest<HTMLElement>('.pile');
    if (pileEl) {
      const cardEls = Array.from(pileEl.querySelectorAll<HTMLElement>('.card'));
      for (let i = 0; i < cardEls.length - 1; i++) {
        const t0 = parseInt(cardEls[i].style.top || '0', 10);
        const t1 = parseInt(cardEls[i + 1].style.top || '0', 10);
        if (t1 > t0) { FACE_UP_OFFSET = t1 - t0; break; }
      }
    }

    const cardHeight = draggedEl.offsetHeight || 112;
    const totalHeight = (cards.length - 1) * FACE_UP_OFFSET + cardHeight;

    const ghost = document.createElement('div');
    ghost.style.cssText = `
      position: fixed;
      top: -9999px;
      left: -9999px;
      width: ${cardWidth}px;
      height: ${totalHeight}px;
      pointer-events: none;
    `;

    let top = 0;
    for (const card of cards) {
      const src = `/cards/${rankMap(card.rank)}${suitMap(card.suit)}.svg`;
      const img = document.createElement('img');
      img.src = src;
      img.style.cssText = `
        position: absolute;
        top: ${top}px;
        left: 0;
        width: ${cardWidth}px;
        border-radius: 4px;
        box-shadow: 2px 2px 6px rgba(0,0,0,0.4);
      `;
      ghost.appendChild(img);
      top += FACE_UP_OFFSET;
    }

    return ghost;
  }

  /**
   * Visual feedback for a failed drop — brief return animation.
   */
  private _animateFailedDrop(target: Element | null): void {
    if (!target) return;

    let cardEl: HTMLElement | null = null;
    if (target instanceof HTMLElement) {
      cardEl = target.closest<HTMLElement>('.card') ?? target;
    }
    if (!cardEl) return;

    cardEl.classList.add('card--return-animation');
    const onEnd = () => {
      cardEl!.classList.remove('card--return-animation');
      cardEl!.removeEventListener('animationend', onEnd);
    };
    cardEl.addEventListener('animationend', onEnd);
    setTimeout(() => cardEl!.classList.remove('card--return-animation'), 600);
  }
}
