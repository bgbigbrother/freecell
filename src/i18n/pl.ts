/**
 * Polskie ciągi lokalizacyjne dla FreeCell Solitaire.
 * Aby dodać nowy język, zduplikuj ten plik (np. fr.ts), przetłumacz
 * wartości, a następnie przekaż obiekt do `setLocale()` w src/i18n/index.ts.
 */
export const pl = {
  // ── Metadane strony ────────────────────────────────────────────────────────
  pageTitle: 'FreeCell Solitaire — Darmowa gra karciana online',
  pageDescription: 'Graj w FreeCell Solitaire za darmo w przeglądarce. Bez pobierania, bez rejestracji. Klasyczna gra karciana z cofaniem, automatycznym przesuwaniem, skrótami klawiaturowymi i strategiczną rozgrywką.',

  // ── Przyciski nagłówka ─────────────────────────────────────────────────────
  btnNewGame: 'Nowa gra',
  btnUndo: 'Cofnij',
  btnHint: 'Podpowiedź',
  hintNone: 'Brak dostępnych ruchów',

  // ── Pasek statystyk ────────────────────────────────────────────────────────
  statTime: 'Czas',
  statMoves: 'Ruchy',
  statScore: 'Wynik',

  // ── Tytuły stosów ──────────────────────────────────────────────────────────
  pileFreeCell: 'Wolne pole',
  pileFoundation: 'Fundament',

  // ── Pasek narzędzi ─────────────────────────────────────────────────────────
  toolbarPause: 'Pauza',
  toolbarMusic: 'Muzyka',
  toolbarFullscreen: 'Pełny ekran',
  toolbarExitFullscreen: 'Wyjdź z pełnego ekranu',

  // ── Modal pauzy ────────────────────────────────────────────────────────────
  pauseTitle: 'Gra wstrzymana',
  pauseSubtitle: 'Nie spiesz się — twoja gra jest bezpieczna',
  pauseResume: 'Kontynuuj',

  // ── Nakładka wygranej ──────────────────────────────────────────────────────
  winTitle: 'Wygrałeś!',
  winFinalScore: 'Wynik',
  winTime: 'Czas',
  winMoves: 'Ruchy',

  // ── Dostępność kart ────────────────────────────────────────────────────────
  cardBack: 'Rewers karty',

  // ── Odtwarzacz muzyki ──────────────────────────────────────────────────────
  musicPlayerAriaLabel: 'Odtwarzacz muzyki',
  musicSolitaireRadio: 'Radio Solitaire',
  musicTracksLabel: 'Utwory',
  musicTracksAriaLabel: 'Wybór utworu',
  musicPlay: 'Odtwarzaj',
  musicPause: 'Pauza',
  musicVolumeLabel: 'Głośność',
  musicVolumeAriaLabel: 'Głośność',
  musicMute: 'Wycisz',
  musicUnmute: 'Włącz dźwięk',
  musicTrackAriaLabel: (n: number, name: string) => `Utwór ${n}: ${name}`,

  // ── Nazwy utworów ──────────────────────────────────────────────────────────
  trackNames: [
    'Wiolonczela', 'Perkusja I', 'Perkusja II', 'Flet', 'Gitara I', 'Gitara II', 'Gitara III',
    'Jazz', 'Natura I', 'Natura II', 'Natura III', 'Natura IV', 'Natura V', 'Natura VI',
    'Orkiestra', 'Fortepian I', 'Fortepian II', 'Fortepian III', 'Fortepian IV', 'Fortepian V', 'Fortepian VI',
    'Fortepian VII', 'Fortepian VIII', 'Syntezator I', 'Syntezator II', 'Syntezator III', 'Skrzypce',
  ],

  // ── Stopka ─────────────────────────────────────────────────────────────────
  footerCopy: 'FreeCell Solitaire. Graj za darmo.',
  footerPrivacyPolicy: 'Polityka prywatności',
  footerTermsOfService: 'Warunki korzystania',
  footerNavAriaLabel: 'Nawigacja w stopce',

  // ── Treść poniżej zakładki ─────────────────────────────────────────────────
  descriptionHeading: 'FreeCell Solitaire',
  descriptionP1: 'Celem jest przeniesienie wszystkich 52 kart na cztery stosy Fundamentów, budując każdy stos według koloru od Asa do Króla.',
  descriptionP2: 'FreeCell to jedna z najpopularniejszych gier karcianych typu pasjans na świecie, rozgrywana jedną standardową talią 52 kart. W przeciwieństwie do większości odmian pasjansa, wszystkie karty są rozdawane odkryte od samego początku, co czyni grę czysto umiejętnościową i strategiczną. Prawie każde rozdanie jest możliwe do rozwiązania przy starannym planowaniu. Cztery wolne pola zapewniają tymczasowe przechowywanie, pomagając manewrować kartami na właściwe pozycje.',

  howToPlayHeading: 'Jak grać',
  howToPlayLayoutHeading: 'Układ',
  howToPlayLayoutP: 'Gra rozpoczyna się od rozdania wszystkich 52 kart odkrytych w ośmiu kolumnach Stołu. Pierwsze cztery kolumny zawierają po 7 kart każda; pozostałe cztery kolumny zawierają po 6 kart każda. Cztery puste Wolne Pola znajdują się w lewym górnym rogu, a cztery puste stosy Fundamentów w prawym górnym rogu.',
  howToPlayGoalHeading: 'Twój cel',
  howToPlayGoalP: 'Zbuduj wszystkie cztery stosy Fundamentów według koloru od Asa do Króla. Najpierw przenieś Asa każdego koloru na Fundament, następnie 2, 3 i tak dalej aż do Króla. Gdy wszystkie 52 karty znajdą się na Fundamentach, wygrywasz.',
  howToPlayTableauHeading: 'Przesuwanie kart na Stole',
  howToPlayTableauP: 'Przeciągnij kartę na inną kolumnę Stołu. Umieszczana karta musi być przeciwnego koloru i dokładnie o jeden stopień niższa niż karta, na którą trafia. Na przykład czerwona 7 może być położona na czarnej 8. Na pustą kolumnę można położyć dowolną kartę. Możesz przesunąć wiele kart jednocześnie (superruch), jeśli tworzą one malejący ciąg o naprzemiennych kolorach i jest wystarczająco dużo pustych wolnych pól i pustych kolumn, aby teoretycznie przesunąć je pojedynczo.',
  howToPlayFreeCellsHeading: 'Korzystanie z Wolnych Pól',
  howToPlayFreeCellsP: 'Każde Wolne Pole może pomieścić jedną kartę na raz. Używaj ich jako tymczasowego przechowywania, aby uwolnić karty na Stole. Możesz przenieść kartę z Wolnego Pola z powrotem na Stół lub bezpośrednio na Fundament, gdy jest to dozwolone.',
  howToPlayFoundationsHeading: 'Budowanie Fundamentów',
  howToPlayFoundationsP: 'Przenieś Asy na puste stosy Fundamentów, a następnie buduj w górę według koloru (As, 2, 3, ... Król). Karty, które można bezpiecznie przenieść, są automatycznie wysyłane na Fundamenty po każdej akcji.',
  howToPlayUndoHeading: 'Cofanie',
  howToPlayUndoP: 'Kliknij przycisk Cofnij (lub naciśnij Ctrl+Z / Cmd+Z), aby cofnąć ostatnią akcję. Możesz cofać aż do początkowego rozdania.',

  rulesHeading: 'Zasady — Krok po kroku',
  rules: [
    '<strong>Tasowanie i rozdanie</strong> — Standardowa talia 52 kart jest tasowana i rozdawana odkryta w 8 kolumnach Stołu. Kolumny 1–4 otrzymują po 7 kart każda; kolumny 5–8 otrzymują po 6 kart każda. Wszystkie karty są widoczne od początku.',
    '<strong>Stół buduje się malejąco z naprzemiennymi kolorami</strong> — Kartę można położyć na dowolnej karcie na Stole, która jest dokładnie o jeden stopień wyższa i przeciwnego koloru. Na przykład czarna 5 może być położona na czerwonej 6.',
    '<strong>Superruch sekwencji jako grupy</strong> — Ciągły ciąg kart w porządku malejącym i naprzemiennych kolorach może być przesunięty razem, pod warunkiem że jest wystarczająco dużo pustych Wolnych Pól i pustych kolumn Stołu. Maksymalna liczba kart, które można przesunąć, wynosi (puste wolne pola + 1) × 2^(puste kolumny).',
    '<strong>Dowolna karta wypełnia pustą kolumnę</strong> — Gdy kolumna Stołu zostanie opróżniona, można tam przenieść dowolną pojedynczą kartę lub prawidłową sekwencję superruchu.',
    '<strong>Wolne Pola mieszczą po jednej karcie</strong> — Przenieś dowolną pojedynczą kartę na puste Wolne Pole w celu tymczasowego przechowania. Dozwolona jest tylko jedna karta na pole.',
    '<strong>Buduj Fundamenty w górę według koloru</strong> — Przenieś Asy na puste stosy Fundamentów, a następnie buduj w górę w tym samym kolorze: As, 2, 3, ... Król.',
    '<strong>Automatyczne przesuwanie bezpiecznych kart</strong> — Po każdej akcji karty, które można bezpiecznie przenieść na Fundamenty (nie są już potrzebne do budowania na Stole), są przesuwane automatycznie.',
    '<strong>Cofnij dowolny ruch</strong> — Użyj Cofnij, aby cofnąć ruchy aż do początkowego rozdania.',
    '<strong>Wygraj, wypełniając wszystkie cztery Fundamenty</strong> — Umieść wszystkie 52 karty na czterech stosach Fundamentów (po jednym kompletnym ciągu As-Król w tym samym kolorze na stos), aby wygrać grę.',
  ],

  shortcutsHeading: 'Skróty klawiaturowe',
  shortcutsKeyCol: 'Klawisz',
  shortcutsActionCol: 'Akcja',
  shortcuts: [
    { key: '← → ↑ ↓ Strzałki', action: 'Przesuwanie kursora klawiatury między stosami' },
    { key: 'Spacja', action: 'Zaznaczenie karty/kart pod kursorem lub potwierdzenie ruchu na podświetlony cel' },
    { key: 'Escape', action: 'Anulowanie bieżącego zaznaczenia' },
    { key: 'F2', action: 'Rozpoczęcie nowej gry' },
    { key: 'Ctrl+Z / Cmd+Z', action: 'Cofnięcie ostatniej akcji' },
  ],

  // ── Strona Polityki prywatności ────────────────────────────────────────────
  privacyPageTitle: 'Polityka prywatności — FreeCell Solitaire',
  privacyPageDescription: 'Polityka prywatności dla FreeCell Solitaire. Dowiedz się, jak obchodzimy się z Twoimi danymi.',
  privacyBackToGame: 'Powrót do gry',
  privacyHeading: 'Polityka prywatności',
  privacyLastUpdated: 'Ostatnia aktualizacja: 7 kwietnia 2026',
  privacyIntro: 'Niniejsza Polityka prywatności opisuje, w jaki sposób FreeCell Solitaire („my”, „nas” lub „nasz”) postępuje z informacjami, gdy korzystasz z naszej darmowej gry karcianej online na <a href="/">tej stronie</a>.',
  privacyCollectHeading: 'Gromadzone przez nas informacje',
  privacyCollectP: 'Nie wymagamy zakładania konta ani podawania jakichkolwiek danych osobowych, aby grać. Możemy automatycznie gromadzić ograniczone, nieosobowe dane techniczne, w tym:',
  privacyCollectItems: ['Typ i wersja przeglądarki', 'System operacyjny', 'Adresy URL odsyłające i odwiedzone strony', 'Data i godzina wizyt'],
  privacyCollectNote: 'Dane te są gromadzone w formie zagregowanej i nie mogą być wykorzystane do identyfikacji Twojej osoby.',
  privacyStorageHeading: 'Pamięć lokalna',
  privacyStorageP: 'Gra może korzystać z pamięci lokalnej Twojej przeglądarki, aby zapisywać preferencje gry lokalnie na Twoim urządzeniu. Dane te nigdy nie opuszczają Twojej przeglądarki i nie są do nas przesyłane.',
  privacyCookiesHeading: 'Pliki cookie',
  privacyCookiesP: 'Nie używamy śledzących plików cookie ani reklamowych plików cookie. Wszelkie ustawione pliki cookie są ściśle niezbędne do funkcjonowania gry i nie gromadzą danych osobowych.',
  privacyThirdPartyHeading: 'Usługi stron trzecich',
  privacyThirdPartyP: 'Możemy korzystać z usług stron trzecich, takich jak CDN (sieć dostarczania treści), aby obsługiwać zasoby gry. Usługi te mogą gromadzić standardowe dane dziennika serwera (takie jak adresy IP) w ramach normalnych operacji internetowych. Nie sprzedajemy ani nie udostępniamy Twoich danych reklamodawcom.',
  privacyChildrenHeading: 'Prywatność dzieci',
  privacyChildrenP: 'Nasza gra jest odpowiednia dla wszystkich grup wiekowych. Nie zbieramy świadomie danych osobowych od dzieci poniżej 13 roku życia. Jeśli uważasz, że dziecko przekazało nam dane osobowe, skontaktuj się z nami, abyśmy mogli je usunąć.',
  privacyChangesHeading: 'Zmiany w niniejszej polityce',
  privacyChangesP: 'Możemy od czasu do czasu aktualizować niniejszą Politykę prywatności. Zmiany zostaną opublikowane na tej stronie z zaktualizowaną datą. Dalsze korzystanie z gry po zmianach oznacza akceptację zaktualizowanej polityki.',
  privacyContactHeading: 'Kontakt',
  privacyContactP: 'W przypadku pytań dotyczących niniejszej Polityki prywatności możesz skontaktować się z nami za pośrednictwem informacji kontaktowych dostępnych na naszej stronie.',

  // ── Strona Warunków korzystania ────────────────────────────────────────────
  tosPageTitle: 'Warunki korzystania — FreeCell Solitaire',
  tosPageDescription: 'Warunki korzystania z FreeCell Solitaire.',
  tosBackToGame: 'Powrót do gry',
  tosHeading: 'Warunki korzystania',
  tosLastUpdated: 'Ostatnia aktualizacja: 7 kwietnia 2026',
  tosIntro: 'Uzyskując dostęp lub korzystając z FreeCell Solitaire („gra”, „strona”), zgadzasz się na przestrzeganie niniejszych Warunków korzystania. Jeśli się nie zgadzasz, prosimy nie korzystać ze strony.',
  tosUseHeading: 'Korzystanie z gry',
  tosUseP: 'FreeCell Solitaire jest udostępniana bezpłatnie do osobistej, niekomercyjnej rozrywki. Możesz:',
  tosUseMayItems: ['Grać dla osobistej przyjemności', 'Udostępniać adres URL strony innym'],
  tosUseMayNotP: 'Nie możesz:',
  tosUseMayNotItems: [
    'Kopiować, rozpowszechniać ani odsprzedawać gry lub jej zasobów bez zezwolenia',
    'Podejmować prób inżynierii wstecznej, dekompilacji ani manipulowania grą',
    'Używać zautomatyzowanych narzędzi lub botów do interakcji z grą',
    'Używać strony w jakimkolwiek niezgodnym z prawem celu',
  ],
  tosIPHeading: 'Własność intelektualna',
  tosIPP: 'Cała zawartość tej strony, w tym kod gry, grafika, opracowanie kart i dźwięk, jest naszą własnością lub jest nam licencjonowana. Żadne postanowienie niniejszych Warunków nie przyznaje Ci żadnych praw do naszej własności intelektualnej poza tym, co jest konieczne do grania.',
  tosWarrantyHeading: 'Wyłączenie gwarancji',
  tosWarrantyP: 'Gra jest dostarczana „tak jak jest”, bez jakichkolwiek gwarancji, wyraźnych lub dorozumianych. Nie gwarantujemy, że strona będzie dostępna przez cały czas, wolna od błędów lub wolna od wirusów lub innych szkodliwych składników.',
  tosLiabilityHeading: 'Ograniczenie odpowiedzialności',
  tosLiabilityP: 'W najszerszym zakresie dozwolonym przez prawo nie ponosimy odpowiedzialności za jakiekolwiek pośrednie, przypadkowe, specjalne lub wynikowe szkody wynikające z korzystania lub niemożności korzystania z gry.',
  tosChangesHeading: 'Zmiany niniejszych Warunków',
  tosChangesP: 'Zastrzegamy sobie prawo do aktualizacji niniejszych Warunków w dowolnym momencie. Zmiany zostaną opublikowane na tej stronie z zaktualizowaną datą. Dalsze korzystanie z gry po zmianach oznacza akceptację zmienionych Warunków.',
  tosLawHeading: 'Prawo właściwe',
  tosLawP: 'Niniejsze Warunki podlegają obowiązującemu prawu. Wszelkie spory będą rozstrzygane przez właściwe sądy odpowiedniej jurysdykcji.',
  tosContactHeading: 'Kontakt',
  tosContactP: 'W przypadku pytań dotyczących niniejszych Warunków prosimy o kontakt za pośrednictwem informacji dostępnych na naszej stronie.',
};

export type Locale = typeof pl;