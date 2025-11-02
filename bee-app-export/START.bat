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
