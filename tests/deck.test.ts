import { describe, it, expect } from 'vitest';
import { createDeck, shuffle } from '../src/game/deck';

describe('createDeck', () => {
  it('creates exactly 52 cards', () => {
    const deck = createDeck();
    expect(deck).toHaveLength(52);
  });

  it('contains 4 suits with 13 cards each', () => {
    const deck = createDeck();
    for (const suit of ['clubs', 'diamonds', 'hearts', 'spades'] as const) {
      expect(deck.filter(c => c.suit === suit)).toHaveLength(13);
    }
  });

  it('contains ranks 1-13 for each suit', () => {
    const deck = createDeck();
    for (const suit of ['clubs', 'diamonds', 'hearts', 'spades'] as const) {
      const ranks = deck.filter(c => c.suit === suit).map(c => c.rank).sort((a, b) => a - b);
      expect(ranks).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
    }
  });

  it('all cards are face-up', () => {
    const deck = createDeck();
    expect(deck.every(c => c.faceUp)).toBe(true);
  });
});

describe('shuffle', () => {
  it('returns the same array reference', () => {
    const deck = createDeck();
    const result = shuffle(deck);
    expect(result).toBe(deck);
  });

  it('preserves all 52 cards', () => {
    const deck = createDeck();
    const before = deck.map(c => `${c.suit}-${c.rank}`).sort();
    shuffle(deck);
    const after = deck.map(c => `${c.suit}-${c.rank}`).sort();
    expect(after).toEqual(before);
  });

  it('preserves deck length', () => {
    const deck = createDeck();
    shuffle(deck);
    expect(deck).toHaveLength(52);
  });
});
