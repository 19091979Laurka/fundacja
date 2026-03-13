# Deploy na Firebase Hosting

## Krok po kroku

### 1. Zainstaluj Firebase CLI (jeśli nie masz)
```bash
npm install -g firebase-tools
```

### 2. Zaloguj się (jeśli nie jesteś)
```bash
firebase login
```
Otworzy się przeglądarka – zaloguj się na konto Google powiązane z Firebase.

### 3. Podłącz projekt (tylko przy pierwszym deployu)
W katalogu projektu uruchom:
```bash
firebase use --add
```
Wybierz istniejący projekt z listy albo utwórz nowy w [Firebase Console](https://console.firebase.google.com/).

### 4. Deploy
```bash
npm run deploy
```
albo osobno:
```bash
npm run build
firebase deploy
```

Po zakończeniu zobaczysz w terminalu adres strony, np.:
`Hosting URL: https://TWOJ-PROJEKT.web.app`

---

**Uwaga:** Folder `build/` jest już skonfigurowany w `firebase.json` (hosting + rewrites dla SPA). Wystarczy wykonać powyższe komendy w terminalu.
