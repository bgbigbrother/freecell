/**
 * Responsive layout calculator for FreeCell Solitaire.
 * Handles 4 free cells (top-left), 4 foundations (top-right), and 8 tableau columns.
 */

export interface PilePosition {
  x: number;
  y: number;
}

export interface LayoutConfig {
  cardWidth: number;
  cardHeight: number;
  gap: number;
  padding: number;
  tableauFaceUpOffset: number;
  topRowY: number;
  tableauY: number;
  positions: {
    freeCells: PilePosition[];   // 4 entries
    foundations: PilePosition[];  // 4 entries
    tableau: PilePosition[];     // 8 entries
  };
}

const CARD_ASPECT_RATIO = 112 / 80;
const BASE_PADDING = 12;
const BASE_GAP_RATIO = 0.10;
const BASE_TOP_ROW_BOTTOM_GAP = 16;

export const TOOLBAR_HEIGHT = 60;

/**
 * Worst-case column height in FreeCell:
 * All cards face-up, max ~13 face-up offsets + one card height.
 */
function maxTableauColumnHeight(
  cardHeight: number,
  tableauFaceUpOffset: number,
): number {
  // Worst case: a column could accumulate many cards (up to ~20 in extreme play)
  // but initial max is 7 cards per column. Use 19 offsets as safe upper bound.
  return 19 * tableauFaceUpOffset + cardHeight;
}

export function calculateLayout(viewportWidth: number, viewportHeight: number): LayoutConfig {
  const padding = viewportWidth < 480 ? 6 : BASE_PADDING;
  const usableWidth = viewportWidth - 2 * padding;

  // Initial candidate: fit 8 columns with gaps
  let cardWidth = Math.floor(usableWidth / (8 + 7 * BASE_GAP_RATIO));

  // Iterate down until above-the-fold constraint is satisfied
  for (let attempt = 0; attempt < 200; attempt++) {
    const cardHeight = Math.floor(cardWidth * CARD_ASPECT_RATIO);
    const tableauFaceUpOffset = Math.max(12, Math.floor(cardHeight * 0.25));
    const topRowY = 0;
    const tableauY = topRowY + cardHeight + BASE_TOP_ROW_BOTTOM_GAP;
    const maxColHeight = maxTableauColumnHeight(cardHeight, tableauFaceUpOffset);

    if (tableauY + maxColHeight + TOOLBAR_HEIGHT <= viewportHeight - padding) {
      break;
    }

    if (cardWidth <= 20) break;
    cardWidth -= 1;
  }

  const cardHeight = Math.floor(cardWidth * CARD_ASPECT_RATIO);
  const tableauFaceUpOffset = Math.max(12, Math.floor(cardHeight * 0.25));

  const topRowY = 0;
  const tableauY = topRowY + cardHeight + BASE_TOP_ROW_BOTTOM_GAP;

  // Gap derived from card width
  const gap = Math.max(2, Math.floor(cardWidth * BASE_GAP_RATIO));

  // Top row: 4 free cells on the left, 4 foundations on the right
  const freeCells: PilePosition[] = [];
  for (let i = 0; i < 4; i++) {
    freeCells.push({ x: padding + i * (cardWidth + gap), y: topRowY });
  }

  const foundationsWidth = 4 * cardWidth + 3 * gap;
  const foundationStartX = padding + usableWidth - foundationsWidth;

  const foundations: PilePosition[] = [];
  for (let i = 0; i < 4; i++) {
    foundations.push({ x: foundationStartX + i * (cardWidth + gap), y: topRowY });
  }

  // Tableau: 8 evenly spaced columns
  const tableau: PilePosition[] = [];
  for (let i = 0; i < 8; i++) {
    tableau.push({ x: padding + i * (cardWidth + gap), y: tableauY });
  }

  return {
    cardWidth,
    cardHeight,
    gap,
    padding,
    tableauFaceUpOffset,
    topRowY,
    tableauY,
    positions: {
      freeCells,
      foundations,
      tableau,
    },
  };
}
