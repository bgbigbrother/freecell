/**
 * Minimal i18n bootstrap for standalone pages that don't load the main entry.
 *
 * Import this as a module script in those pages:
 *   <script type="module" src="/packages/freecell/src/i18n/init.ts"></script>
 */
import { loadSavedLocale, applyLocale } from './index';

loadSavedLocale();
applyLocale();
