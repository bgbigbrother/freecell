/**
 * English locale strings for FreeCell Solitaire.
 * To add a new language, duplicate this file (e.g. fr.ts), translate the
 * values, then pass the object to `setLocale()` in src/i18n/index.ts.
 */
export const en = {
  // ── Page metadata ──────────────────────────────────────────────────────────
  pageTitle: 'FreeCell Solitaire — Free Online Card Game',
  pageDescription: 'Play FreeCell Solitaire free in your browser. No download, no sign-up. Classic card game with undo, auto-move, keyboard shortcuts and strategic gameplay.',

  // ── Header buttons ─────────────────────────────────────────────────────────
  btnNewGame: 'New Game',
  btnUndo: 'Undo',
  btnHint: 'Hint',
  hintNone: 'No moves available',

  // ── Stats bar ──────────────────────────────────────────────────────────────
  statTime: 'Time',
  statMoves: 'Moves',
  statScore: 'Score',

  // ── Pile titles ────────────────────────────────────────────────────────────
  pileFreeCell: 'Free Cell',
  pileFoundation: 'Foundation',

  // ── Toolbar ────────────────────────────────────────────────────────────────
  toolbarPause: 'Pause',
  toolbarMusic: 'Music',
  toolbarFullscreen: 'Fullscreen',
  toolbarExitFullscreen: 'Exit Fullscreen',

  // ── Pause modal ────────────────────────────────────────────────────────────
  pauseTitle: 'Game Paused',
  pauseSubtitle: 'Take your time — your game is safe',
  pauseResume: 'Continue',

  // ── Win overlay ────────────────────────────────────────────────────────────
  winTitle: 'You Win!',
  winFinalScore: 'Score',
  winTime: 'Time',
  winMoves: 'Moves',

  // ── Card accessibility ─────────────────────────────────────────────────────
  cardBack: 'Card back',

  // ── Music player ───────────────────────────────────────────────────────────
  musicPlayerAriaLabel: 'Music Player',
  musicSolitaireRadio: 'Solitaire Radio',
  musicTracksLabel: 'Tracks',
  musicTracksAriaLabel: 'Track selection',
  musicPlay: 'Play',
  musicPause: 'Pause',
  musicVolumeLabel: 'Volume',
  musicVolumeAriaLabel: 'Volume',
  musicMute: 'Mute',
  musicUnmute: 'Unmute',
  musicTrackAriaLabel: (n: number, name: string) => `Track ${n}: ${name}`,

  // ── Track names ────────────────────────────────────────────────────────────
  trackNames: [
    'Cello', 'Drums I', 'Drums II', 'Flute', 'Guitar I', 'Guitar II', 'Guitar III',
    'Jazz', 'Nature I', 'Nature II', 'Nature III', 'Nature IV', 'Nature V', 'Nature VI',
    'Orchestra', 'Piano I', 'Piano II', 'Piano III', 'Piano IV', 'Piano V', 'Piano VI',
    'Piano VII', 'Piano VIII', 'Synth I', 'Synth II', 'Synth III', 'Violin',
  ],

  // ── Footer ─────────────────────────────────────────────────────────────────
  footerCopy: 'FreeCell Solitaire. Free to play.',
  footerPrivacyPolicy: 'Privacy Policy',
  footerTermsOfService: 'Terms of Service',
  footerNavAriaLabel: 'Footer navigation',

  // ── Below-fold content ─────────────────────────────────────────────────────
  descriptionHeading: 'FreeCell Solitaire',
  descriptionP1: 'The goal is to move all 52 cards to the four Foundation piles, building each pile up by suit from Ace to King.',
  descriptionP2: 'FreeCell is one of the most popular patience card games in the world, played with a single standard 52-card deck. Unlike most solitaire variants, all cards are dealt face-up from the start, making it a game of pure skill and strategy. Nearly every deal is solvable with careful planning. The four free cells provide temporary storage to help maneuver cards into position.',

  howToPlayHeading: 'How to Play',
  howToPlayLayoutHeading: 'The Layout',
  howToPlayLayoutP: 'The game opens with all 52 cards dealt face-up into eight Tableau columns. The first four columns each have 7 cards; the remaining four columns each have 6 cards. Four empty Free Cells sit in the top-left corner, and four empty Foundation piles sit in the top-right corner.',
  howToPlayGoalHeading: 'Your Goal',
  howToPlayGoalP: 'Build all four Foundation piles up by suit from Ace to King. Move the Ace of each suit to a Foundation first, then the 2, 3, and so on up to King. Once all 52 cards are on the Foundations, you win.',
  howToPlayTableauHeading: 'Moving Cards in the Tableau',
  howToPlayTableauP: 'Drag a card onto another Tableau column. The card you place must be the opposite color and exactly one rank lower than the card it lands on. For example, a red 7 can be placed on a black 8. Any card may be placed on an empty column. You can move multiple cards at once (supermove) if they form a descending alternating-color sequence and there are enough empty free cells and columns to theoretically move them one at a time.',
  howToPlayFreeCellsHeading: 'Using Free Cells',
  howToPlayFreeCellsP: 'Each Free Cell can hold one card at a time. Use them as temporary storage to free up cards in the Tableau. You can move a card from a Free Cell back to the Tableau or directly to a Foundation when valid.',
  howToPlayFoundationsHeading: 'Building Foundations',
  howToPlayFoundationsP: 'Move Aces to empty Foundation piles, then build up by suit (Ace, 2, 3, ... King). Cards that are safe to move are automatically sent to the Foundations after each action.',
  howToPlayUndoHeading: 'Undo',
  howToPlayUndoP: 'Click the Undo button (or press Ctrl+Z / Cmd+Z) to reverse your last action. You can undo all the way back to the opening deal.',

  rulesHeading: 'Rules — Step-by-Step',
  rules: [
    '<strong>Shuffle &amp; Deal</strong> — A standard 52-card deck is shuffled and dealt face-up into 8 Tableau columns. Columns 1–4 receive 7 cards each; columns 5–8 receive 6 cards each. All cards are visible from the start.',
    '<strong>Tableau builds down in alternating color</strong> — A card may be placed on any Tableau card that is exactly one rank higher and the opposite color. For example, a black 5 may be placed on a red 6.',
    '<strong>Supermove sequences as a group</strong> — A contiguous run of cards in descending rank and alternating colors may be moved together, provided enough empty Free Cells and empty Tableau columns exist. The maximum cards you can move equals (empty free cells + 1) × 2^(empty columns).',
    '<strong>Any card fills an empty column</strong> — When a Tableau column is cleared, any single card or valid supermove sequence may be moved there.',
    '<strong>Free Cells hold one card each</strong> — Move any single card to an empty Free Cell for temporary storage. Only one card per cell is allowed.',
    '<strong>Build Foundations up by suit</strong> — Move Aces to empty Foundation piles, then build up in the same suit: Ace, 2, 3, ... King.',
    '<strong>Auto-move safe cards</strong> — After each action, cards that are safe to move to the Foundations (cannot be needed for Tableau building) are moved automatically.',
    '<strong>Undo any move</strong> — Use Undo to reverse moves all the way back to the initial deal.',
    '<strong>Win by filling all four Foundations</strong> — Place all 52 cards onto the four Foundation piles (one complete Ace-to-King same-suit sequence per pile) to win the game.',
  ],

  shortcutsHeading: 'Keyboard Shortcuts',
  shortcutsKeyCol: 'Key',
  shortcutsActionCol: 'Action',
  shortcuts: [
    { key: '← → ↑ ↓ Arrow keys', action: 'Move the keyboard cursor between piles' },
    { key: 'Space', action: 'Select the card(s) at the cursor, or confirm a move to the highlighted target' },
    { key: 'Escape', action: 'Cancel the current selection' },
    { key: 'F2', action: 'Start a new game' },
    { key: 'Ctrl+Z / Cmd+Z', action: 'Undo the last action' },
  ],

  // ── Privacy Policy page ────────────────────────────────────────────────────
  privacyPageTitle: 'Privacy Policy — FreeCell Solitaire',
  privacyPageDescription: 'Privacy Policy for FreeCell Solitaire. Learn how we handle your data.',
  privacyBackToGame: 'Back to Game',
  privacyHeading: 'Privacy Policy',
  privacyLastUpdated: 'Last updated: April 7, 2026',
  privacyIntro: 'This Privacy Policy describes how FreeCell Solitaire ("we", "us", or "our") handles information when you use our free online card game at <a href="/">this site</a>.',
  privacyCollectHeading: 'Information We Collect',
  privacyCollectP: 'We do not require you to create an account or provide any personal information to play the game. We may collect limited, non-personal technical data automatically, including:',
  privacyCollectItems: ['Browser type and version', 'Operating system', 'Referring URLs and pages visited', 'Date and time of visits'],
  privacyCollectNote: 'This data is collected in aggregate and cannot be used to identify you personally.',
  privacyStorageHeading: 'Local Storage',
  privacyStorageP: "The game may use your browser's local storage to save game preferences locally on your device. This data never leaves your browser and is not transmitted to us.",
  privacyCookiesHeading: 'Cookies',
  privacyCookiesP: 'We do not use tracking cookies or advertising cookies. Any cookies set are strictly necessary for the game to function and do not collect personal data.',
  privacyThirdPartyHeading: 'Third-Party Services',
  privacyThirdPartyP: 'We may use third-party services such as a CDN (Content Delivery Network) to serve the game assets. These services may collect standard server log data (such as IP addresses) as part of normal internet operations. We do not sell or share your data with advertisers.',
  privacyChildrenHeading: "Children's Privacy",
  privacyChildrenP: 'Our game is suitable for all ages. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us so we can delete it.',
  privacyChangesHeading: 'Changes to This Policy',
  privacyChangesP: 'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of the game after changes constitutes acceptance of the updated policy.',
  privacyContactHeading: 'Contact',
  privacyContactP: 'If you have any questions about this Privacy Policy, you can reach us via the contact information on our site.',

  // ── Terms of Service page ──────────────────────────────────────────────────
  tosPageTitle: 'Terms of Service — FreeCell Solitaire',
  tosPageDescription: 'Terms of Service for FreeCell Solitaire.',
  tosBackToGame: 'Back to Game',
  tosHeading: 'Terms of Service',
  tosLastUpdated: 'Last updated: April 7, 2026',
  tosIntro: 'By accessing or using FreeCell Solitaire ("the game", "the site"), you agree to be bound by these Terms of Service. If you do not agree, please do not use the site.',
  tosUseHeading: 'Use of the Game',
  tosUseP: 'FreeCell Solitaire is provided free of charge for personal, non-commercial entertainment. You may:',
  tosUseMayItems: ['Play the game for personal enjoyment', 'Share the site URL with others'],
  tosUseMayNotP: 'You may not:',
  tosUseMayNotItems: [
    'Copy, redistribute, or resell the game or its assets without permission',
    'Attempt to reverse-engineer, decompile, or tamper with the game',
    'Use automated tools or bots to interact with the game',
    'Use the site for any unlawful purpose',
  ],
  tosIPHeading: 'Intellectual Property',
  tosIPP: 'All content on this site, including the game code, graphics, card artwork, and audio, is owned by or licensed to us. Nothing in these Terms grants you any rights to our intellectual property beyond what is needed to play the game.',
  tosWarrantyHeading: 'Disclaimer of Warranties',
  tosWarrantyP: 'The game is provided "as is" without warranties of any kind, express or implied. We do not guarantee that the site will be available at all times, error-free, or free of viruses or other harmful components.',
  tosLiabilityHeading: 'Limitation of Liability',
  tosLiabilityP: 'To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of or inability to use the game.',
  tosChangesHeading: 'Changes to These Terms',
  tosChangesP: 'We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated date. Continued use of the game after changes constitutes your acceptance of the revised Terms.',
  tosLawHeading: 'Governing Law',
  tosLawP: 'These Terms are governed by applicable law. Any disputes shall be resolved in the appropriate courts of the applicable jurisdiction.',
  tosContactHeading: 'Contact',
  tosContactP: 'If you have questions about these Terms, please contact us via the information available on our site.',
};

export type Locale = typeof en;
