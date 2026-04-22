import type { Card, GameState, PileRef } from './types';
import { SCORE } from './types';
import { createDeck, shuffle } from './deck';
import { UndoManager } from './undoManager';
import { applyScoreDelta } from './scoring';
import { checkWin } from './winCondition';

export interface IGameEngine {
  newGame(): void;
  moveCard(from: PileRef, to: PileRef): boolean;
  moveStack(from: PileRef, count: number, to: PileRef): boolean;
  autoMoveToFoundation(): number;
  /** Returns the foundation index if the top card at `from` can move there, or -1. */
  findFoundationTarget(from: PileRef): number;
  undo(): void;
  canUndo(): boolean;
  getState(): GameState;
  setOnWin(callback: () => void): void;
}

export function getInitialState(): GameState {
  const deck = shuffle(createDeck());

  // Deal 52 cards into 8 columns: columns 0-3 get 7 cards, columns 4-7 get 6 cards
  const tableau: Card[][] = Array.from({ length: 8 }, () => []);
  let deckIndex = 0;

  for (let col = 0; col < 8; col++) {
    const count = col < 4 ? 7 : 6;
    for (let row = 0; row < count; row++) {
      tableau[col].push({ ...deck[deckIndex++], faceUp: true });
    }
  }

  return {
    tableau,
    freeCells: [null, null, null, null],
    foundations: Array.from({ length: 4 }, () => []),
    score: SCORE.INITIAL,
    moves: 0,
  };
}

// ── Helper: check if two cards have opposite colors ──────────────────────────

function isRed(suit: Card['suit']): boolean {
  return suit === 'diamonds' || suit === 'hearts';
}

function isOppositeColor(a: Card, b: Card): boolean {
  return isRed(a.suit) !== isRed(b.suit);
}

export class GameEngine implements IGameEngine {
  private state: GameState;
  private undoManager: UndoManager;
  private onWin?: () => void;

  constructor() {
    this.state = getInitialState();
    this.undoManager = new UndoManager();
  }

  getState(): GameState {
    return this.state;
  }

  newGame(): void {
    this.state = getInitialState();
    this.undoManager.clear();
  }

  setOnWin(callback: () => void): void {
    this.onWin = callback;
  }

  canUndo(): boolean {
    return this.undoManager.canUndo();
  }

  undo(): void {
    if (!this.canUndo()) return;
    this.undoManager.undo();
    // After undo, check for auto-moves
    this.autoMoveToFoundation();
  }

  // ── Move validation helpers ─────────────────────────────────────────────────

  private canPlaceOnTableau(card: Card, col: Card[]): boolean {
    if (col.length === 0) return true;
    const top = col[col.length - 1];
    return isOppositeColor(card, top) && card.rank === top.rank - 1;
  }

  private canPlaceOnFoundation(card: Card, foundation: Card[]): boolean {
    if (foundation.length === 0) return card.rank === 1; // only Ace on empty
    const top = foundation[foundation.length - 1];
    return card.suit === top.suit && card.rank === top.rank + 1;
  }

  private getCardFromSource(ref: PileRef): Card | null {
    if (ref.type === 'tableau') {
      const col = this.state.tableau[ref.index];
      return col.length > 0 ? col[col.length - 1] : null;
    }
    if (ref.type === 'freecell') {
      return this.state.freeCells[ref.index];
    }
    return null;
  }

  // ── moveCard: single card move ─────────────────────────────────────────────

  moveCard(from: PileRef, to: PileRef): boolean {
    // Cannot move from foundation
    if (from.type === 'foundation') return false;

    const card = this.getCardFromSource(from);
    if (!card) return false;

    // Validate destination
    if (to.type === 'tableau') {
      if (!this.canPlaceOnTableau(card, this.state.tableau[to.index])) return false;
    } else if (to.type === 'foundation') {
      if (!this.canPlaceOnFoundation(card, this.state.foundations[to.index])) return false;
    } else if (to.type === 'freecell') {
      if (this.state.freeCells[to.index] !== null) return false;
    } else {
      return false;
    }

    // Determine score delta
    const scoreDelta = to.type === 'foundation' ? SCORE.FOUNDATION_MOVE : 0;

    // Execute the move
    this.executeMove(from, to, card, scoreDelta);
    return true;
  }

  private executeMove(from: PileRef, to: PileRef, card: Card, scoreDelta: number): void {
    const prevScore = this.state.score;
    const prevMoves = this.state.moves;

    // Remove card from source
    if (from.type === 'tableau') {
      this.state.tableau[from.index].pop();
    } else if (from.type === 'freecell') {
      this.state.freeCells[from.index] = null;
    }

    // Place card at destination
    if (to.type === 'tableau') {
      this.state.tableau[to.index].push(card);
    } else if (to.type === 'foundation') {
      this.state.foundations[to.index].push(card);
    } else if (to.type === 'freecell') {
      this.state.freeCells[to.index] = card;
    }

    this.state.score = applyScoreDelta(this.state, scoreDelta);
    this.state.moves += 1;

    // Push undo command
    this.undoManager.push({
      execute() {},
      undo: () => {
        // Remove card from destination
        if (to.type === 'tableau') {
          this.state.tableau[to.index].pop();
        } else if (to.type === 'foundation') {
          this.state.foundations[to.index].pop();
        } else if (to.type === 'freecell') {
          this.state.freeCells[to.index] = null;
        }
        // Restore card to source
        if (from.type === 'tableau') {
          this.state.tableau[from.index].push(card);
        } else if (from.type === 'freecell') {
          this.state.freeCells[from.index] = card;
        }
        this.state.score = prevScore;
        this.state.moves = prevMoves;
      },
    });

    // Check win
    if (checkWin(this.state)) {
      this.onWin?.();
    }
  }

  // ── moveStack: supermove ────────────────────────────────────────────────────

  moveStack(from: PileRef, count: number, to: PileRef): boolean {
    // Supermove only works tableau-to-tableau
    if (from.type !== 'tableau' || to.type !== 'tableau') {
      // For single card moves from/to other pile types, delegate to moveCard
      if (count === 1) return this.moveCard(from, to);
      return false;
    }

    if (count < 1) return false;
    if (count === 1) return this.moveCard(from, to);

    const srcCol = this.state.tableau[from.index];
    if (srcCol.length < count) return false;

    // Extract the sequence to move
    const cards = srcCol.slice(srcCol.length - count);

    // Validate: must be alternating-color descending sequence
    for (let i = 1; i < cards.length; i++) {
      if (!isOppositeColor(cards[i], cards[i - 1])) return false;
      if (cards[i].rank !== cards[i - 1].rank - 1) return false;
    }

    // Validate: bottom card of sequence must be placeable on destination
    const dstCol = this.state.tableau[to.index];
    if (!this.canPlaceOnTableau(cards[0], dstCol)) return false;

    // Compute supermove capacity
    const emptyFreeCells = this.state.freeCells.filter(c => c === null).length;
    let emptyTableauCols = 0;
    for (let i = 0; i < 8; i++) {
      if (i === from.index || i === to.index) continue;
      if (this.state.tableau[i].length === 0) emptyTableauCols++;
    }
    const maxMoveable = (emptyFreeCells + 1) * Math.pow(2, emptyTableauCols);

    if (count > maxMoveable) return false;

    // Execute the supermove
    const prevScore = this.state.score;
    const prevMoves = this.state.moves;

    srcCol.splice(srcCol.length - count, count);
    dstCol.push(...cards);

    this.state.moves += 1;

    this.undoManager.push({
      execute() {},
      undo: () => {
        dstCol.splice(dstCol.length - count, count);
        srcCol.push(...cards);
        this.state.score = prevScore;
        this.state.moves = prevMoves;
      },
    });

    return true;
  }

  // ── autoMoveToFoundation ────────────────────────────────────────────────────

  /**
   * A card is safe to auto-move if its rank ≤ min of both opposite-color
   * foundation top ranks + 1. This ensures we never auto-move a card that
   * could still be needed for tableau building.
   */
  private isSafeToAutoMove(card: Card): boolean {
    // Find the foundation that matches this card's suit
    const targetFoundation = this.state.foundations.find(f => {
      if (f.length === 0) return false;
      return f[0].suit === card.suit;
    });

    // Check if this card is the next one for its foundation
    const expectedRank = targetFoundation ? targetFoundation.length + 1 : 1;
    if (card.rank !== expectedRank) return false;

    // Aces are always safe
    if (card.rank === 1) return true;

    // Get the minimum foundation rank of both opposite-color suits
    const oppositeColorSuits = isRed(card.suit)
      ? (['clubs', 'spades'] as const)
      : (['diamonds', 'hearts'] as const);

    const oppositeRanks = oppositeColorSuits.map(suit => {
      const foundation = this.state.foundations.find(f =>
        f.length > 0 && f[0].suit === suit
      );
      return foundation ? foundation.length : 0;
    });

    const minOppositeRank = Math.min(...oppositeRanks);
    return card.rank <= minOppositeRank + 1;
  }

  private findFoundationForCard(card: Card): number {
    // First try to find a foundation that already has cards of this suit
    for (let i = 0; i < 4; i++) {
      const f = this.state.foundations[i];
      if (f.length > 0 && f[0].suit === card.suit) return i;
    }
    // Otherwise find an empty foundation
    for (let i = 0; i < 4; i++) {
      if (this.state.foundations[i].length === 0) return i;
    }
    return -1;
  }

  findFoundationTarget(from: PileRef): number {
    const card = this.getCardFromSource(from);
    if (!card) return -1;
    const idx = this.findFoundationForCard(card);
    if (idx === -1) return -1;
    return this.canPlaceOnFoundation(card, this.state.foundations[idx]) ? idx : -1;
  }

  autoMoveToFoundation(): number {
    let totalMoved = 0;
    let moved = true;

    while (moved) {
      moved = false;

      // Check tableau tops
      for (let col = 0; col < 8; col++) {
        const pile = this.state.tableau[col];
        if (pile.length === 0) continue;
        const card = pile[pile.length - 1];

        if (this.isSafeToAutoMove(card)) {
          const foundationIdx = this.findFoundationForCard(card);
          if (foundationIdx === -1) continue;
          if (this.canPlaceOnFoundation(card, this.state.foundations[foundationIdx])) {
            this.executeMove(
              { type: 'tableau', index: col },
              { type: 'foundation', index: foundationIdx },
              card,
              SCORE.FOUNDATION_MOVE
            );
            totalMoved++;
            moved = true;
          }
        }
      }

      // Check free cells
      for (let i = 0; i < 4; i++) {
        const card = this.state.freeCells[i];
        if (!card) continue;

        if (this.isSafeToAutoMove(card)) {
          const foundationIdx = this.findFoundationForCard(card);
          if (foundationIdx === -1) continue;
          if (this.canPlaceOnFoundation(card, this.state.foundations[foundationIdx])) {
            this.executeMove(
              { type: 'freecell', index: i },
              { type: 'foundation', index: foundationIdx },
              card,
              SCORE.FOUNDATION_MOVE
            );
            totalMoved++;
            moved = true;
          }
        }
      }
    }

    return totalMoved;
  }
}
