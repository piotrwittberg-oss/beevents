# 🐝 Bee App - Instrukcja Instalacji

## 📋 Wymagania

Zainstaluj najpierw:
1. Node.js (v18+) - https://nodejs.org/
2. npm (instaluje się z Node.js)

## 🚀 Instalacja - Krok po Kroku

### 1. Rozpakuj Folder
Jeśli pobrałeś jako ZIP, rozpakuj go.

### 2. Otwórz Terminal/CMD
**Windows:**
- Naciśnij Win+R
- Wpisz: `cmd`
- Enter

**Mac:**
- Naciśnij Cmd+Spacja
- Wpisz: `terminal`
- Enter

### 3. Przejdź do Folderu
```bash
cd ścieżka/do/bee-app-export

# Przykład Windows:
cd C:\Users\TwojeImie\Downloads\bee-app-export

# Przykład Mac:
cd ~/Downloads/bee-app-export
```

### 4. Zainstaluj Zależności
```bash
npm install
```
⏱️ To zajmie 2-5 minut. Poczekaj aż się skończy.

### 5. Uruchom Aplikację
```bash
npm start
```

### 6. Testuj na Telefonie

**A) Expo Go (Szybki Test):**
1. Zainstaluj "Expo Go" z App Store/Google Play
2. Zeskanuj kod QR z terminala
3. Gotowe!

**B) Development Build (Pełna Wersja):**
```bash
# Zainstaluj EAS CLI
npm install -g eas-cli

# Zaloguj się (załóż konto na expo.dev)
eas login

# Zbuduj dla Androida
eas build --profile development --platform android

# Poczekaj 15-20 minut, pobierz APK i zainstaluj
```

## 🗺️ Konfiguracja Google Maps

Aby mapa działała, potrzebujesz API key:

1. Wejdź na: https://console.cloud.google.com/
2. Utwórz projekt
3. Włącz "Maps SDK for Android" i "Maps SDK for iOS"
4. Utwórz API Key
5. Otwórz plik `app.json`
6. Zamień:
   - `YOUR_ANDROID_GOOGLE_MAPS_API_KEY_HERE` → twój klucz
   - `YOUR_IOS_GOOGLE_MAPS_API_KEY_HERE` → twój klucz

## ❓ Problemy?

### Błąd: "command not found: npm"
→ Zainstaluj Node.js z https://nodejs.org/

### Błąd: "Cannot find module"
→ Usuń folder `node_modules` i uruchom `npm install` ponownie

### Błąd przy `npm install`
→ Spróbuj: `npm install --legacy-peer-deps`

### Mapa nie działa w Expo Go
→ Musisz zrobić development build (EAS)

## 📚 Dokumentacja

Pełna dokumentacja w pliku `README.md`

## 🆘 Pomoc

Problemy? Napisz dokładnie jaki błąd widzisz i na którym kroku.

---
**Powodzenia! 🐝**
