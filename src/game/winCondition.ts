import type { GameState } from './types';

/**
 * Returns true when all 4 foundation piles each contain exactly 13 cards,
 * indicating the player has won the game.
 */
export function checkWin(state: GameState): boolean {
  return state.foundations.every((pile) => pile.length === 13);
}
