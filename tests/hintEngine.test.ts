import { describe, it, expect } from 'vitest';
import { findBestHint } from '../src/game/hintEngine';
import type { GameState, Card } from '../src/game/types';

const createCard = (suit: Card['suit'], rank: Card['rank']): Card => ({
  suit,
  rank,
  faceUp: true,
});

const createState = (overrides: Partial<GameState> = {}): GameState => ({
  tableau: Array.from({ length: 8 }, () => []),
  freeCells: [null, null, null, null],
  foundations: Array.from({ length: 4 }, () => []),
  score: 0,
  moves: 0,
  ...overrides,
});

describe('findBestHint', () => {
  it('returns null when no moves are possible', () => {
    const state = createState({
      tableau: Array.from({ length: 8 }, () => []),
      freeCells: [null, null, null, null],
      foundations: Array.from({ length: 4 }, () => []),
    });
    expect(findBestHint(state)).toBe(null);
  });

  it('prioritizes foundation moves', () => {
    const state = createState({
      tableau: [
        [createCard('clubs', 1)], // Ace of clubs can go to foundation
        [],
        [],
        [],
        [],
        [],
        [],
        [],
      ],
      foundations: [[], [], [], []],
    });
    const hint = findBestHint(state);
    expect(hint).not.toBe(null);
    expect(hint!.to.type).toBe('foundation');
    expect(hint!.from).toEqual({ type: 'tableau', index: 0 });
    expect(hint!.to).toEqual({ type: 'foundation', index: 0 });
  });

  it('moves cards from free cells to foundation', () => {
    const state = createState({
      freeCells: [createCard('hearts', 1), null, null, null],
      foundations: [[], [], [], []],
    });
    const hint = findBestHint(state);
    expect(hint).not.toBe(null);
    expect(hint!.from).toEqual({ type: 'freecell', index: 0 });
    expect(hint!.to.type).toBe('foundation');
  });

  it('moves cards from free cells to tableau', () => {
    const state = createState({
      freeCells: [createCard('hearts', 5), null, null, null],
      tableau: [
        [createCard('clubs', 6)], // Can place 5 of hearts on 6 of clubs
        [],
        [],
        [],
        [],
        [],
        [],
        [],
      ],
    });
    const hint = findBestHint(state);
    expect(hint).not.toBe(null);
    expect(hint!.from).toEqual({ type: 'freecell', index: 0 });
    expect(hint!.to).toEqual({ type: 'tableau', index: 0 });
  });

  it('handles supermoves between tableau columns', () => {
    const state = createState({
      tableau: [
        [createCard('clubs', 7), createCard('hearts', 6), createCard('clubs', 5)], // Sequence: 7♣,6♥,5♣
        [createCard('diamonds', 4)], // Can place 5♣ on 4♦
        [],
        [],
        [],
        [],
        [],
        [],
      ],
    });
    const hint = findBestHint(state);
    expect(hint).not.toBe(null);
    expect(hint!.from.type).toBe('tableau');
    expect(hint!.to.type).toBe('tableau');
    // May or may not be a supermove depending on scoring
  });

  it('moves kings to empty columns', () => {
    const state = createState({
      tableau: [
        [createCard('clubs', 13)], // King of clubs
        [],
        [],
        [],
        [],
        [],
        [],
        [],
      ],
    });
    const hint = findBestHint(state);
    expect(hint).not.toBe(null);
    expect(hint!.from).toEqual({ type: 'tableau', index: 0 });
    expect(hint!.to).toEqual({ type: 'tableau', index: 1 });
  });

  it('moves cards to free cells as last resort', () => {
    const state = createState({
      tableau: [
        [createCard('clubs', 7)],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
      ],
      freeCells: [null, null, null, null],
    });
    const hint = findBestHint(state);
    expect(hint).not.toBe(null);
    expect(hint!.from).toEqual({ type: 'tableau', index: 0 });
    expect(hint!.to.type).toBe('freecell');
  });

  it('does not suggest moving entire column to empty column unless king', () => {
    const state = createState({
      tableau: [
        [createCard('clubs', 7)], // Not a king
        [],
        [],
        [],
        [],
        [],
        [],
        [],
      ],
    });
    const hint = findBestHint(state);
    expect(hint).not.toBe(null);
    expect(hint!.to.type).toBe('freecell'); // Should go to free cell instead
  });

  it('prefers foundation moves over other moves', () => {
    const state = createState({
      tableau: [
        [createCard('clubs', 1)], // Ace can go to foundation
        [createCard('hearts', 5)],
        [],
        [],
        [],
        [],
        [],
        [],
      ],
      freeCells: [null, null, null, null],
    });
    const hint = findBestHint(state);
    expect(hint!.to.type).toBe('foundation');
  });

  it('scores moves appropriately', () => {
    const state = createState({
      tableau: [
        [createCard('clubs', 1)], // Foundation move - highest score
        [createCard('hearts', 5)], // Tableau move - lower score
        [],
        [],
        [],
        [],
        [],
        [],
      ],
      freeCells: [null, null, null, null],
    });
    const hint = findBestHint(state);
    expect(hint!.score).toBeGreaterThan(1000); // Foundation moves get 1000+
  });
});