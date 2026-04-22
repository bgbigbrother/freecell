import { describe, it, expect, beforeEach } from 'vitest';
import { GameEngine, getInitialState } from '../src/game/gameEngine';
import type { GameState, Card } from '../src/game/types';

const createCard = (suit: Card['suit'], rank: Card['rank']): Card => ({
  suit,
  rank,
  faceUp: true,
});

describe('getInitialState', () => {
  it('creates 8 tableau columns', () => {
    const state = getInitialState();
    expect(state.tableau).toHaveLength(8);
  });

  it('creates 4 free cells', () => {
    const state = getInitialState();
    expect(state.freeCells).toHaveLength(4);
    expect(state.freeCells.every(cell => cell === null)).toBe(true);
  });

  it('creates 4 empty foundations', () => {
    const state = getInitialState();
    expect(state.foundations).toHaveLength(4);
    expect(state.foundations.every(f => f.length === 0)).toBe(true);
  });

  it('starts with score 0 and moves 0', () => {
    const state = getInitialState();
    expect(state.score).toBe(0);
    expect(state.moves).toBe(0);
  });

  it('deals 52 cards total', () => {
    const state = getInitialState();
    const totalCards = state.tableau.reduce((sum, col) => sum + col.length, 0);
    expect(totalCards).toBe(52);
  });

  it('deals 7 cards to first 4 columns, 6 to last 4', () => {
    const state = getInitialState();
    for (let i = 0; i < 4; i++) {
      expect(state.tableau[i]).toHaveLength(7);
    }
    for (let i = 4; i < 8; i++) {
      expect(state.tableau[i]).toHaveLength(6);
    }
  });

  it('all cards are face up', () => {
    const state = getInitialState();
    const allCards = state.tableau.flat();
    expect(allCards.every(card => card.faceUp)).toBe(true);
  });
});

describe('GameEngine', () => {
  let engine: GameEngine;

  beforeEach(() => {
    engine = new GameEngine();
  });

  describe('newGame', () => {
    it('resets the game state', () => {
      const initialState = engine.getState();
      engine.newGame();
      const newState = engine.getState();
      expect(newState).not.toBe(initialState);
      expect(newState.score).toBe(0);
      expect(newState.moves).toBe(0);
    });
  });

  describe('moveCard', () => {
    it('moves card from tableau to foundation', () => {
      // Create a fresh engine and set up state with an ace
      engine = new GameEngine();
      const state = engine.getState();
      // Replace first column with an ace
      state.tableau[0] = [createCard('clubs', 1)];

      const result = engine.moveCard({ type: 'tableau', index: 0 }, { type: 'foundation', index: 0 });
      expect(result).toBe(true);
      const newState = engine.getState();
      expect(newState.foundations[0]).toHaveLength(1);
      expect(newState.score).toBe(10);
      expect(newState.moves).toBe(1);
    });

    it('moves card from free cell to tableau', () => {
      engine = new GameEngine();
      const state = engine.getState();
      state.freeCells[0] = createCard('hearts', 5);
      state.tableau[0] = [createCard('clubs', 6)]; // Can place 5♥ on 6♣

      const result = engine.moveCard({ type: 'freecell', index: 0 }, { type: 'tableau', index: 0 });
      expect(result).toBe(true);
      const newState = engine.getState();
      expect(newState.freeCells[0]).toBe(null);
      expect(newState.tableau[0]).toHaveLength(2);
      expect(newState.tableau[0][1].rank).toBe(5);
    });

    it('rejects invalid moves', () => {
      engine = new GameEngine();
      const state = engine.getState();
      // Try to move from empty free cell
      const result = engine.moveCard({ type: 'freecell', index: 0 }, { type: 'tableau', index: 0 });
      expect(result).toBe(false);
    });

    it('cannot move from foundation', () => {
      engine = new GameEngine();
      const result = engine.moveCard({ type: 'foundation', index: 0 }, { type: 'tableau', index: 0 });
      expect(result).toBe(false);
    });
  });

  describe('moveStack', () => {
    it('performs single card move when count is 1', () => {
      engine = new GameEngine();
      const state = engine.getState();
      state.tableau[0] = [createCard('hearts', 5)];
      state.tableau[1] = [createCard('clubs', 6)]; // Can place 5♥ on 6♣

      const result = engine.moveStack({ type: 'tableau', index: 0 }, 1, { type: 'tableau', index: 1 });
      expect(result).toBe(true);
      const newState = engine.getState();
      expect(newState.tableau[0]).toHaveLength(0);
      expect(newState.tableau[1]).toHaveLength(2);
    });

    it('rejects supermove with invalid sequence', () => {
      engine = new GameEngine();
      const state = engine.getState();
      // Set up invalid sequence: 7♣, 5♥ (not descending alternating)
      state.tableau[0] = [createCard('clubs', 7), createCard('hearts', 5)];
      state.tableau[1] = [createCard('diamonds', 4)];

      const result = engine.moveStack({ type: 'tableau', index: 0 }, 2, { type: 'tableau', index: 1 });
      expect(result).toBe(false);
    });

    it('respects supermove capacity limits', () => {
      engine = new GameEngine();
      const state = engine.getState();
      // Fill free cells to reduce capacity
      state.freeCells = [createCard('spades', 1), createCard('spades', 2), createCard('spades', 3), createCard('spades', 4)];
      state.tableau[0] = Array.from({ length: 5 }, (_, i) => createCard('clubs', 13 - i)); // Long sequence
      state.tableau[1] = [createCard('diamonds', 8)];

      // With 0 empty free cells, capacity is 1
      const result = engine.moveStack({ type: 'tableau', index: 0 }, 2, { type: 'tableau', index: 1 });
      expect(result).toBe(false);
    });
  });

  describe('autoMoveToFoundation', () => {
    it('does not crash when called', () => {
      engine = new GameEngine();
      const moved = engine.autoMoveToFoundation();
      expect(typeof moved).toBe('number');
      expect(moved).toBeGreaterThanOrEqual(0);
    });
  });

  describe('findFoundationTarget', () => {
    it('returns correct foundation index for valid moves', () => {
      engine = new GameEngine();
      const state = engine.getState();
      state.tableau[0] = [createCard('clubs', 1)]; // Ace

      const target = engine.findFoundationTarget({ type: 'tableau', index: 0 });
      expect(target).toBe(0); // First empty foundation
    });

    it('returns -1 for invalid foundation moves', () => {
      engine = new GameEngine();
      const state = engine.getState();
      state.tableau[0] = [createCard('clubs', 3)]; // 3 without 2

      const target = engine.findFoundationTarget({ type: 'tableau', index: 0 });
      expect(target).toBe(-1);
    });
  });

  describe('undo', () => {
    it('can undo after making a move', () => {
      engine = new GameEngine();
      const state = engine.getState();
      state.tableau[0] = [createCard('clubs', 1)];

      engine.moveCard({ type: 'tableau', index: 0 }, { type: 'foundation', index: 0 });
      expect(engine.canUndo()).toBe(true);
    });

    it('cannot undo when no moves made', () => {
      engine = new GameEngine();
      expect(engine.canUndo()).toBe(false);
      engine.undo(); // Should not throw
    });
  });
});