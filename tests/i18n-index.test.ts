import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import {
  LOCALES,
  STORAGE_KEY,
  setLocale,
  t,
  loadSavedLocale,
  applyLocale,
  listenForLangSync
} from '../src/i18n/index';
import { en } from '../src/i18n/en';
import { bg } from '../src/i18n/bg';

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};

// Mock document and window
const mockDocument = {
  documentElement: {
    dir: '',
    lang: '',
  },
  querySelectorAll: vi.fn(),
  getElementById: vi.fn(),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
};

const mockWindow = {
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
};

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
  writable: true,
});

Object.defineProperty(window, 'document', {
  value: mockDocument,
  writable: true,
});

Object.defineProperty(global, 'window', {
  value: mockWindow,
  writable: true,
});

describe('i18n Index Functions', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Reset to default state
    setLocale(en, 'en');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('LOCALES', () => {
    it('should contain all expected locales', () => {
      expect(LOCALES).toHaveProperty('en');
      expect(LOCALES).toHaveProperty('bg');
      expect(LOCALES).toHaveProperty('es');
      expect(LOCALES).toHaveProperty('fr');
      expect(LOCALES).toHaveProperty('de');
      expect(LOCALES).toHaveProperty('it');
      expect(LOCALES).toHaveProperty('pt');
      expect(LOCALES).toHaveProperty('ru');
      expect(LOCALES).toHaveProperty('zh');
      expect(LOCALES).toHaveProperty('ja');
      expect(LOCALES).toHaveProperty('ko');
      expect(LOCALES).toHaveProperty('ar');
      expect(LOCALES).toHaveProperty('hi');
      expect(LOCALES).toHaveProperty('vi');
      expect(LOCALES).toHaveProperty('pl');
      expect(LOCALES).toHaveProperty('tr');
    });

    it('should have en as the default locale', () => {
      expect(LOCALES.en).toBe(en);
    });
  });

  describe('STORAGE_KEY', () => {
    it('should be defined', () => {
      expect(STORAGE_KEY).toBe('solitaire-lang');
    });
  });

  describe('setLocale', () => {
    it('should set the current locale', () => {
      setLocale(bg, 'bg');
      expect(t()).toBe(bg);
    });

    it('should save to localStorage when langCode is provided', () => {
      setLocale(bg, 'bg');
      expect(localStorageMock.setItem).toHaveBeenCalledWith(STORAGE_KEY, 'bg');
    });

    it('should not save to localStorage when langCode is not provided', () => {
      // Clear any previous calls
      localStorageMock.setItem.mockClear();
      setLocale(bg);
      expect(localStorageMock.setItem).not.toHaveBeenCalled();
    });
  });

  describe('t()', () => {
    it('should return the current locale', () => {
      expect(t()).toBe(en);
      setLocale(bg, 'bg');
      expect(t()).toBe(bg);
    });
  });

  describe('loadSavedLocale', () => {
    it('should return "en" when no saved locale exists', () => {
      localStorageMock.getItem.mockReturnValue(null);
      const result = loadSavedLocale();
      expect(result).toBe('en');
    });

    it('should return "en" when saved locale is invalid', () => {
      localStorageMock.getItem.mockReturnValue('invalid-lang');
      const result = loadSavedLocale();
      expect(result).toBe('en');
    });

    it('should load and return saved locale when valid', () => {
      localStorageMock.getItem.mockReturnValue('bg');
      const result = loadSavedLocale();
      expect(result).toBe('bg');
      expect(t()).toBe(bg);
    });

    it('should handle localStorage errors gracefully', () => {
      localStorageMock.getItem.mockImplementation(() => {
        throw new Error('localStorage error');
      });
      const result = loadSavedLocale();
      expect(result).toBe('en');
    });
  });

  describe('applyLocale', () => {
    beforeEach(() => {
      mockDocument.querySelectorAll.mockReturnValue([]);
      mockDocument.getElementById.mockReturnValue(null);
    });

    it('should set document direction and language for LTR languages', () => {
      setLocale(en, 'en');
      applyLocale();
      expect(mockDocument.documentElement.dir).toBe('ltr');
      expect(mockDocument.documentElement.lang).toBe('en');
    });

    it('should set document direction and language for RTL languages', () => {
      setLocale(LOCALES.ar, 'ar');
      applyLocale();
      expect(mockDocument.documentElement.dir).toBe('rtl');
      expect(mockDocument.documentElement.lang).toBe('ar');
    });

    it('should apply text content to data-i18n elements', () => {
      const mockElement = {
        dataset: { i18n: 'btnNewGame' },
        textContent: '',
      };
      mockDocument.querySelectorAll.mockImplementation((selector) => {
        if (selector === '[data-i18n]') return [mockElement];
        return [];
      });

      applyLocale();

      expect(mockElement.textContent).toBe('New Game');
    });

    it('should apply innerHTML to data-i18n-html elements', () => {
      const mockElement = {
        dataset: { i18nHtml: 'btnNewGame' },
        innerHTML: '',
      };
      mockDocument.querySelectorAll.mockImplementation((selector) => {
        if (selector === '[data-i18n-html]') return [mockElement];
        return [];
      });

      applyLocale();

      expect(mockElement.innerHTML).toBe('New Game');
    });

    it('should apply title to data-i18n-title elements', () => {
      const mockElement = {
        dataset: { i18nTitle: 'btnNewGame' },
        title: '',
      };
      mockDocument.querySelectorAll.mockImplementation((selector) => {
        if (selector === '[data-i18n-title]') return [mockElement];
        return [];
      });

      applyLocale();

      expect(mockElement.title).toBe('New Game');
    });

    it('should apply aria-label to data-i18n-aria-label elements', () => {
      const mockElement = {
        dataset: { i18nAriaLabel: 'btnNewGame' },
        setAttribute: vi.fn(),
      };
      mockDocument.querySelectorAll.mockImplementation((selector) => {
        if (selector === '[data-i18n-aria-label]') return [mockElement];
        return [];
      });

      applyLocale();

      expect(mockElement.setAttribute).toHaveBeenCalledWith('aria-label', 'New Game');
    });

    it('should build rules list for data-i18n-rules elements', () => {
      const mockOl = {
        dataset: {},
        innerHTML: '',
      };
      mockDocument.querySelectorAll.mockImplementation((selector) => {
        if (selector === '[data-i18n-rules]') return [mockOl];
        return [];
      });

      applyLocale();

      expect(mockOl.innerHTML).toContain('<li>');
      expect(mockOl.innerHTML).toContain('Shuffle &amp; Deal');
    });

    it('should build shortcuts table for data-i18n-shortcuts elements', () => {
      const mockTbody = {
        dataset: {},
        innerHTML: '',
      };
      mockDocument.querySelectorAll.mockImplementation((selector) => {
        if (selector === '[data-i18n-shortcuts]') return [mockTbody];
        return [];
      });

      applyLocale();

      expect(mockTbody.innerHTML).toContain('<tr>');
      expect(mockTbody.innerHTML).toContain('<td>');
      expect(mockTbody.innerHTML).toContain('<kbd>');
    });

    it('should handle missing locale keys gracefully', () => {
      const mockElement = {
        dataset: { i18n: 'nonexistentKey' },
        textContent: '',
      };
      mockDocument.querySelectorAll.mockImplementation((selector) => {
        if (selector === '[data-i18n]') return [mockElement];
        return [];
      });

      applyLocale();

      expect(mockElement.textContent).toBe('');
    });
  });

  describe('listenForLangSync', () => {
    beforeEach(() => {
      mockDocument.querySelectorAll.mockReturnValue([]);
      mockDocument.getElementById.mockReturnValue(null);
    });

    it('should add storage event listener', () => {
      const onSync = vi.fn();
      listenForLangSync(onSync);

      expect(mockWindow.addEventListener).toHaveBeenCalledWith('storage', expect.any(Function));
    });

    it('should handle language change events', () => {
      const onSync = vi.fn();
      listenForLangSync(onSync);

      // Get the event handler that was added
      const eventHandler = mockWindow.addEventListener.mock.calls[0][1];

      // Simulate storage event for language change
      const storageEvent = {
        key: STORAGE_KEY,
        newValue: 'bg',
      };

      eventHandler(storageEvent);

      expect(t()).toBe(bg);
      expect(onSync).toHaveBeenCalledWith('bg');
    });

    it('should ignore non-language storage events', () => {
      const onSync = vi.fn();
      listenForLangSync(onSync);

      const eventHandler = mockWindow.addEventListener.mock.calls[0][1];

      const storageEvent = {
        key: 'other-key',
        newValue: 'some-value',
      };

      eventHandler(storageEvent);

      expect(t()).toBe(en); // Should remain unchanged
      expect(onSync).not.toHaveBeenCalled();
    });

    it('should ignore invalid language codes', () => {
      const onSync = vi.fn();
      listenForLangSync(onSync);

      const eventHandler = mockWindow.addEventListener.mock.calls[0][1];

      const storageEvent = {
        key: STORAGE_KEY,
        newValue: 'invalid-lang',
      };

      eventHandler(storageEvent);

      expect(t()).toBe(en); // Should remain unchanged
      expect(onSync).not.toHaveBeenCalled();
    });
  });
});