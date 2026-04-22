export type Suit = 'clubs' | 'diamonds' | 'hearts' | 'spades';
export type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
// 1=Ace, 11=Jack, 12=Queen, 13=King

export interface Card {
  suit: Suit;
  rank: Rank;
  faceUp: boolean; // always true in FreeCell after deal
}

export type PileType = 'freecell' | 'foundation' | 'tableau';

export interface PileRef {
  type: PileType;
  index: number; // 0-3 for freeCells, 0-3 for foundations, 0-7 for tableau
}

export interface GameState {
  tableau: Card[][];           // 8 columns
  freeCells: (Card | null)[];  // 4 slots
  foundations: Card[][];       // 4 piles
  score: number;               // starts at 0
  moves: number;
}

export interface Move {
  from: PileRef;
  to: PileRef;
  cards: Card[];
  scoreDelta: number;
}

export interface Command {
  execute(): void;
  undo(): void;
}

export const SCORE = {
  INITIAL: 0,
  FOUNDATION_MOVE: 10,
} as const;
