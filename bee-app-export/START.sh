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
