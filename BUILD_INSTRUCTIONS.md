# Instrukcja Budowania Aplikacji Bee Events

## Wymagania wstępne

### Dla Android (APK):
- Node.js (wersja 18 lub nowsza)
- Konto Expo (już masz: piotrwittberg@gmail.com)

### Dla iOS (IPA):
- Node.js (wersja 18 lub nowsza)
- Konto Expo
- **Apple Developer Account** ($99/rok) - WYMAGANE dla iOS

---

## Metoda 1: EAS Build (ZALECANA - działa na każdym komputerze)

### Krok 1: Zainstaluj EAS CLI
Otwórz terminal i wykonaj:
```bash
npm install -g eas-cli
```

### Krok 2: Przejdź do folderu projektu
```bash
cd /ścieżka/do/projektu/bee-events
```

### Krok 3: Zaloguj się do Expo
```bash
eas login
```
- Email: **piotrwittberg@gmail.com**
- Hasło: **Polska2025@**

### Krok 4: Zbuduj APK dla Android
```bash
eas build --platform android --profile production
```

Build zajmie około 10-20 minut. Po zakończeniu otrzymasz:
- Link do pobrania pliku APK
- Możesz go zainstalować na dowolnym telefonie z Androidem

### Krok 5: Zbuduj IPA dla iOS (opcjonalnie)
```bash
eas build --platform ios --profile production
```

**UWAGA:** Dla iOS potrzebujesz:
- Apple Developer Account (płatne $99/rok)
- Certyfikaty i profile (EAS je wygeneruje automatycznie)

---

## Metoda 2: Expo Go (DO TESTOWANIA - BEZ BUDOWANIA)

### To NIE jest plik instalacyjny, ale możesz przetestować aplikację:

1. Zainstaluj **Expo Go** z Google Play lub App Store
2. W folderze projektu uruchom:
```bash
npx expo start
```
3. Zeskanuj kod QR telefonem
4. Aplikacja otworzy się w Expo Go

**Minusy:**
- Wymaga Expo Go
- Nie jest to samodzielna aplikacja
- Nie możesz jej udostępnić innym

---

## Metoda 3: Lokalny Build Android (Zaawansowane - wymaga Android Studio)

⚠️ **Bardzo skomplikowane - NIE ZALECANE dla początkujących**

Wymaga:
- Android Studio
- Android SDK
- JDK 17
- Konfiguracja zmiennych środowiskowych

Kroki:
```bash
npx expo prebuild
cd android
./gradlew assembleRelease
```

Plik APK będzie w: `android/app/build/outputs/apk/release/app-release.apk`

---

## Polecana Metoda: EAS Build

**Metoda 1 (EAS Build)** jest najlepsza, ponieważ:
✅ Działa na Windows, Mac i Linux
✅ Nie wymaga instalacji Android Studio
✅ Automatycznie generuje podpisane pliki
✅ Otrzymujesz gotowy plik APK/IPA do instalacji
✅ Możesz podzielić się linkiem z innymi

---

## Po Zbudowaniu

### Android APK:
- Pobierz plik APK z linku
- Prześlij na telefon
- Zainstaluj (musisz włączyć "Instalacja z nieznanych źródeł")

### iOS IPA:
- Wymaga Apple Developer Account
- Możesz używać TestFlight do dystrybucji
- Lub zainstalować bezpośrednio przez Xcode

---

## Problemy?

### "eas: command not found"
```bash
npm install -g eas-cli
```

### "Not logged in"
```bash
eas login
```

### "Project not configured"
Upewnij się, że jesteś w folderze projektu z plikiem `app.json`

---

## Pliki Konfiguracyjne (już gotowe w projekcie)

✅ `eas.json` - Konfiguracja buildów
✅ `app.json` - Konfiguracja aplikacji
✅ `package.json` - Wszystkie zależności

Wszystko jest już skonfigurowane i gotowe do buildu!
