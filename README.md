# @cardgamesplay/freecell

A browser-based FreeCell Solitaire game built with TypeScript, Vite, and vanilla DOM — no framework required. Features drag-and-drop, keyboard navigation, card animations, synthesised sound effects, a built-in music player, hint system, and full i18n support for 16 languages.

**🎮 [Play the live demo at cardgamesplay.com](https://www.cardgamesplay.com/)**

## Features

- Classic FreeCell rules with 4 free cells, 4 foundations, and 8 tableau columns
- Supermove support — move ordered sequences as a unit, limited by available free cells and empty columns
- Drag-and-drop card movement with visual drop-target highlighting and stack ghost images
- Full keyboard navigation — arrow keys to move between piles and zones, Space to select/place, Up/Down to resize selection, Escape to cancel
- Hint engine that evaluates all legal moves and scores them with heuristics to suggest the best play
- Animated card dealing and foundation fly-to transitions
- Synthesised Web Audio API sound effects (card click, card drop, foundation chime) — no audio files needed
- Built-in music player powered by `@rse/soundlp` with ambient tracks, play/pause, volume slider, and mute toggle
- Undo support — every action is reversible all the way back to the opening deal
- Auto-move safely sends eligible cards to foundations without blocking future tableau builds
- Pause mode that hides all card faces and freezes the timer
- Fullscreen support
- Responsive layout that adapts to any viewport size, including mobile and orientation changes
- Internationalisation (i18n) with 16 locales: English, Bulgarian, Spanish, French, German, Italian, Portuguese, Russian, Chinese, Japanese, Korean, Arabic (RTL), Hindi, Vietnamese, Polish, and Turkish
- Language selector in the header and hamburger menu, with cross-tab sync via `localStorage`
- Score tracking (+10 for each card moved to a foundation)
- Win detection with a celebratory overlay showing final score, time, and move count
- SVG card images via `cardsJS` with automatic CSS/Unicode fallback
- Published as an ES module with typed exports for game engine, UI, and i18n

## Project Structure

```
├── src/
│   ├── index.ts              # App bootstrap — wires engine, renderer, drag-drop, keyboard, timer, UI
│   ├── game/
│   │   ├── types.ts           # Card, GameState, PileRef, Move, scoring constants
│   │   ├── deck.ts            # createDeck() and Fisher-Yates shuffle
│   │   ├── gameEngine.ts      # Core game logic — move, supermove, auto-move, undo
│   │   ├── hintEngine.ts      # Heuristic hint system — evaluates and ranks all legal moves
│   │   ├── scoring.ts         # Score delta helpers
│   │   ├── winCondition.ts    # checkWin() — all four foundations complete
│   │   ├── undoManager.ts     # Command-pattern undo stack
│   │   └── deck.test.ts       # Unit + property-based tests for deck
│   ├── ui/
│   │   ├── renderer.ts        # DOM rendering — free cells, foundations, tableau, keyboard highlights
│   │   ├── layout.ts          # Responsive layout calculator (card sizing, pile positions)
│   │   ├── dragDrop.ts        # HTML5 drag-and-drop with validity checking and stack ghosts
│   │   ├── keyboardController.ts # Full keyboard navigation across free cells, foundations, and tableau
│   │   ├── cardAnimator.ts    # Deal and foundation-fly animations
│   │   ├── audio.ts           # Synthesised sound effects (Web Audio API)
│   │   ├── musicPlayer.ts     # Ambient music player with track selection and volume control
│   │   └── langSelector.ts    # Language dropdown component
│   └── i18n/
│       ├── index.ts           # Locale registry, setLocale, applyLocale, cross-tab sync
│       ├── init.ts            # Minimal bootstrap for static pages
│       ├── en.ts              # English (canonical locale type)
│       └── {bg,es,fr,de,it,pt,ru,zh,ja,ko,ar,hi,vi,pl,tr}.ts
├── index.html                 # Standalone dev shell
├── dev-entry.ts               # Dev entry point (imports shared styles + game)
├── dev.css                    # Dev-mode style overrides
├── package.json
├── vite.config.ts             # Vite config (library build + dev server)
├── vitest.config.ts           # Vitest config (happy-dom environment)
├── tsconfig.json              # Dev/IDE TypeScript config
└── tsconfig.build.json        # Build TypeScript config (emits declarations)
```

## Getting Started

> Want to just play? Head over to **[cardgamesplay.com](https://www.cardgamesplay.com/)** — no install needed.

### Prerequisites

- Node.js ≥ 18
- npm (or your preferred package manager)

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens a local Vite dev server with hot module replacement. The standalone dev shell at `index.html` includes a site header, language selector, and dev banner.

### Build

```bash
npm run build
```

Compiles TypeScript declarations via `tsc` and bundles the library as an ES module into `dist/`.

### Test

```bash
npm test
```

Runs all tests with Vitest in a `happy-dom` environment. The test suite includes:

- Unit tests for deck creation, shuffle, and game engine moves
- Property-based tests (via `fast-check`) covering shuffle permutation validity, card count preservation, and i18n persistence round-trips

## Keyboard Shortcuts

| Key | Action |
|---|---|
| ← → | Move cursor within the current row (top row or tableau) |
| ↑ ↓ | Navigate between top row and tableau, or resize selection |
| Space | Select card(s) or confirm a move |
| Escape | Cancel current selection |
| F2 | New game |
| Ctrl+Z / Cmd+Z | Undo |

## Game Rules

1. All 52 cards are dealt face-up into 8 tableau columns — the first 4 columns receive 7 cards, the remaining 4 receive 6 cards. There is no stock or waste pile.
2. There are 4 free cells that can each hold a single card temporarily.
3. There are 4 foundation piles that build up by suit from Ace to King.
4. Tableau columns build down in rank with alternating colours (red on black, black on red).
5. Any card may be placed in an empty tableau column (not just Kings).
6. Only one card at a time can be moved to or from a free cell.
7. Supermove: ordered sequences of alternating-colour descending cards can be moved between tableau columns as a unit, provided there are enough empty free cells and empty tableau columns to theoretically perform the move one card at a time. The maximum moveable stack size is (empty free cells + 1) × 2^(empty tableau columns).
8. Cards cannot be moved back from foundations.
9. Complete all four foundations (Ace through King) to win.

## Scoring

| Action | Points |
|---|---|
| Any → Foundation | +10 |

Score floor is 0 (never goes negative).

## Internationalisation

All UI strings are driven by locale objects in `src/i18n/`. The `applyLocale()` function walks the DOM and updates elements tagged with `data-i18n`, `data-i18n-title`, `data-i18n-aria-label`, and other data attributes. Arabic is supported with automatic RTL layout.

To add a new language, duplicate `src/i18n/en.ts`, translate the values, and register the new locale in `src/i18n/index.ts`.

## Tech Stack

- TypeScript (strict mode, ES2020 target)
- Vite (dev server + library build)
- Vitest + happy-dom (testing)
- fast-check (property-based testing)
- `@rse/soundlp` (ambient music sprite)
- `cardsJS` (SVG card images)
- Web Audio API (synthesised sound effects)
- Vanilla DOM (no UI framework)

## License

This project is licensed under the [MIT License](./LICENSE.md).

## Links

- **[Play Online](https://www.cardgamesplay.com/)** — free, no sign-up, works on any device
- [GitHub Repository](https://github.com/bgbigbrother/freecell)
- [npm Package](https://www.npmjs.com/package/@cardgames/freecell)
- [Report a Bug](https://github.com/bgbigbrother/freecell/issues)
