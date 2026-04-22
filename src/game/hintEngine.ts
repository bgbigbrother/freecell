/**
 * Hint engine for FreeCell Solitaire.
 *
 * Evaluates all legal moves and scores them using heuristics to suggest
 * the best move for the player. Priority order:
 *
 * 1. Move to foundation (highest value — progresses toward winning)
 * 2. Uncover cards that can go to foundation next
 * 3. Move cards from free cells back to tableau (frees up cells)
 * 4. Build longer descending sequences on tableau
 * 5. Move cards to empty columns (only if it frees useful cards)
 * 6. Move to a free cell (last resort)
 */

import type { Card, GameState, PileRef } from './types';

export interface HintMove {
  from: PileRef;
  to: PileRef;
  /** Number of cards (1 for single, >1 for supermove) */
  count: number;
  /** Higher = better move */
  score: number;
}

// ── Color helpers ─────────────────────────────────────────────────────────────

function isRed(suit: Card['suit']): boolean {
  return suit === 'diamonds' || suit === 'hearts';
}

function isOppositeColor(a: Card, b: Card): boolean {
  return isRed(a.suit) !== isRed(b.suit);
}

// ── Validation helpers (mirror gameEngine logic) ──────────────────────────────

function canPlaceOnTableau(card: Card, col: Card[]): boolean {
  if (col.length === 0) return true;
  const top = col[col.length - 1];
  return isOppositeColor(card, top) && card.rank === top.rank - 1;
}

function canPlaceOnFoundation(card: Card, foundation: Card[]): boolean {
  if (foundation.length === 0) return card.rank === 1;
  const top = foundation[foundation.length - 1];
  return card.suit === top.suit && card.rank === top.rank + 1;
}

function findFoundationForCard(state: GameState, card: Card): number {
  for (let i = 0; i < 4; i++) {
    const f = state.foundations[i];
    if (f.length > 0 && f[0].suit === card.suit) return i;
  }
  for (let i = 0; i < 4; i++) {
    if (state.foundations[i].length === 0) return i;
  }
  return -1;
}

function supermoveCapacity(state: GameState, fromCol: number, toCol: number): number {
  const emptyFreeCells = state.freeCells.filter(c => c === null).length;
  let emptyTableauCols = 0;
  for (let i = 0; i < 8; i++) {
    if (i === fromCol || i === toCol) continue;
    if (state.tableau[i].length === 0) emptyTableauCols++;
  }
  return (emptyFreeCells + 1) * Math.pow(2, emptyTableauCols);
}

// ── Sequence detection ────────────────────────────────────────────────────────

/** Returns the length of the valid descending alternating-color sequence at the bottom of a column. */
function sequenceLength(col: Card[]): number {
  if (col.length === 0) return 0;
  let len = 1;
  for (let i = col.length - 2; i >= 0; i--) {
    const lower = col[i + 1];
    const upper = col[i];
    if (isOppositeColor(upper, lower) && upper.rank === lower.rank + 1) {
      len++;
    } else {
      break;
    }
  }
  return len;
}

// ── Scoring heuristics ────────────────────────────────────────────────────────

/** How close is a card to being needed on its foundation? Lower = more urgent. */
function foundationGap(state: GameState, card: Card): number {
  const fIdx = findFoundationForCard(state, card);
  if (fIdx === -1) return card.rank;
  const f = state.foundations[fIdx];
  const nextNeeded = f.length > 0 ? f[f.length - 1].rank + 1 : 1;
  return card.rank - nextNeeded;
}

/** Check if the card directly under the top of a column can go to foundation. */
function uncoversBeneficialCard(state: GameState, colIdx: number): boolean {
  const col = state.tableau[colIdx];
  if (col.length < 2) return false;
  const under = col[col.length - 2];
  return foundationGap(state, under) === 0;
}

function scoreMove(state: GameState, from: PileRef, to: PileRef, count: number): number {
  let score = 0;

  // ── Foundation moves are king ──────────────────────────────────────────
  if (to.type === 'foundation') {
    score += 1000;
    // Aces and 2s are even more valuable to move early
    const card = getTopCard(state, from);
    if (card && card.rank <= 2) score += 200;
    return score;
  }

  const card = getMovedCard(state, from, count);
  if (!card) return -1;

  // ── Moving from free cell to tableau (frees a cell) ────────────────────
  if (from.type === 'freecell' && to.type === 'tableau') {
    score += 500;
    // Bonus if it builds a longer sequence
    const destCol = state.tableau[to.index];
    if (destCol.length > 0) {
      score += 100; // Prefer non-empty columns (builds sequence)
    }
  }

  // ── Tableau to tableau ─────────────────────────────────────────────────
  if (from.type === 'tableau' && to.type === 'tableau') {
    const srcCol = state.tableau[from.index];
    const dstCol = state.tableau[to.index];

    // Moving to empty column
    if (dstCol.length === 0) {
      // Only valuable if it uncovers something useful or the card is a King
      if (card.rank === 13) {
        score += 200; // Kings belong on empty columns
      } else if (uncoversBeneficialCard(state, from.index)) {
        score += 350;
      } else if (srcCol.length > count) {
        // Moving partial sequence to empty col — moderate value
        score += 100;
      } else {
        // Moving entire column to empty column — pointless
        score -= 50;
      }
    } else {
      // Building on non-empty column
      score += 300;

      // Bonus for building longer sequences
      const existingSeqLen = sequenceLength(dstCol);
      score += (existingSeqLen + count) * 15;

      // Bonus if this uncovers a card that can go to foundation
      if (uncoversBeneficialCard(state, from.index)) {
        score += 400;
      }

      // Bonus if the moved card is close to foundation-ready
      const gap = foundationGap(state, card);
      if (gap <= 2) score += (3 - gap) * 50;
    }

    // Penalty for moving from a column that already has a nice sequence
    // (don't break good sequences unless there's a reason)
    if (count < sequenceLength(srcCol) && !uncoversBeneficialCard(state, from.index)) {
      score -= 100;
    }
  }

  // ── Tableau/freecell to free cell (last resort) ────────────────────────
  if (to.type === 'freecell') {
    score += 50;
    // Slightly better if it uncovers a foundation-ready card
    if (from.type === 'tableau' && uncoversBeneficialCard(state, from.index)) {
      score += 300;
    }
  }

  return score;
}

function getTopCard(state: GameState, ref: PileRef): Card | null {
  if (ref.type === 'tableau') {
    const col = state.tableau[ref.index];
    return col.length > 0 ? col[col.length - 1] : null;
  }
  if (ref.type === 'freecell') {
    return state.freeCells[ref.index];
  }
  return null;
}

function getMovedCard(state: GameState, ref: PileRef, count: number): Card | null {
  if (ref.type === 'tableau') {
    const col = state.tableau[ref.index];
    const idx = col.length - count;
    return idx >= 0 ? col[idx] : null;
  }
  if (ref.type === 'freecell') {
    return state.freeCells[ref.index];
  }
  return null;
}

// ── Main hint function ────────────────────────────────────────────────────────

export function findBestHint(state: GameState): HintMove | null {
  const moves: HintMove[] = [];

  // 1. Check all tableau tops and free cells → foundation
  for (let col = 0; col < 8; col++) {
    const pile = state.tableau[col];
    if (pile.length === 0) continue;
    const card = pile[pile.length - 1];
    const fIdx = findFoundationForCard(state, card);
    if (fIdx !== -1 && canPlaceOnFoundation(card, state.foundations[fIdx])) {
      const from: PileRef = { type: 'tableau', index: col };
      const to: PileRef = { type: 'foundation', index: fIdx };
      moves.push({ from, to, count: 1, score: scoreMove(state, from, to, 1) });
    }
  }

  for (let i = 0; i < 4; i++) {
    const card = state.freeCells[i];
    if (!card) continue;
    const fIdx = findFoundationForCard(state, card);
    if (fIdx !== -1 && canPlaceOnFoundation(card, state.foundations[fIdx])) {
      const from: PileRef = { type: 'freecell', index: i };
      const to: PileRef = { type: 'foundation', index: fIdx };
      moves.push({ from, to, count: 1, score: scoreMove(state, from, to, 1) });
    }
  }

  // 2. Free cell → tableau
  for (let i = 0; i < 4; i++) {
    const card = state.freeCells[i];
    if (!card) continue;
    const from: PileRef = { type: 'freecell', index: i };
    for (let col = 0; col < 8; col++) {
      const dstCol = state.tableau[col];
      if (canPlaceOnTableau(card, dstCol)) {
        const to: PileRef = { type: 'tableau', index: col };
        moves.push({ from, to, count: 1, score: scoreMove(state, from, to, 1) });
      }
    }
  }

  // 3. Tableau → tableau (single and supermoves)
  for (let srcIdx = 0; srcIdx < 8; srcIdx++) {
    const srcCol = state.tableau[srcIdx];
    if (srcCol.length === 0) continue;
    const maxSeq = sequenceLength(srcCol);
    const maxMoveable = supermoveCapacity(state, srcIdx, -1);

    for (let count = 1; count <= Math.min(maxSeq, maxMoveable); count++) {
      const bottomCard = srcCol[srcCol.length - count];
      for (let dstIdx = 0; dstIdx < 8; dstIdx++) {
        if (dstIdx === srcIdx) continue;
        const dstCol = state.tableau[dstIdx];

        // Recalculate capacity for this specific destination
        const cap = supermoveCapacity(state, srcIdx, dstIdx);
        if (count > cap) continue;

        if (canPlaceOnTableau(bottomCard, dstCol)) {
          // Skip moving entire column to empty column (pointless)
          if (dstCol.length === 0 && count === srcCol.length && bottomCard.rank !== 13) continue;

          const from: PileRef = { type: 'tableau', index: srcIdx };
          const to: PileRef = { type: 'tableau', index: dstIdx };
          moves.push({ from, to, count, score: scoreMove(state, from, to, count) });
        }
      }
    }
  }

  // 4. Tableau → free cell (only top card)
  const hasEmptyCell = state.freeCells.some(c => c === null);
  if (hasEmptyCell) {
    const emptyCellIdx = state.freeCells.findIndex(c => c === null);
    for (let col = 0; col < 8; col++) {
      const pile = state.tableau[col];
      if (pile.length === 0) continue;
      const from: PileRef = { type: 'tableau', index: col };
      const to: PileRef = { type: 'freecell', index: emptyCellIdx };
      moves.push({ from, to, count: 1, score: scoreMove(state, from, to, 1) });
    }
  }

  if (moves.length === 0) return null;

  // Sort by score descending and return the best
  moves.sort((a, b) => b.score - a.score);
  return moves[0];
}
