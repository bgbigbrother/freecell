import { describe, it, expect } from 'vitest';
import { checkWin } from '../src/game/winCondition';
import type { GameState, Card } from '../src/game/types';

describe('checkWin', () => {
  it('returns false when foundations are empty', () => {
    const state: GameState = {
      tableau: [],
      freeCells: [],
      foundations: [[], [], [], []],
      score: 0,
      moves: 0,
    };
    expect(checkWin(state)).toBe(false);
  });

  it('returns false when some foundations are incomplete', () => {
    const state: GameState = {
      tableau: [],
      freeCells: [],
      foundations: [
        Array.from({ length: 13 }, (_, i) => ({ suit: 'clubs', rank: i + 1, faceUp: true })),
        Array.from({ length: 12 }, (_, i) => ({ suit: 'diamonds', rank: i + 1, faceUp: true })),
        [],
        [],
      ],
      score: 0,
      moves: 0,
    };
    expect(checkWin(state)).toBe(false);
  });

  it('returns true when all foundations have 13 cards', () => {
    const state: GameState = {
      tableau: [],
      freeCells: [],
      foundations: [
        Array.from({ length: 13 }, (_, i) => ({ suit: 'clubs', rank: i + 1, faceUp: true })),
        Array.from({ length: 13 }, (_, i) => ({ suit: 'diamonds', rank: i + 1, faceUp: true })),
        Array.from({ length: 13 }, (_, i) => ({ suit: 'hearts', rank: i + 1, faceUp: true })),
        Array.from({ length: 13 }, (_, i) => ({ suit: 'spades', rank: i + 1, faceUp: true })),
      ],
      score: 0,
      moves: 0,
    };
    expect(checkWin(state)).toBe(true);
  });

  it('returns false when a foundation has more than 13 cards', () => {
    const state: GameState = {
      tableau: [],
      freeCells: [],
      foundations: [
        Array.from({ length: 14 }, (_, i) => ({ suit: 'clubs', rank: i + 1, faceUp: true })),
        Array.from({ length: 13 }, (_, i) => ({ suit: 'diamonds', rank: i + 1, faceUp: true })),
        Array.from({ length: 13 }, (_, i) => ({ suit: 'hearts', rank: i + 1, faceUp: true })),
        Array.from({ length: 13 }, (_, i) => ({ suit: 'spades', rank: i + 1, faceUp: true })),
      ],
      score: 0,
      moves: 0,
    };
    expect(checkWin(state)).toBe(false);
  });
});