# Jak samodzielnie dodawać elementy (diagramy, tabele, boksy)

## 1. Katalog elementów w menu

W **lewym menu** jest pozycja **„Katalog elementów”**. Po rozwinięciu zobaczysz:

- **Wykresy (Recharts, Chart.js)** – słupki, linie, kołowe
- **Wykresy ApexCharts** – dodatkowe typy wykresów
- **Boksy z wykresami** – karty z małymi wykresami
- **Boksy treściowe** – karty z liczbami, tekstem, przyciskami
- **Tabele** – zwykłe tabele (reactstrap)
- **Mapy** – Leaflet / OpenStreetMap
- **Dashboard (CRM)** – przykład całego dashboardu z mixem elementów

Wejdź na wybraną podstronę i zobacz, jak wygląda dany element.

## 2. Jak wstawić element na stronę fundacji

1. **Otwórz przykład** z Katalogu (np. `/charts/chartjs`).
2. **Znajdź plik z kodem** w projekcie:
   - Wykresy: `src/DemoPages/Charts/` (np. `ChartJs/`, `ApexCharts/`)
   - Boksy: `src/DemoPages/Widgets/` (np. `ChartBoxes/`, `ContentBoxes/`)
   - Tabele: `src/DemoPages/Tables/RegularTables/`
   - Mapy: `src/DemoPages/Components/Maps/`
3. **Skopiuj** fragment kodu (np. `<BarChart>...</BarChart>` z importami z `recharts`).
4. **Wklej** do odpowiedniej strony fundacji:
   - Strona główna: `src/Foundation/pages/Home.jsx`
   - O nas: `src/Foundation/pages/About.jsx`
   - Projekty: `src/Foundation/pages/Projects.jsx`
   - Kontakt: `src/Foundation/pages/Contact.jsx`
5. **Dopasuj dane** – zamień przykładowe dane na swoje (np. z `branding.js`).
6. **Zostaw w Card** – żeby wyglądało jak reszta strony, umieść element w `<Card><CardBody>...</CardBody></Card>`.

## 3. Gdzie jest treść (teksty)

Wszystkie teksty fundacji są w **jednym pliku**:

- `src/config/branding.js`

Zmiana tytułów, opisów, listy zespołu, projektów itd. = edycja tego pliku.  
Nowe diagramy/tabele – dane do nich też możesz dodać w `branding.js` (np. tablica do wykresu), a w komponencie tylko odczytać `branding.chartData`.

## 4. Przydatne ścieżki w projekcie

| Element        | Ścieżka do przykładu w kodzie                    |
|----------------|---------------------------------------------------|
| Recharts       | `src/DemoPages/Charts/ChartJs/`                  |
| ApexCharts     | `src/DemoPages/Charts/ApexCharts/`               |
| Tabele         | `src/DemoPages/Tables/RegularTables/`            |
| Boksy (widget) | `src/DemoPages/Widgets/ChartBoxes/`, `ContentBoxes/` |
| Mapa Leaflet   | `src/DemoPages/Components/Maps/Examples/GoogleMaps/` |
| Strona fundacji (boksy) | `src/Foundation/pages/Home.jsx` itd.     |

Tak możesz sam dobierać i wstawiać diagramy, tabele i boksy na strony fundacji.
