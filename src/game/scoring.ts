import type { GameState } from './types';

/**
 * Applies a score delta to the current game state score,
 * clamping the result to a minimum of 0.
 */
export function applyScoreDelta(state: GameState, delta: number): number {
  return Math.max(0, state.score + delta);
}
