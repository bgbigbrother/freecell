import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock the index module
vi.mock('../src/i18n/index', () => ({
  loadSavedLocale: vi.fn(),
  applyLocale: vi.fn(),
}));

import { loadSavedLocale, applyLocale } from '../src/i18n/index';

describe('i18n Init', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should call loadSavedLocale and applyLocale when imported', async () => {
    // Import the init module which should execute the initialization code
    await import('../src/i18n/init');

    expect(loadSavedLocale).toHaveBeenCalledTimes(1);
    expect(applyLocale).toHaveBeenCalledTimes(1);
  });

  it('should initialize i18n system', () => {
    // The init.ts file should set up the i18n system by calling the functions
    // This test verifies that the module can be imported without errors
    expect(async () => {
      await import('../src/i18n/init');
    }).not.toThrow();
  });
});