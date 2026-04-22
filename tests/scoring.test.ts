import { describe, it, expect } from 'vitest';
import { applyScoreDelta } from '../src/game/scoring';
import type { GameState } from '../src/game/types';

describe('applyScoreDelta', () => {
  it('adds positive delta to score', () => {
    const state: GameState = {
      tableau: [],
      freeCells: [],
      foundations: [],
      score: 10,
      moves: 0,
    };
    expect(applyScoreDelta(state, 5)).toBe(15);
  });

  it('subtracts negative delta from score', () => {
    const state: GameState = {
      tableau: [],
      freeCells: [],
      foundations: [],
      score: 10,
      moves: 0,
    };
    expect(applyScoreDelta(state, -3)).toBe(7);
  });

  it('clamps score to minimum of 0', () => {
    const state: GameState = {
      tableau: [],
      freeCells: [],
      foundations: [],
      score: 5,
      moves: 0,
    };
    expect(applyScoreDelta(state, -10)).toBe(0);
  });

  it('does not modify the original state', () => {
    const state: GameState = {
      tableau: [],
      freeCells: [],
      foundations: [],
      score: 10,
      moves: 0,
    };
    applyScoreDelta(state, 5);
    expect(state.score).toBe(10);
  });
});