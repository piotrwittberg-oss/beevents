#!/bin/bash

# Bee App Export Script
# This script creates a complete exportable package of your Bee app

echo "🐝 Creating Bee App Export Package..."
echo ""

# Create export directory
EXPORT_DIR="bee-app-export"
mkdir -p "$EXPORT_DIR"

# Copy all necessary files
echo "📦 Copying project files..."

# Root files
cp App.tsx "$EXPORT_DIR/"
cp index.ts "$EXPORT_DIR/"
cp package.json "$EXPORT_DIR/"
cp app.json "$EXPORT_DIR/"
cp babel.config.js "$EXPORT_DIR/"
cp metro.config.js "$EXPORT_DIR/"
cp tailwind.config.js "$EXPORT_DIR/"
cp tsconfig.json "$EXPORT_DIR/"
cp global.css "$EXPORT_DIR/"
cp nativewind-env.d.ts "$EXPORT_DIR/"
cp README.md "$EXPORT_DIR/"
cp bun.lock "$EXPORT_DIR/" 2>/dev/null || echo "No bun.lock found, skipping..."

# Copy source directory
echo "📁 Copying src/ directory..."
cp -r src "$EXPORT_DIR/"

# Copy assets if they exist
if [ -d "assets" ]; then
  echo "🎨 Copying assets/ directory..."
  cp -r assets "$EXPORT_DIR/"
fi

# Create installation instructions
cat > "$EXPORT_DIR/INSTALL.md" << 'EOF'
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
EOF

# Create quick start script for Windows
cat > "$EXPORT_DIR/START.bat" << 'EOF'
@echo off
echo 🐝 Bee App - Quick Start
echo.
echo Sprawdzam instalację npm...
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ BŁĄD: npm nie jest zainstalowany!
    echo.
    echo Zainstaluj Node.js z: https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo ✅ npm znaleziony!
echo.

if not exist "node_modules\" (
    echo 📦 Instaluję zależności...
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo.
        echo ❌ Instalacja nie powiodła się!
        pause
        exit /b 1
    )
)

echo.
echo 🚀 Uruchamiam aplikację...
echo.
echo Zeskanuj kod QR w Expo Go na swoim telefonie!
echo.
call npm start
EOF

# Create quick start script for Mac/Linux
cat > "$EXPORT_DIR/START.sh" << 'EOF'
#!/bin/bash

echo "🐝 Bee App - Quick Start"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ BŁĄD: npm nie jest zainstalowany!"
    echo ""
    echo "Zainstaluj Node.js z: https://nodejs.org/"
    exit 1
fi

echo "✅ npm znaleziony!"
echo ""

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Instaluję zależności..."
    npm install
    if [ $? -ne 0 ]; then
        echo ""
        echo "❌ Instalacja nie powiodła się!"
        exit 1
    fi
fi

echo ""
echo "🚀 Uruchamiam aplikację..."
echo ""
echo "Zeskanuj kod QR w Expo Go na swoim telefonie!"
echo ""
npm start
EOF

# Make shell script executable
chmod +x "$EXPORT_DIR/START.sh"

# Create a manifest file
cat > "$EXPORT_DIR/MANIFEST.txt" << EOF
Bee App - Export Package
========================

Data eksportu: $(date)

Zawartość:
- App.tsx (główny plik aplikacji)
- src/ (kod źródłowy)
  - components/ (komponenty UI)
  - screens/ (ekrany aplikacji)
  - navigation/ (nawigacja)
  - state/ (zarządzanie stanem)
  - data/ (dane - 200+ kategorii)
  - types/ (typy TypeScript)
  - utils/ (narzędzia)
- package.json (zależności)
- app.json (konfiguracja Expo)
- README.md (dokumentacja)
- INSTALL.md (instrukcja instalacji)
- START.bat (szybki start - Windows)
- START.sh (szybki start - Mac/Linux)

Następne kroki:
1. Przeczytaj INSTALL.md
2. Uruchom npm install
3. Uruchom npm start
4. Testuj w Expo Go

Powodzenia! 🐝
EOF

echo ""
echo "✅ Eksport zakończony!"
echo ""
echo "📁 Lokalizacja: $EXPORT_DIR/"
echo ""
echo "📋 Następne kroki:"
echo "   1. Skopiuj folder '$EXPORT_DIR' na swój komputer"
echo "   2. Otwórz plik INSTALL.md w środku"
echo "   3. Postępuj według instrukcji"
echo ""
echo "🎉 Gotowe!"
