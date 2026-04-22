// FreeCell Solitaire — main entry point

import type { PileRef, Card } from './game/types';
import { GameEngine } from './game/gameEngine';
import { Renderer } from './ui/renderer';
import { DragDropHandler } from './ui/dragDrop';
import { KeyboardController } from './ui/keyboardController';
import { checkWin } from './game/winCondition';
import { playCardClick, playCardDrop, playFoundationDrop } from './ui/audio';
import { t, setLocale, applyLocale, loadSavedLocale, LOCALES, listenForLangSync } from './i18n';
import { animateDeal, animateToFoundation, animateHint } from './ui/cardAnimator';
import { LANGUAGES, LangSelector } from './ui/langSelector';
import { MusicPlayer } from './ui/musicPlayer';
import { findBestHint } from './game/hintEngine';

// ─── Bootstrap ────────────────────────────────────────────────────────────────

const engine = new GameEngine();
const container = document.getElementById('app')!;
const renderer = new Renderer(container);
const dragDrop = new DragDropHandler(engine, renderer);
const keyboard = new KeyboardController(engine, renderer, afterAction, startNewGame);

// ─── DOM refs ─────────────────────────────────────────────────────────────────

const btnNewGame    = document.getElementById('btn-new-game')    as HTMLButtonElement;
const btnUndo       = document.getElementById('btn-undo')        as HTMLButtonElement;
const btnHint       = document.getElementById('btn-hint')        as HTMLButtonElement;
const scoreEl       = document.getElementById('score')!;
const movesEl       = document.getElementById('moves')!;
const timeEl        = document.getElementById('time')!;

const winOverlay    = document.getElementById('win-overlay')!;
const winScoreEl    = document.getElementById('win-score')!;
const winTimeEl     = document.getElementById('win-time')!;
const winMovesEl    = document.getElementById('win-moves')!;
const btnWinNewGame = document.getElementById('btn-win-new-game') as HTMLButtonElement;

const btnPause      = document.getElementById('btn-pause')      as HTMLButtonElement;
const btnContinue   = document.getElementById('btn-continue')   as HTMLButtonElement;
const btnFullscreen = document.getElementById('btn-fullscreen') as HTMLButtonElement;
const pauseModal    = document.getElementById('pause-modal')!;

const btnHamburger  = document.getElementById('btn-hamburger')  as HTMLButtonElement;
const hamburgerMenu = document.getElementById('hamburger-menu') as HTMLDivElement;
const hmNewGame     = document.getElementById('hm-new-game')    as HTMLButtonElement;
const hmUndo        = document.getElementById('hm-undo')        as HTMLButtonElement;
const hmHint        = document.getElementById('hm-hint')        as HTMLButtonElement;
const hmLangList    = document.getElementById('hm-lang-list')   as HTMLDivElement;

// ─── Pause state ──────────────────────────────────────────────────────────────

let paused = false;
let timerElapsedAtPause = 0;

// ─── Timer ────────────────────────────────────────────────────────────────────

let timerStart = Date.now();
let timerInterval: ReturnType<typeof setInterval> | null = null;

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function startTimer(): void {
  if (timerInterval) clearInterval(timerInterval);
  timerStart = Date.now();
  timeEl.textContent = '0:00';
  timerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - timerStart) / 1000);
    timeEl.textContent = formatTime(elapsed);
  }, 1000);
}

function stopTimer(): void {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

// ─── Stats ────────────────────────────────────────────────────────────────────

function updateStats(): void {
  const state = engine.getState();
  scoreEl.textContent = String(state.score);
  movesEl.textContent = String(state.moves);
  btnUndo.disabled = !engine.canUndo();
}

// ─── Win overlay ──────────────────────────────────────────────────────────────

function showWinOverlay(): void {
  stopTimer();
  const state = engine.getState();
  winScoreEl.textContent = String(state.score);
  const elapsed = paused ? timerElapsedAtPause : Math.floor((Date.now() - timerStart) / 1000);
  winTimeEl.textContent  = formatTime(elapsed);
  winMovesEl.textContent = String(state.moves);
  winOverlay.classList.remove('overlay--hidden');
}

function hideWinOverlay(): void {
  winOverlay.classList.add('overlay--hidden');
}

// ─── After action ─────────────────────────────────────────────────────────────

function afterAction(): void {
  engine.autoMoveToFoundation();
  renderer.render(engine.getState(), keyboard.getState());
  updateStats();
  if (checkWin(engine.getState())) {
    showWinOverlay();
  }
}

// ─── Hint ─────────────────────────────────────────────────────────────────────

let hintAnimating = false;

async function showHint(): Promise<void> {
  if (paused || hintAnimating) return;

  const state = engine.getState();
  const hint = findBestHint(state);

  if (!hint) {
    // Brief flash on the hint button to indicate no moves
    btnHint.classList.add('btn--no-hint');
    setTimeout(() => btnHint.classList.remove('btn--no-hint'), 600);
    return;
  }

  hintAnimating = true;
  btnHint.disabled = true;

  await animateHint(container, hint, state, renderer.getLayout());

  hintAnimating = false;
  btnHint.disabled = false;
}

// ─── New game ─────────────────────────────────────────────────────────────────

function startNewGame(): void {
  hideWinOverlay();
  if (paused) {
    paused = false;
    pauseModal.classList.add('overlay--hidden');
  }
  engine.newGame();
  keyboard.onNewGame();
  updateStats();
  startTimer();
  renderer.render(engine.getState(), keyboard.getState());
  animateDeal(container, renderer.getLayout(), engine.getState().tableau, () => {
    renderer.render(engine.getState(), keyboard.getState());
  }, playCardClick);
}

// ─── Pause / Continue ─────────────────────────────────────────────────────────

function pauseGame(): void {
  if (paused) return;
  paused = true;

  stopTimer();
  timerElapsedAtPause = Math.floor((Date.now() - timerStart) / 1000);

  // Hide all card faces by re-rendering with faceUp = false
  const state = engine.getState();
  state.tableau.forEach((col) => {
    col.forEach((card) => { card.faceUp = false; });
  });
  state.freeCells.forEach((card) => { if (card) card.faceUp = false; });

  renderer.render(state);
  pauseModal.classList.remove('overlay--hidden');

  btnUndo.disabled  = true;
  btnPause.disabled = true;
  btnHint.disabled  = true;
}

function continueGame(): void {
  if (!paused) return;
  paused = false;

  // Restore all card faces
  const state = engine.getState();
  state.tableau.forEach((col) => {
    col.forEach((card) => { card.faceUp = true; });
  });
  state.freeCells.forEach((card) => { if (card) card.faceUp = true; });

  pauseModal.classList.add('overlay--hidden');
  renderer.render(state, keyboard.getState());

  timerStart = Date.now() - timerElapsedAtPause * 1000;
  timerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - timerStart) / 1000);
    timeEl.textContent = formatTime(elapsed);
  }, 1000);

  btnUndo.disabled  = !engine.canUndo();
  btnPause.disabled = false;
  btnHint.disabled  = false;
}

// ─── Fullscreen ───────────────────────────────────────────────────────────────

async function toggleFullscreen(): Promise<void> {
  try {
    if (!document.fullscreenElement) {
      await container.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  } catch { /* Fullscreen API unavailable */ }
}

document.addEventListener('fullscreenchange', () => {
  if (document.fullscreenElement) {
    btnFullscreen.title = t().toolbarExitFullscreen;
    btnFullscreen.innerHTML = `<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3"/><path d="M21 8h-3a2 2 0 0 1-2-2V3"/><path d="M3 16h3a2 2 0 0 1 2 2v3"/><path d="M16 21v-3a2 2 0 0 1 2-2h3"/></svg>`;
  } else {
    btnFullscreen.title = t().toolbarFullscreen;
    btnFullscreen.innerHTML = `<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>`;
  }
});

// ─── Button wiring ────────────────────────────────────────────────────────────

btnNewGame.addEventListener('click', startNewGame);
btnWinNewGame.addEventListener('click', startNewGame);

btnUndo.addEventListener('click', () => {
  if (paused) return;
  engine.undo();
  afterAction();
});

btnHint.addEventListener('click', () => {
  showHint();
});

btnPause.addEventListener('click', pauseGame);
btnContinue.addEventListener('click', continueGame);
btnFullscreen.addEventListener('click', toggleFullscreen);

// ─── Drag-drop wiring ─────────────────────────────────────────────────────────

dragDrop.attach(container);

dragDrop.onDrop((_source, target) => {
  if (paused) return;
  if (target.type === 'foundation') {
    playFoundationDrop();
  } else {
    playCardDrop();
  }
  setTimeout(() => {
    engine.autoMoveToFoundation();
    renderer.render(engine.getState(), keyboard.getState());
    updateStats();
    if (checkWin(engine.getState())) showWinOverlay();
  }, 0);
});

// ─── Double-click to auto-move to foundation ──────────────────────────────────

container.addEventListener('dblclick', (e) => {
  if (paused) return;
  const target = e.target as HTMLElement;
  const cardEl = target.closest('.card') as HTMLElement | null;
  if (!cardEl) return;

  // Determine source pile
  let from: PileRef | null = null;

  if (cardEl.dataset.col !== undefined && cardEl.dataset.cardIndex !== undefined) {
    const col = Number(cardEl.dataset.col);
    const idx = Number(cardEl.dataset.cardIndex);
    const column = engine.getState().tableau[col];
    // Only allow the top card of a tableau column
    if (idx !== column.length - 1) return;
    from = { type: 'tableau', index: col };
  } else if (cardEl.dataset.cellIndex !== undefined) {
    from = { type: 'freecell', index: Number(cardEl.dataset.cellIndex) };
  }

  if (!from) return;

  const foundationIdx = engine.findFoundationTarget(from);
  if (foundationIdx === -1) return;

  // Get the card before the engine mutates state
  const state = engine.getState();
  let card: Card | null = null;
  if (from.type === 'tableau') {
    const col = state.tableau[from.index];
    card = col.length > 0 ? col[col.length - 1] : null;
  } else if (from.type === 'freecell') {
    card = state.freeCells[from.index];
  }
  if (!card) return;

  const to: PileRef = { type: 'foundation', index: foundationIdx };

  // Snapshot the source for animation before the engine mutates state
  const animFrom = { ...from };

  if (!engine.moveCard(from, to)) return;

  playFoundationDrop();

  animateToFoundation(container, card, animFrom, to, renderer.getLayout(), () => {
    afterAction();
  });
});

// ─── Keyboard shortcuts ───────────────────────────────────────────────────────

document.addEventListener('keydown', (e) => {
  if (document.activeElement && ['INPUT', 'SELECT', 'TEXTAREA'].includes((document.activeElement as HTMLElement).tagName)) return;

  const { key, metaKey, ctrlKey } = e;

  if (key === 'F2') {
    e.preventDefault();
    startNewGame();
    return;
  }

  if ((ctrlKey || metaKey) && key === 'z') {
    e.preventDefault();
    if (paused) return;
    if (engine.canUndo()) {
      engine.undo();
      afterAction();
    }
    return;
  }

  if (key === 'h' || key === 'H') {
    e.preventDefault();
    showHint();
    return;
  }
});

// ─── Hamburger menu ───────────────────────────────────────────────────────────

function buildHamburgerLangs(activeLang: string): void {
  hmLangList.innerHTML = '';
  for (const lang of LANGUAGES) {
    const btn = document.createElement('button');
    btn.className = 'hamburger-menu__lang-item' + (lang.lang === activeLang ? ' hamburger-menu__lang-item--active' : '');
    btn.innerHTML = `<span>${lang.flag}</span><span>${lang.name}</span>`;
    btn.addEventListener('click', () => {
      const locale = LOCALES[lang.lang];
      if (!locale) return;
      setLocale(locale, lang.lang);
      applyLocale();
      buildHamburgerLangs(lang.lang);
      closeHamburger();
    });
    hmLangList.appendChild(btn);
  }
}

function openHamburger(): void {
  hamburgerMenu.classList.remove('hamburger-menu--hidden');
  btnHamburger.setAttribute('aria-expanded', 'true');
  hmUndo.disabled = !engine.canUndo();
  hmHint.disabled = paused;
}

function closeHamburger(): void {
  hamburgerMenu.classList.add('hamburger-menu--hidden');
  btnHamburger.setAttribute('aria-expanded', 'false');
}

btnHamburger.addEventListener('click', (e) => {
  e.stopPropagation();
  hamburgerMenu.classList.contains('hamburger-menu--hidden') ? openHamburger() : closeHamburger();
});

document.addEventListener('click', () => closeHamburger());
hamburgerMenu.addEventListener('click', (e) => e.stopPropagation());

hmNewGame.addEventListener('click', () => { closeHamburger(); startNewGame(); });
hmUndo.addEventListener('click', () => {
  if (paused) return;
  closeHamburger();
  engine.undo();
  afterAction();
});

hmHint.addEventListener('click', () => {
  closeHamburger();
  showHint();
});

// ─── i18n bootstrap ───────────────────────────────────────────────────────────

const savedLang = loadSavedLocale();
applyLocale();
buildHamburgerLangs(savedLang);

// Sync language changes from other tabs
listenForLangSync((langCode) => {
  buildHamburgerLangs(langCode);
});

// Sync language changes from the site-header selector on the same page
window.addEventListener('locale-changed', ((e: CustomEvent<{ langCode: string }>) => {
  const langCode = e.detail.langCode;
  const locale = LOCALES[langCode];
  if (!locale) return;
  setLocale(locale, langCode);
  applyLocale();
  buildHamburgerLangs(langCode);
}) as EventListener);

// ─── Site-header language selector ────────────────────────────────────────────

const headerLangSelector = new LangSelector((lang) => {
  const locale = LOCALES[lang.lang];
  if (!locale) return;
  setLocale(locale, lang.lang);
  applyLocale();
  buildHamburgerLangs(lang.lang);
});
headerLangSelector.attach();
headerLangSelector.setActiveLang(savedLang);

// ─── Music player ─────────────────────────────────────────────────────────────

const musicPlayer = new MusicPlayer(document.getElementById('game-toolbar') ?? document.body);
musicPlayer.attach();

// ─── Initial render ───────────────────────────────────────────────────────────

renderer.render(engine.getState());
updateStats();
startTimer();
keyboard.attach();

requestAnimationFrame(() => {
  animateDeal(container, renderer.getLayout(), engine.getState().tableau, () => {
    renderer.render(engine.getState(), keyboard.getState());
  }, playCardClick);
});
