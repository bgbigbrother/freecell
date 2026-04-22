import { describe, it, expect } from 'vitest';
import { en, type Locale } from '../src/i18n/en';
import { bg } from '../src/i18n/bg';
import { es } from '../src/i18n/es';
import { fr } from '../src/i18n/fr';
import { de } from '../src/i18n/de';
import { it as itLocale } from '../src/i18n/it';
import { pt } from '../src/i18n/pt';
import { ru } from '../src/i18n/ru';
import { zh } from '../src/i18n/zh';
import { ja } from '../src/i18n/ja';
import { ko } from '../src/i18n/ko';
import { ar } from '../src/i18n/ar';
import { hi } from '../src/i18n/hi';
import { vi } from '../src/i18n/vi';
import { pl } from '../src/i18n/pl';
import { tr } from '../src/i18n/tr';

// All available locales
const allLocales = {
  en, bg, es, fr, de, it: itLocale, pt, ru, zh, ja, ko, ar, hi, vi, pl, tr
};

// Required keys that every locale must have
const requiredKeys = [
  'pageTitle',
  'pageDescription',
  'btnNewGame',
  'btnUndo',
  'btnHint',
  'hintNone',
  'statTime',
  'statMoves',
  'statScore',
  'pileFreeCell',
  'pileFoundation',
  'toolbarPause',
  'toolbarMusic',
  'toolbarFullscreen',
  'toolbarExitFullscreen',
  'pauseTitle',
  'pauseSubtitle',
  'pauseResume',
  'winTitle',
  'winFinalScore',
  'winTime',
  'winMoves',
  'cardBack',
  'musicPlayerAriaLabel',
  'musicSolitaireRadio',
  'musicTracksLabel',
  'musicTracksAriaLabel',
  'musicPlay',
  'musicPause',
  'musicVolumeLabel',
  'musicVolumeAriaLabel',
  'musicMute',
  'musicUnmute',
  'musicTrackAriaLabel',
  'trackNames',
  'footerCopy',
  'footerPrivacyPolicy',
  'footerTermsOfService',
  'footerNavAriaLabel',
  'descriptionHeading',
  'descriptionP1',
  'descriptionP2',
  'howToPlayHeading',
  'howToPlayLayoutHeading',
  'howToPlayLayoutP',
  'howToPlayGoalHeading',
  'howToPlayGoalP',
  'howToPlayTableauHeading',
  'howToPlayTableauP',
  'howToPlayFreeCellsHeading',
  'howToPlayFreeCellsP',
  'howToPlayFoundationsHeading',
  'howToPlayFoundationsP',
  'howToPlayUndoHeading',
  'howToPlayUndoP',
  'rulesHeading',
  'rules',
  'shortcutsHeading',
  'shortcutsKeyCol',
  'shortcutsActionCol',
  'shortcuts',
  'privacyPageTitle',
  'privacyPageDescription',
  'privacyBackToGame',
  'privacyHeading',
  'privacyLastUpdated',
  'privacyIntro',
  'privacyCollectHeading',
  'privacyCollectP',
  'privacyCollectItems',
  'privacyCollectNote',
  'privacyStorageHeading',
  'privacyStorageP',
  'privacyCookiesHeading',
  'privacyCookiesP',
  'privacyThirdPartyHeading',
  'privacyThirdPartyP',
  'privacyChildrenHeading',
  'privacyChildrenP',
  'privacyChangesHeading',
  'privacyChangesP',
  'privacyContactHeading',
  'privacyContactP',
  'tosPageTitle',
  'tosPageDescription',
  'tosBackToGame',
  'tosHeading',
  'tosLastUpdated',
  'tosIntro',
  'tosUseHeading',
  'tosUseP',
  'tosUseMayItems',
  'tosUseMayNotP',
  'tosUseMayNotItems',
  'tosIPHeading',
  'tosIPP',
  'tosWarrantyHeading',
  'tosWarrantyP',
  'tosLiabilityHeading',
  'tosLiabilityP',
  'tosChangesHeading',
  'tosChangesP',
  'tosLawHeading',
  'tosLawP',
  'tosContactHeading',
  'tosContactP'
];

describe('i18n Locales', () => {
  describe('Locale Structure Validation', () => {
    it('should have all required keys in English locale', () => {
      requiredKeys.forEach(key => {
        expect(en).toHaveProperty(key);
      });
    });

    it('should have correct types for key properties', () => {
      // String properties
      const stringKeys = [
        'pageTitle', 'pageDescription', 'btnNewGame', 'btnUndo', 'btnHint', 'hintNone',
        'statTime', 'statMoves', 'statScore', 'pileFreeCell', 'pileFoundation',
        'toolbarPause', 'toolbarMusic', 'toolbarFullscreen', 'toolbarExitFullscreen',
        'pauseTitle', 'pauseSubtitle', 'pauseResume', 'winTitle', 'winFinalScore',
        'winTime', 'winMoves', 'cardBack', 'musicPlayerAriaLabel', 'musicSolitaireRadio',
        'musicTracksLabel', 'musicTracksAriaLabel', 'musicPlay', 'musicPause',
        'musicVolumeLabel', 'musicVolumeAriaLabel', 'musicMute', 'musicUnmute',
        'footerCopy', 'footerPrivacyPolicy', 'footerTermsOfService', 'footerNavAriaLabel',
        'descriptionHeading', 'descriptionP1', 'descriptionP2', 'howToPlayHeading',
        'howToPlayLayoutHeading', 'howToPlayLayoutP', 'howToPlayGoalHeading', 'howToPlayGoalP',
        'howToPlayTableauHeading', 'howToPlayTableauP', 'howToPlayFreeCellsHeading',
        'howToPlayFreeCellsP', 'howToPlayFoundationsHeading', 'howToPlayFoundationsP',
        'howToPlayUndoHeading', 'howToPlayUndoP', 'rulesHeading', 'shortcutsHeading',
        'shortcutsKeyCol', 'shortcutsActionCol'
      ];

      stringKeys.forEach(key => {
        expect(typeof en[key]).toBe('string');
      });

      // Array properties
      expect(Array.isArray(en.rules)).toBe(true);
      expect(Array.isArray(en.shortcuts)).toBe(true);
      expect(Array.isArray(en.trackNames)).toBe(true);
      expect(Array.isArray(en.privacyCollectItems)).toBe(true);
      expect(Array.isArray(en.tosUseMayItems)).toBe(true);
      expect(Array.isArray(en.tosUseMayNotItems)).toBe(true);

      // Function property
      expect(typeof en.musicTrackAriaLabel).toBe('function');
    });

    it('should have valid rules array', () => {
      expect(en.rules.length).toBeGreaterThan(0);
      en.rules.forEach(rule => {
        expect(typeof rule).toBe('string');
        expect(rule.length).toBeGreaterThan(0);
      });
    });

    it('should have valid shortcuts array', () => {
      expect(en.shortcuts.length).toBeGreaterThan(0);
      en.shortcuts.forEach(shortcut => {
        expect(shortcut).toHaveProperty('key');
        expect(shortcut).toHaveProperty('action');
        expect(typeof shortcut.key).toBe('string');
        expect(typeof shortcut.action).toBe('string');
      });
    });

    it('should have valid track names array', () => {
      expect(en.trackNames.length).toBeGreaterThan(0);
      en.trackNames.forEach(track => {
        expect(typeof track).toBe('string');
        expect(track.length).toBeGreaterThan(0);
      });
    });

    it('should have working musicTrackAriaLabel function', () => {
      const result = en.musicTrackAriaLabel(1, 'Test Track');
      expect(typeof result).toBe('string');
      expect(result).toContain('1');
      expect(result).toContain('Test Track');
    });
  });

  describe('All Locales', () => {
    Object.entries(allLocales).forEach(([langCode, locale]) => {
      describe(`${langCode} locale`, () => {
        it('should have all required keys', () => {
          requiredKeys.forEach(key => {
            expect(locale).toHaveProperty(key);
          });
        });

        it('should have correct types for key properties', () => {
          // String properties
          const stringKeys = [
            'pageTitle', 'pageDescription', 'btnNewGame', 'btnUndo', 'btnHint', 'hintNone',
            'statTime', 'statMoves', 'statScore', 'pileFreeCell', 'pileFoundation',
            'toolbarPause', 'toolbarMusic', 'toolbarFullscreen', 'toolbarExitFullscreen',
            'pauseTitle', 'pauseSubtitle', 'pauseResume', 'winTitle', 'winFinalScore',
            'winTime', 'winMoves', 'cardBack', 'musicPlayerAriaLabel', 'musicSolitaireRadio',
            'musicTracksLabel', 'musicTracksAriaLabel', 'musicPlay', 'musicPause',
            'musicVolumeLabel', 'musicVolumeAriaLabel', 'musicMute', 'musicUnmute',
            'footerCopy', 'footerPrivacyPolicy', 'footerTermsOfService', 'footerNavAriaLabel',
            'descriptionHeading', 'descriptionP1', 'descriptionP2', 'howToPlayHeading',
            'howToPlayLayoutHeading', 'howToPlayLayoutP', 'howToPlayGoalHeading', 'howToPlayGoalP',
            'howToPlayTableauHeading', 'howToPlayTableauP', 'howToPlayFreeCellsHeading',
            'howToPlayFreeCellsP', 'howToPlayFoundationsHeading', 'howToPlayFoundationsP',
            'howToPlayUndoHeading', 'howToPlayUndoP', 'rulesHeading', 'shortcutsHeading',
            'shortcutsKeyCol', 'shortcutsActionCol'
          ];

          stringKeys.forEach(key => {
            expect(typeof locale[key]).toBe('string');
          });

          // Array properties
          expect(Array.isArray(locale.rules)).toBe(true);
          expect(Array.isArray(locale.shortcuts)).toBe(true);
          expect(Array.isArray(locale.trackNames)).toBe(true);
          expect(Array.isArray(locale.privacyCollectItems)).toBe(true);
          expect(Array.isArray(locale.tosUseMayItems)).toBe(true);
          expect(Array.isArray(locale.tosUseMayNotItems)).toBe(true);

          // Function property
          expect(typeof locale.musicTrackAriaLabel).toBe('function');
        });

        it('should have non-empty strings for key properties', () => {
          const stringKeys = [
            'pageTitle', 'pageDescription', 'btnNewGame', 'btnUndo', 'btnHint', 'hintNone',
            'statTime', 'statMoves', 'statScore', 'pileFreeCell', 'pileFoundation',
            'toolbarPause', 'toolbarMusic', 'toolbarFullscreen', 'toolbarExitFullscreen',
            'pauseTitle', 'pauseSubtitle', 'pauseResume', 'winTitle', 'winFinalScore',
            'winTime', 'winMoves', 'cardBack', 'musicPlayerAriaLabel', 'musicSolitaireRadio',
            'musicTracksLabel', 'musicTracksAriaLabel', 'musicPlay', 'musicPause',
            'musicVolumeLabel', 'musicVolumeAriaLabel', 'musicMute', 'musicUnmute',
            'footerCopy', 'footerPrivacyPolicy', 'footerTermsOfService', 'footerNavAriaLabel',
            'descriptionHeading', 'descriptionP1', 'descriptionP2', 'howToPlayHeading',
            'howToPlayLayoutHeading', 'howToPlayLayoutP', 'howToPlayGoalHeading', 'howToPlayGoalP',
            'howToPlayTableauHeading', 'howToPlayTableauP', 'howToPlayFreeCellsHeading',
            'howToPlayFreeCellsP', 'howToPlayFoundationsHeading', 'howToPlayFoundationsP',
            'howToPlayUndoHeading', 'howToPlayUndoP', 'rulesHeading', 'shortcutsHeading',
            'shortcutsKeyCol', 'shortcutsActionCol'
          ];

          stringKeys.forEach(key => {
            expect((locale[key] as string).trim().length).toBeGreaterThan(0);
          });
        });
      });
    });
  });
});