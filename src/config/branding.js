// Fundacja NOWY JA – treści profesjonalne (5 zakładek)

export const branding = {
  appName: "Fundacja NOWY JA",
  tagline: "Pionierskie rozwiązania w psychiatrii sądowej",

  contact: {
    email: "kontakt@fundacja-nowyja.pl",
    phone: "+48 123 456 789",
    address: "ul. Przykładowa 1, 00-001 Warszawa",
  },

  pages: {
    home: {
      // Zakładka 1: Strona Główna / O Fundacji
      heroTitle: "Kim jesteśmy?",
      heroSubtitle:
        "Fundacja NOWY JA to organizacja wdrażająca pionierskie na skalę międzynarodową rozwiązania systemowe w obszarze psychiatrii sądowej. Naszą misją jest zapewnienie bezpiecznej, nadzorowanej i zorganizowanej ścieżki reintegracji społecznej dla obywateli polskich, wobec których orzeczono zagraniczne środki zabezpieczające (takie jak holenderski środek TBS).",
      ourGoal:
        "Działamy na rzecz pacjentów przebywających w zamkniętych placówkach psychiatrii sądowej za granicą (m.in. w Holandii i krajach skandynawskich), którzy wyczerpali dostępne możliwości terapeutyczne, a ich dalsza resocjalizacja w kraju pobytu jest niemożliwa ze względu na status imigracyjny. Łączymy opiekę kliniczną, nadzór prawny, superwizję środowiskową oraz ścisłą współpracę z instytucjami zagranicznymi i polskim Ministerstwem Sprawiedliwości w jeden spójny system.",
      stats: [
        { value: "2", label: "kraje w aktywnym programie", detail: "Polska i Holandia" },
        { value: "2", label: "kolejne państwa w negocjacjach", detail: "Islandia i Szwecja" },
        { value: "25+", label: "zidentyfikowanych źródeł finansowania", detail: "na lata 2026 i kolejne" },
      ],
      steps: [
        {
          title: "Kontakt i rozpoznanie sprawy",
          text: "Rodzina, pełnomocnik lub instytucja zgłasza sprawę. Zbieramy dokumentację kliniczną i prawną oraz wstępnie oceniamy możliwość transferu.",
        },
        {
          title: "Projekt ścieżki powrotu",
          text: "Tworzymy indywidualny plan transferu: dobór placówki w Polsce, ścieżka prawna, model nadzoru i sposób raportowania do państwa wysyłającego.",
        },
        {
          title: "Transfer i reintegracja",
          text: "Realizujemy transfer do Polski, zapewniamy opiekę kliniczną, nadzór ryzyka i stopniowe usamodzielnianie pacjenta w kontrolowanych warunkach.",
        },
      ],
    },

    about: {
      whoWeAre:
        "Fundacja NOWY JA to organizacja wdrażająca pionierskie na skalę międzynarodową rozwiązania systemowe w obszarze psychiatrii sądowej. Naszą misją jest zapewnienie bezpiecznej, nadzorowanej i zorganizowanej ścieżki reintegracji społecznej dla obywateli polskich, wobec których orzeczono zagraniczne środki zabezpieczające (takie jak holenderski środek TBS).",
      ourGoal:
        "Działamy na rzecz pacjentów przebywających w zamkniętych placówkach psychiatrii sądowej za granicą (m.in. w Holandii i krajach skandynawskich), którzy wyczerpali dostępne możliwości terapeutyczne, a ich dalsza resocjalizacja w kraju pobytu jest niemożliwa ze względu na status imigracyjny. Łączymy opiekę kliniczną, nadzór prawny, superwizję środowiskową oraz ścisłą współpracę z instytucjami zagranicznymi i polskim Ministerstwem Sprawiedliwości w jeden spójny system.",
    },

    // Zakładka 2: Nasz Zespół
    team: [
      {
        name: "Rafał Szuwara",
        role: "Koordynator ds. Współpracy Międzynarodowej / Prawnik / Superwizor",
        desc: "Twórca i główny architekt Programu Transgranicznej Reintegracji. Odpowiada za koordynację całego procesu, nadzór superwizyjny, logistykę, finanse oraz bieżącą komunikację z zagranicznymi placówkami (m.in. CTP Veldzicht, TBS Groningen) i organami nadzorczymi.",
      },
      {
        name: "dr Jakub Zawadzki",
        role: "Specjalista Psychiatra (Główny Lekarz Prowadzący)",
        desc: "Odpowiada za pełen nadzór kliniczny, kompleksową diagnostykę przy przyjęciu, optymalizację farmakoterapii oraz ocenę gotowości pacjenta do przechodzenia między etapami programu. Związany m.in. ze Szpitalem WAM i IPiN, co zapewnia ciągłość leczenia stacjonarnego.",
      },
      {
        name: "Mariusz Krysiak",
        role: "Psycholog, Psychoterapeuta Uzależnień",
        desc: "Prowadzi regularne sesje indywidualne z pacjentami. Jego specjalizacja jest kluczowa w profilaktyce uzależnień (szczególnie od alkoholu), pracy nad kontrolą impulsów oraz budowaniu kompetencji społecznych w procesie readaptacji.",
      },
    ],

    partners:
      "Współpracujemy z polskimi i zagranicznymi ministerstwami sprawiedliwości, szpitalami psychiatrycznymi, klinikami specjalistycznymi oraz wyspecjalizowanymi podmiotami transportu medycznego. Nasz model opiera się na formalnych porozumieniach, przejrzystym raportowaniu i podzielonym nadzorze odpowiedzialności.",
  },

  // Zakładka 3: Nasze Projekty
  projects: {
    items: [
      {
        key: "transgraniczna",
        title: "Program Transgranicznej Reintegracji Pacjentów Psychiatrycznych",
        status: "Wdrożony i realizowany",
        text: "Nasz flagowy projekt to kompleksowa ścieżka transferu i resocjalizacji pacjentów powracających do Polski. Zapewniamy płynne przejście z zagranicznego ośrodka zamkniętego do życia w społeczeństwie przy zachowaniu najwyższych standardów bezpieczeństwa publicznego. Projekt zakłada stałe zarządzanie ryzykiem, pomoc w aktywizacji zawodowej oraz ścisłe raportowanie do instytucji zagranicznych.",
      },
      {
        key: "forensiconnect",
        title: "ForensiConnect — Transgraniczna Platforma Telepsychologii Sądowej",
        status: "W przygotowaniu",
        text: "Odpowiadając na potrzeby zgłaszane m.in. przez stronę holenderską, opracowujemy bezpieczną, zgodną z RODO platformę telemedyczną. Jej celem jest świadczenie usług psychologicznych i psychiatrycznych w języku polskim dla pacjentów osadzonych za granicą. Platforma rozwiązuje problem bariery językowej w diagnostyce i terapii – eliminuje konieczność udziału tłumacza, co pozwala na trafną ocenę ryzyka, rzetelną diagnostykę (narzędziami takimi jak HCR-20v3 czy PCL-R) i skuteczne budowanie aliansu terapeutycznego.",
      },
    ],
    modelTitle: "Procedury i model działania (Ścieżka pacjenta)",
    modelDescription:
      "Nasz autorski model opieki to proces podzielony na rygorystyczne etapy, dostosowane do indywidualnego stanu pacjenta. Wszyscy podopieczni mają zapewnione państwowe ubezpieczenie zdrowotne (NFZ), co daje im pełen dostęp do opieki medycznej w Polsce.",
  },

  // Zakładka 4: Procedury i Model Działania
  procedures: [
    {
      title: "Etap I: Diagnostyka i stabilizacja (Szpital)",
      text: "Pierwszy miesiąc to pobyt stacjonarny w zamkniętym oddziale psychiatrycznym (np. Szpital WAM lub Instytut Psychiatrii i Neurologii w Warszawie). W tym czasie prowadzona jest wielospecjalistyczna diagnostyka, badania laboratoryjne, optymalizacja farmakoterapii oraz wstępna ocena ryzyka przy użyciu narzędzi ustrukturyzowanych (np. HCR-20v3).",
    },
    {
      title: "Etap II/III: Adaptacja środowiskowa",
      text: "Pacjent zostaje osiedlony w nowym środowisku (np. w Płocku) – celowo z dala od swoich dawnych, kryminogennych kontaktów. Zapewniamy codzienny nadzór superwizora (nawet 30 spotkań w miesiącu), pomoc w poszukiwaniu mieszkania, pracy i załatwianiu spraw urzędowych. Obejmuje to stałe kontrole psychiatryczne, toksykologiczne i psychoterapeutyczne.",
    },
    {
      title: "Etap III/IV: Usamodzielnienie zawodowe",
      text: "Pacjent podejmuje stałą pracę przy stopniowo zmniejszanej intensywności nadzoru. Ciągle jednak pozostaje w ścisłym kontakcie z psychiatrą i psychoterapeutą w celu utrwalenia mechanizmów radzenia sobie w sytuacjach stresowych.",
    },
  ],

  // Zakładka 5: Bezpieczeństwo Publiczne i Zarządzanie Ryzykiem
  safety: {
    intro:
      "Bezpieczeństwo społeczeństwa oraz ścisły nadzór nad pacjentami to absolutny fundament działań Fundacji NOWY JA.",
    riskManagement: {
      title: "Zarządzanie ryzykiem klinicznym",
      text: "Z każdym pacjentem opracowywany jest Indywidualny Plan Zapobiegania Nawrotom, uwzględniający specyficzne dla niego czynniki wyzwalające (np. kontakt z alkoholem, izolacja społeczna) oraz wczesne sygnały ostrzegawcze pogorszenia stanu zdrowia (np. zaburzenia snu, wycofanie). Wdrożony jest kilkustopniowy protokół kryzysowy – od wzmożonej obserwacji aż po natychmiastową rehospitalizację na oddziale zamkniętym. Regularnie przeprowadzamy rygorystyczne kontrole toksykologiczne.",
    },
    escapeProcedures: {
      title: "Procedury bezpieczeństwa na wypadek ucieczki",
      text: "Program posiada żelazne zasady reagowania w sytuacjach kryzysowych. W przypadku samowolnego oddalenia się pacjenta spod nadzoru uruchamiane są natychmiastowe kroki prawne:",
      steps: [
        "Natychmiastowe powiadomienie Policji (lokalnej i stołecznej) wraz z profilem kryminalno-psychiatrycznym pacjenta.",
        "Wprowadzenie danych pacjenta do Systemu Informacyjnego Schengen (SIS) jako osoby poszukiwanej oraz automatyczne powiadomienie Krajowego Biura Interpolu.",
        "Równoległe powiadomienie zagranicznych organów sprawiedliwości w celu niezwłocznego uruchomienia Europejskiego Nakazu Aresztowania (ENA) i ewentualnej ekstradycji.",
      ],
    },
    reporting:
      "Jako Fundacja na bieżąco współpracujemy z organami sądowymi w Polsce i za granicą, przekazując im cykliczne miesięczne raporty dotyczące zachowania, stanu klinicznego i bezpieczeństwa naszych podopiecznych.",
  },

  strategy: {
    horizon: "Horyzont 2026 – budujemy finansowanie multi‑source dla stabilnego rozwoju programu.",
    goals: [
      "Aplikacja do programu JUST‑2026‑JCOO dotyczącego transgranicznego transferu osób podlegających środkom zabezpieczającym.",
      "Partnerstwo w ramach EEA/Norway Grants Poland Justice Programme o wartości 60 mln EUR – komponent poświęcony transferowi i reintegracji.",
    ],
  },

  // Prezentacje / materiały do pobrania (pliki w public/documents/)
  presentations: [
    {
      title: "Prezentacja 1",
      file: "prezentacja-1.pdf",
      description: "Prezentacja o programie transgranicznej reintegracji.",
    },
    {
      title: "Prezentacja 2",
      file: "prezentacja-2.pdf",
      description: "Prezentacja o modelu działania i bezpieczeństwie.",
    },
  ],
};
