/**
 * Card animation helpers for FreeCell Solitaire.
 *
 * Animations work by creating temporary "flying" card elements appended to
 * document.body, animated via CSS transitions, then removed once the
 * transition ends. The real game state is rendered normally after the
 * animation completes.
 *
 * FreeCell differences from Spider:
 *  - 8 tableau columns (not 10)
 *  - No stock pile — cards fly from the first free cell position
 *  - All cards face-up
 *  - Deal order: one card per column across all 8 columns, repeated 6-7 times
 *    (cols 0-3 get 7 cards, cols 4-7 get 6 cards) — 52 cards total
 */

import type { Card, GameState, PileRef } from '../game/types';
import type { HintMove } from '../game/hintEngine';
import type { LayoutConfig } from './layout';

// ─── Shared helpers ───────────────────────────────────────────────────────────

const RANK_MAP: Record<number, string> = {
  1:'A',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',8:'8',9:'9',10:'10',11:'J',12:'Q',13:'K',
};
const SUIT_MAP: Record<string, string> = {
  spades:'S', hearts:'H', diamonds:'D', clubs:'C',
};

function cardImgSrc(card: Card): string {
  return `/cards/${RANK_MAP[card.rank]}${SUIT_MAP[card.suit]}.svg`;
}

function pileRect(pileEl: HTMLElement): DOMRect {
  return pileEl.getBoundingClientRect();
}

function createFlyingCard(
  card: Card,
  faceUp: boolean,
  x: number,
  y: number,
  width: number,
  height: number,
): HTMLElement {
  const el = document.createElement('img') as HTMLImageElement;
  el.src = faceUp ? cardImgSrc(card) : '/cards/Red_Back.svg';
  el.style.cssText = `
    position: fixed;
    left: ${x}px;
    top: ${y}px;
    width: ${width}px;
    height: ${height}px;
    pointer-events: none;
    z-index: 9999;
    border-radius: 6px;
    will-change: transform, opacity;
    transition: none;
  `;
  return el;
}

function delay(ms: number): Promise<void> {
  return new Promise(r => setTimeout(r, ms));
}

// ─── 1. Deal animation ────────────────────────────────────────────────────────

/**
 * Animate the initial deal for FreeCell Solitaire: one card at a time, flying
 * from the center of the viewport to each tableau column in deal order.
 *
 * FreeCell deal order: row 0 across all 8 cols, then row 1 across all 8 cols,
 * etc. Columns 0-3 receive 7 cards; columns 4-7 receive 6 cards.
 * Total: 52 cards. Animation completes within 2 seconds.
 */
export async function animateDeal(
  container: HTMLElement,
  layout: LayoutConfig,
  tableau: GameState['tableau'],
  renderFn: () => void,
  onCardLand?: () => void,
): Promise<void> {
  const { cardWidth, cardHeight, tableauFaceUpOffset } = layout;

  // Clear tableau columns — we'll build them up card-by-card
  for (let col = 0; col < 8; col++) {
    const el = container.querySelector<HTMLElement>(`#tableau-${col}`);
    if (el) el.innerHTML = '';
  }

  // Build deal sequence: row by row across all 8 columns
  // Cols 0-3 get 7 cards (rows 0-6), cols 4-7 get 6 cards (rows 0-5)
  const sequence: Array<{ col: number; row: number }> = [];
  const maxRows = 7;
  for (let row = 0; row < maxRows; row++) {
    for (let col = 0; col < 8; col++) {
      const colMax = col < 4 ? 7 : 6;
      if (row < colMax) {
        sequence.push({ col, row });
      }
    }
  }

  const colCardCount = new Array(8).fill(0);

  // 52 cards must complete within 2 seconds
  // Total time per card = DURATION + PAUSE
  const TOTAL_TIME = 2000;
  const perCard = Math.floor(TOTAL_TIME / sequence.length); // ~38ms per card
  const DURATION = Math.max(20, perCard - 6); // flight time
  const PAUSE = Math.max(2, perCard - DURATION); // pause after landing

  const appRect = container.getBoundingClientRect();
  const actualWidth = container.clientWidth;
  const contentWidth = Math.min(actualWidth, 1024);
  const xOffset = Math.floor((actualWidth - contentWidth) / 2);

  // Start position: first free cell slot ("Free Cell 1")
  const startX = appRect.left + cardWidth / 4;
  const startY = appRect.top + cardHeight / 1.6;


  for (const { col, row } of sequence) {
    const colPos = layout.positions.tableau[col];

    let topOffset = 0;
    for (let r = 0; r < colCardCount[col]; r++) {
      topOffset += tableauFaceUpOffset;
    }

    const destViewX = appRect.left + colPos.x + xOffset;
    const destViewY = appRect.top + colPos.y + topOffset;

    const card = tableau[col][row];

    // Flying card — face-up since all FreeCell cards are face-up
    const flyEl = document.createElement('img') as HTMLImageElement;
    flyEl.src = cardImgSrc(card);
    flyEl.style.cssText = `
      position: fixed;
      left: ${startX}px;
      top: ${startY}px;
      width: ${cardWidth}px;
      height: ${cardHeight}px;
      pointer-events: none;
      z-index: 9999;
      border-radius: 6px;
    `;
    document.body.appendChild(flyEl);

    // Force reflow then animate
    flyEl.getBoundingClientRect();
    flyEl.style.transition = `left ${DURATION}ms cubic-bezier(0.22,0.61,0.36,1),
                               top  ${DURATION}ms cubic-bezier(0.22,0.61,0.36,1)`;
    flyEl.style.left = `${destViewX}px`;
    flyEl.style.top = `${destViewY}px`;

    await delay(DURATION);
    flyEl.remove();
    onCardLand?.();

    // Place a permanent card element in the tableau column
    const placedEl = document.createElement('img') as HTMLImageElement;
    placedEl.src = cardImgSrc(card);
    placedEl.className = 'card';
    placedEl.style.cssText = `
      position: absolute;
      top: ${topOffset}px;
      left: 0;
      width: ${cardWidth}px;
      pointer-events: none;
    `;

    const colEl = container.querySelector<HTMLElement>(`#tableau-${col}`);
    if (colEl) colEl.appendChild(placedEl);

    colCardCount[col]++;

    await delay(PAUSE);
  }

  // All cards placed — do the real render to show correct card faces
  renderFn();
}

// ─── 2. Foundation move animation ────────────────────────────────────────────

/**
 * Animate a card flying from its source pile to a foundation pile.
 *
 * @param container   The game container element
 * @param card        The card being moved
 * @param from        Source PileRef (tableau or freecell)
 * @param to          Destination PileRef (foundation)
 * @param layout      Current layout config
 * @param renderFn    Called after animation to show the real state
 */
export async function animateToFoundation(
  container: HTMLElement,
  card: Card,
  from: PileRef,
  to: PileRef,
  layout: LayoutConfig,
  renderFn: () => void,
): Promise<void> {
  let sourceEl: HTMLElement | null = null;
  if (from.type === 'tableau') {
    sourceEl = container.querySelector<HTMLElement>(`#tableau-${from.index}`);
  } else if (from.type === 'freecell') {
    sourceEl = container.querySelector<HTMLElement>(`#freecell-${from.index}`);
  } else if (from.type === 'foundation') {
    sourceEl = container.querySelector<HTMLElement>(`#foundation-${from.index}`);
  }

  const destEl = container.querySelector<HTMLElement>(`#foundation-${to.index}`);
  if (!sourceEl || !destEl) { renderFn(); return; }

  // Get the top card element's exact position
  let srcRect: DOMRect;
  const cards = sourceEl.querySelectorAll<HTMLElement>('.card');
  const topCard = cards[cards.length - 1];
  srcRect = topCard ? pileRect(topCard) : pileRect(sourceEl);

  const destRect = pileRect(destEl);
  const { cardWidth, cardHeight } = layout;

  const DURATION = 280;

  const el = createFlyingCard(card, true, srcRect.left, srcRect.top, cardWidth, cardHeight);
  document.body.appendChild(el);

  el.getBoundingClientRect();

  el.style.transition = `left ${DURATION}ms cubic-bezier(0.25,0.46,0.45,0.94),
                          top  ${DURATION}ms cubic-bezier(0.25,0.46,0.45,0.94),
                          transform ${DURATION}ms ease`;
  el.style.left = `${destRect.left}px`;
  el.style.top = `${destRect.top}px`;
  el.style.transform = 'scale(1.08)';

  await delay(DURATION * 0.6);
  el.style.transform = 'scale(1)';

  await delay(DURATION * 0.4 + 20);
  el.remove();
  renderFn();
}


// ─── 3. Hint animation ───────────────────────────────────────────────────────

/**
 * Animate a hint by creating a glowing "ghost" card that flies from the source
 * pile to the destination pile, showing the player the suggested move.
 */
export async function animateHint(
  container: HTMLElement,
  hint: HintMove,
  state: GameState,
  layout: LayoutConfig,
): Promise<void> {
  const { from, to, count } = hint;

  // Resolve source element and card
  let sourceEl: HTMLElement | null = null;
  let card: Card | null = null;

  if (from.type === 'tableau') {
    sourceEl = container.querySelector<HTMLElement>(`#tableau-${from.index}`);
    const col = state.tableau[from.index];
    card = col.length > 0 ? col[col.length - count] : null;
  } else if (from.type === 'freecell') {
    sourceEl = container.querySelector<HTMLElement>(`#freecell-${from.index}`);
    card = state.freeCells[from.index];
  }

  // Resolve destination element
  let destEl: HTMLElement | null = null;
  if (to.type === 'foundation') {
    destEl = container.querySelector<HTMLElement>(`#foundation-${to.index}`);
  } else if (to.type === 'tableau') {
    destEl = container.querySelector<HTMLElement>(`#tableau-${to.index}`);
  } else if (to.type === 'freecell') {
    destEl = container.querySelector<HTMLElement>(`#freecell-${to.index}`);
  }

  if (!sourceEl || !destEl || !card) return;

  // Get source card position
  let srcRect: DOMRect;
  if (from.type === 'tableau') {
    const cards = sourceEl.querySelectorAll<HTMLElement>('.card');
    const targetCard = cards[cards.length - count];
    srcRect = targetCard ? pileRect(targetCard) : pileRect(sourceEl);
  } else {
    const cards = sourceEl.querySelectorAll<HTMLElement>('.card');
    const topCard = cards[cards.length - 1];
    srcRect = topCard ? pileRect(topCard) : pileRect(sourceEl);
  }

  // Get destination position
  let destRect: DOMRect;
  if (to.type === 'tableau') {
    const destCards = destEl.querySelectorAll<HTMLElement>('.card');
    if (destCards.length > 0) {
      destRect = pileRect(destCards[destCards.length - 1]);
      // Offset down by one card offset for stacking
      destRect = new DOMRect(destRect.x, destRect.y + layout.tableauFaceUpOffset, destRect.width, destRect.height);
    } else {
      destRect = pileRect(destEl);
    }
  } else {
    destRect = pileRect(destEl);
  }

  const { cardWidth, cardHeight } = layout;
  const DURATION = 500;

  // Create ghost cards for the entire sequence being moved
  const ghosts: HTMLElement[] = [];
  for (let i = 0; i < count; i++) {
    let c: Card;
    if (from.type === 'tableau') {
      const col = state.tableau[from.index];
      c = col[col.length - count + i];
    } else {
      c = card;
    }

    const offsetY = from.type === 'tableau' ? i * layout.tableauFaceUpOffset : 0;

    const ghost = document.createElement('img') as HTMLImageElement;
    ghost.src = cardImgSrc(c);
    ghost.style.cssText = `
      position: fixed;
      left: ${srcRect.left}px;
      top: ${srcRect.top + offsetY}px;
      width: ${cardWidth}px;
      height: ${cardHeight}px;
      pointer-events: none;
      z-index: ${9998 + i};
      border-radius: 6px;
      opacity: 0.85;
      filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.8)) drop-shadow(0 0 20px rgba(59, 130, 246, 0.4));
      will-change: transform, opacity, left, top;
      transition: none;
    `;
    document.body.appendChild(ghost);
    ghosts.push(ghost);
  }

  // Force reflow
  ghosts[0].getBoundingClientRect();

  // Animate all ghosts to destination
  for (let i = 0; i < ghosts.length; i++) {
    const ghost = ghosts[i];
    const destOffsetY = to.type === 'tableau' ? i * layout.tableauFaceUpOffset : 0;

    ghost.style.transition = `left ${DURATION}ms cubic-bezier(0.25,0.46,0.45,0.94),
                               top  ${DURATION}ms cubic-bezier(0.25,0.46,0.45,0.94),
                               opacity ${DURATION * 0.3}ms ease ${DURATION * 0.7}ms`;
    ghost.style.left = `${destRect.left}px`;
    ghost.style.top = `${destRect.top + destOffsetY}px`;
  }

  await delay(DURATION * 0.7);

  // Fade out
  for (const ghost of ghosts) {
    ghost.style.opacity = '0';
  }

  await delay(DURATION * 0.3 + 50);

  // Clean up
  for (const ghost of ghosts) {
    ghost.remove();
  }
}
