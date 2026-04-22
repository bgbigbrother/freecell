import type { Card, GameState, PileRef, Suit, Rank } from '../game/types';
import { calculateLayout, type LayoutConfig } from './layout';

// Vertical offset between stacked face-up cards — overridden by layout
let TABLEAU_FACE_UP_OFFSET = 28;

let svgAvailable = true;

// Rank → SVG filename prefix
const RANK_MAP: Record<Rank, string> = {
  1:  'A',
  2:  '2',
  3:  '3',
  4:  '4',
  5:  '5',
  6:  '6',
  7:  '7',
  8:  '8',
  9:  '9',
  10: '10',
  11: 'J',
  12: 'Q',
  13: 'K',
};

const SUIT_MAP: Record<Suit, string> = {
  spades:   'S',
  hearts:   'H',
  diamonds: 'D',
  clubs:    'C',
};

const SUIT_SYMBOL: Record<Suit, string> = {
  spades:   '♠',
  hearts:   '♥',
  diamonds: '♦',
  clubs:    '♣',
};

const RANK_LABEL: Record<Rank, string> = {
  1:  'A',
  2:  '2',
  3:  '3',
  4:  '4',
  5:  '5',
  6:  '6',
  7:  '7',
  8:  '8',
  9:  '9',
  10: '10',
  11: 'J',
  12: 'Q',
  13: 'K',
};

/** Returns the SVG src path for a card */
export function cardImageSrc(card: Card): string {
  return `/cards/${RANK_MAP[card.rank]}${SUIT_MAP[card.suit]}.svg`;
}

function createCardImgElement(card: Card): HTMLElement {
  if (svgAvailable) {
    const img = document.createElement('img');
    img.className = 'card';
    img.src = cardImageSrc(card);
    img.alt = `${RANK_LABEL[card.rank]}${SUIT_SYMBOL[card.suit]}`;
    img.draggable = true;
    img.onerror = () => {
      svgAvailable = false;
      const fallback = createFallbackCardElement(card);
      img.replaceWith(fallback);
    };
    return img;
  }
  return createFallbackCardElement(card);
}

function createFallbackCardElement(card: Card): HTMLElement {
  const div = document.createElement('div');
  div.className = 'card card--fallback';
  div.draggable = true;
  const isRed = card.suit === 'hearts' || card.suit === 'diamonds';
  div.classList.add(isRed ? 'card--red' : 'card--black');
  div.innerHTML = `<span class="card-rank">${RANK_LABEL[card.rank]}</span><span class="card-suit">${SUIT_SYMBOL[card.suit]}</span>`;
  return div;
}

export interface KeyboardSelection {
  from: PileRef;
  count: number;
}

export interface KeyboardState {
  cursor: PileRef | null;
  selection: KeyboardSelection | null;
}

export interface IRenderer {
  render(state: GameState, keyboardState?: KeyboardState): void;
  highlightDropTarget(pileRef: PileRef, valid: boolean): void;
  clearHighlights(): void;
  getLayout(): LayoutConfig;
  setCursorHighlight(pileRef: PileRef | null): void;
}

export class Renderer implements IRenderer {
  private container: HTMLElement;
  private layout: LayoutConfig;
  private lastState: GameState | null = null;

  constructor(container: HTMLElement = document.getElementById('app')!) {
    this.container = container;
    const w = this._containerWidth();
    this.layout = calculateLayout(w, window.innerHeight);
    this._applyLayout();

    const onResize = () => {
      this.layout = calculateLayout(this._containerWidth(), window.innerHeight);
      this._applyLayout();
      if (this.lastState) this.render(this.lastState);
    };

    window.addEventListener('resize', onResize);
    document.addEventListener('fullscreenchange', onResize);
    window.addEventListener('orientationchange', () => setTimeout(onResize, 100));

    // Recalculate after first paint when clientWidth is available
    requestAnimationFrame(() => {
      this.layout = calculateLayout(this._containerWidth(), window.innerHeight);
      this._applyLayout();
      if (this.lastState) this.render(this.lastState);
    });
  }

  private _containerWidth(): number {
    const w = this.container.clientWidth > 0 ? this.container.clientWidth : window.innerWidth;
    return Math.min(w, 1024);
  }

  private _applyLayout(): void {
    const l = this.layout;
    const root = this.container;
    root.style.setProperty('--card-width', `${l.cardWidth}px`);
    root.style.setProperty('--card-height', `${l.cardHeight}px`);
    root.style.setProperty('--pile-gap', `${l.gap}px`);
    root.style.setProperty('--layout-padding', `${l.padding}px`);

    TABLEAU_FACE_UP_OFFSET = l.tableauFaceUpOffset;

    // Center content when container is wider than 1024px (e.g. fullscreen)
    const actualWidth = this.container.clientWidth;
    const contentWidth = Math.min(actualWidth, 1024);
    const xOffset = Math.floor((actualWidth - contentWidth) / 2);

    for (let i = 0; i < 4; i++) {
      this._positionPile(`#freecell-${i}`, l.positions.freeCells[i].x + xOffset, l.positions.freeCells[i].y);
    }
    for (let i = 0; i < 4; i++) {
      this._positionPile(`#foundation-${i}`, l.positions.foundations[i].x + xOffset, l.positions.foundations[i].y);
    }
    for (let i = 0; i < 8; i++) {
      this._positionPile(`#tableau-${i}`, l.positions.tableau[i].x + xOffset, l.positions.tableau[i].y);
    }
  }

  private _positionPile(selector: string, x: number, y: number): void {
    const el = this.container.querySelector<HTMLElement>(selector);
    if (!el) return;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.style.width = `${this.layout.cardWidth}px`;
    el.style.minHeight = `${this.layout.cardHeight}px`;
  }

  render(state: GameState, keyboardState?: KeyboardState): void {
    this.lastState = state;
    this._renderFreeCells(state);
    this._renderFoundations(state);
    this._renderTableau(state);
    if (keyboardState) {
      this.setCursorHighlight(keyboardState.cursor);
      this._setSelectionHighlight(keyboardState.selection);
    }
  }

  private _renderFreeCells(state: GameState): void {
    for (let i = 0; i < 4; i++) {
      const el = this.container.querySelector<HTMLElement>(`#freecell-${i}`);
      if (!el) continue;
      el.innerHTML = '';
      const card = state.freeCells[i];
      if (card) {
        const cardEl = createCardImgElement(card);
        cardEl.style.position = 'absolute';
        cardEl.dataset.cellIndex = String(i);
        el.appendChild(cardEl);
      } else {
        const placeholder = document.createElement('div');
        placeholder.className = 'pile-placeholder';
        el.appendChild(placeholder);
      }
    }
  }

  private _renderFoundations(state: GameState): void {
    for (let i = 0; i < 4; i++) {
      const el = this.container.querySelector<HTMLElement>(`#foundation-${i}`);
      if (!el) continue;
      el.innerHTML = '';
      const pile = state.foundations[i];
      if (pile.length > 0) {
        const topCard = pile[pile.length - 1];
        const cardEl = createCardImgElement(topCard);
        cardEl.style.position = 'absolute';
        el.appendChild(cardEl);
      } else {
        const placeholder = document.createElement('div');
        placeholder.className = 'foundation-placeholder';
        for (const suit of ['♠', '♥', '♦', '♣']) {
          const span = document.createElement('span');
          span.textContent = suit;
          span.className = suit === '♥' || suit === '♦' ? 'suit-red' : 'suit-black';
          placeholder.appendChild(span);
        }
        el.appendChild(placeholder);
      }
    }
  }

  private _renderTableau(state: GameState): void {
    for (let col = 0; col < 8; col++) {
      const el = this.container.querySelector<HTMLElement>(`#tableau-${col}`);
      if (!el) continue;
      el.innerHTML = '';
      const column = state.tableau[col];
      let topOffset = 0;
      for (let i = 0; i < column.length; i++) {
        const card = column[i];
        const cardEl = createCardImgElement(card);
        cardEl.style.position = 'absolute';
        cardEl.style.top = `${topOffset}px`;
        cardEl.style.left = '0';
        cardEl.style.width = `${this.layout.cardWidth}px`;
        cardEl.dataset.cardIndex = String(i);
        cardEl.dataset.col = String(col);
        el.appendChild(cardEl);
        topOffset += TABLEAU_FACE_UP_OFFSET;
      }
      el.style.minHeight = `${topOffset + this.layout.cardHeight}px`;
    }
  }

  setCursorHighlight(pileRef: PileRef | null): void {
    this.container.querySelectorAll('.pile--keyboard-cursor').forEach(el => {
      el.classList.remove('pile--keyboard-cursor');
    });
    if (pileRef) {
      const el = this._getPileElement(pileRef);
      if (el) el.classList.add('pile--keyboard-cursor');
    }
  }

  private _setSelectionHighlight(selection: KeyboardSelection | null): void {
    this.container.querySelectorAll('.card--keyboard-selected').forEach(el => {
      el.classList.remove('card--keyboard-selected');
    });
    if (!selection) return;
    const pileEl = this._getPileElement(selection.from);
    if (!pileEl) return;
    const cardEls = pileEl.querySelectorAll<HTMLElement>('.card');
    const total = cardEls.length;
    const start = total - selection.count;
    cardEls.forEach((el, i) => {
      if (i >= start) el.classList.add('card--keyboard-selected');
    });
  }

  highlightDropTarget(pileRef: PileRef, valid: boolean): void {
    const el = this._getPileElement(pileRef);
    if (!el) return;
    el.classList.remove('pile--valid-target', 'pile--invalid-target');
    el.classList.add(valid ? 'pile--valid-target' : 'pile--invalid-target');
  }

  clearHighlights(): void {
    this.container.querySelectorAll('.pile--valid-target, .pile--invalid-target').forEach(el => {
      el.classList.remove('pile--valid-target', 'pile--invalid-target');
    });
  }

  getLayout(): LayoutConfig {
    return this.layout;
  }

  private _getPileElement(pileRef: PileRef): HTMLElement | null {
    switch (pileRef.type) {
      case 'freecell':   return this.container.querySelector(`#freecell-${pileRef.index}`);
      case 'foundation': return this.container.querySelector(`#foundation-${pileRef.index}`);
      case 'tableau':    return this.container.querySelector(`#tableau-${pileRef.index}`);
    }
  }
}
