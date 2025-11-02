# 🐝 Bee - Aplikacja do Organizacji Wydarzeń

![Platform](https://img.shields.io/badge/Platform-Android%20%7C%20iOS-blue)
![React Native](https://img.shields.io/badge/React%20Native-0.76.7-61dafb)
![Expo](https://img.shields.io/badge/Expo-SDK%2053-000020)
![License](https://img.shields.io/badge/License-MIT-green)

**Bee** to mobilna aplikacja do organizowania i odkrywania prawdziwych wydarzeń offline - spotkania, sport, gry, imprezy i wiele więcej!

## 📱 Zrzuty Ekranu

- **Logowanie** - Bezpieczna rejestracja i logowanie
- **Home** - Przeglądaj nadchodzące wydarzenia
- **Mapa** - Zobacz wydarzenia na mapie
- **Tworzenie** - Organizuj własne wydarzenia
- **Profil** - Zarządzaj punktami Bee i ustawieniami

## ✨ Funkcje

### 🎯 Główne Możliwości
- ✅ Rejestracja i logowanie (email/hasło)
- ✅ Tworzenie wydarzeń z 200+ kategoriami
- ✅ Przeglądanie i filtrowanie wydarzeń
- ✅ Interaktywna mapa z Google Maps
- ✅ Dołączanie do wydarzeń
- ✅ System punktów Bee (gamifikacja)
- ✅ Promowanie wydarzeń za punkty
- ✅ Weryfikacja wieku 18+
- ✅ Profil użytkownika
- ✅ Historia transakcji punktów

### 🎮 System Punktów Bee
- **+3 punkty** - Stworzenie wydarzenia
- **+2 punkty** - Zaproszenie znajomego (gdy dołączy)
- **+1 punkt** - Udział w wydarzeniu
- **-20 punktów** - Boost wydarzenia na 24h
- **-35 punktów** - Boost wydarzenia na 48h

### 🎪 200+ Kategorii Wydarzeń
- **Sport & Fitness**: Piłka nożna, koszykówka, joga, bieganie, siłownia...
- **Spotkania**: Kawa, lunch, kolacja, happy hour...
- **Gry**: Szachy, gry planszowe, poker, trivia...
- **Outdoor**: Plaża, park, BBQ, kemping, wycieczki...
- **Kultura**: Galerie, muzea, teatr, koncerty...
- **Edukacja**: Wymiana językowa, warsztaty, kursy...
- I wiele więcej!

## 🚀 Szybki Start

### Wymagania
- **Node.js** v18+ ([pobierz tutaj](https://nodejs.org/))
- **npm** lub **bun**
- **Telefon Android/iOS** lub emulator

### Instalacja

1. **Sklonuj repozytorium**
```bash
git clone https://github.com/[TWOJE_REPO]/bee-app.git
cd bee-app
```

2. **Zainstaluj zależności**
```bash
npm install
# lub
bun install
```

3. **Uruchom aplikację**
```bash
npm start
# lub
bun start
```

4. **Testuj na telefonie**
   - Zainstaluj **Expo Go** z Google Play / App Store
   - Zeskanuj kod QR z terminala
   - Gotowe! 🎉

## 📥 Pobieranie bez Git (Najprościej!)

**Nie znasz Git? Żaden problem!**

1. **Kliknij zielony przycisk "Code"** u góry strony
2. **Wybierz "Download ZIP"**
3. **Rozpakuj folder** na swoim komputerze
4. **Otwórz terminal** w folderze
5. **Uruchom:**
   ```bash
   npm install
   npm start
   ```

## 🗺️ Konfiguracja Google Maps

Aby mapa działała poprawnie:

1. **Zdobądź API Key:**
   - Wejdź na [Google Cloud Console](https://console.cloud.google.com/)
   - Utwórz nowy projekt
   - Włącz "Maps SDK for Android" i "Maps SDK for iOS"
   - Utwórz API Key w sekcji "Credentials"

2. **Dodaj klucze do projektu:**
   - Otwórz plik `app.json`
   - Znajdź: `YOUR_ANDROID_GOOGLE_MAPS_API_KEY_HERE`
   - Zamień na swój klucz Androida
   - Znajdź: `YOUR_IOS_GOOGLE_MAPS_API_KEY_HERE`
   - Zamień na swój klucz iOS

## 🔨 Development Build (Wszystko Działa!)

W Expo Go niektóre funkcje są ograniczone. Dla pełnej wersji:

```bash
# Zainstaluj EAS CLI
npm install -g eas-cli

# Zaloguj się (załóż darmowe konto na expo.dev)
eas login

# Zbuduj dla Androida
eas build --profile development --platform android

# Lub dla iOS (wymaga Maca lub build w chmurze)
eas build --profile development --platform ios
```

⏱️ Buildowanie zajmie 15-20 minut. Dostaniesz link do pobrania APK/IPA.

## 📱 Budowanie Wersji Produkcyjnej

### Android (Google Play)

```bash
# Build produkcyjny
eas build --platform android --profile production

# Dostaniesz AAB/APK gotowy do wysłania do Google Play
```

### iOS (App Store)

```bash
# Build produkcyjny
eas build --platform ios --profile production

# Dostaniesz IPA gotowy do wysłania do App Store Connect
```

## 🏗️ Architektura

### Stack Technologiczny
- **Framework**: React Native 0.76.7 + Expo SDK 53
- **Nawigacja**: React Navigation (Native Stack + Bottom Tabs)
- **Stan**: Zustand z AsyncStorage
- **Styling**: NativeWind (Tailwind CSS dla React Native)
- **Mapy**: react-native-maps z Google Maps
- **Ikony**: Ionicons
- **TypeScript**: Pełne typowanie

### Struktura Projektu
```
src/
├── components/      # Komponenty UI (Button, Input, EventCard, Modal)
├── screens/         # Ekrany aplikacji
├── navigation/      # Konfiguracja nawigacji
├── state/           # Zustand stores (auth, events)
├── data/            # Statyczne dane (200+ kategorii)
├── types/           # TypeScript types
└── utils/           # Funkcje pomocnicze
```

## 🎨 Customizacja

### Zmiana Kolorów (żółty motyw pszczoły)
Edytuj `tailwind.config.js`:
```javascript
colors: {
  primary: '#EAB308',    // Żółty pszczoły
  secondary: '#F59E0B',  // Pomarańczowy
  // ...
}
```

### Dodawanie Kategorii
Edytuj `src/data/categories.ts`:
```typescript
{
  id: "cat_xxx",
  name: "Twoja Kategoria",
  icon: "nazwa-ikony",  // Z Ionicons
  tags: ["tag1", "tag2"],
  color: "#HEX_COLOR"
}
```

## 🐛 Troubleshooting

### Błąd: "command not found: npm"
→ Zainstaluj Node.js z https://nodejs.org/

### Błąd: "Cannot find module"
→ Usuń `node_modules` i uruchom ponownie:
```bash
rm -rf node_modules
npm install
```

### Mapa nie działa w Expo Go
→ To normalne! Musisz zrobić development build (patrz wyżej)

### TypeScript error w react-native-maps
→ To znany problem biblioteki, nie wpływa na działanie aplikacji

### Błąd przy instalacji
→ Spróbuj:
```bash
npm install --legacy-peer-deps
```

## 📚 Dokumentacja

- [Expo Docs](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [NativeWind](https://www.nativewind.dev/)
- [Zustand](https://zustand-demo.pmnd.rs/)

## 🔮 Planowane Funkcje

- [ ] System czatu (wiadomości 1:1 i grupowe)
- [ ] System znajomych
- [ ] Powiadomienia push
- [ ] Integracja z kalendarzem
- [ ] QR kod check-in
- [ ] Grupy i zespoły
- [ ] Osiągnięcia i odznaki
- [ ] Oceny i recenzje wydarzeń
- [ ] Płatne wydarzenia
- [ ] Zaawansowane filtry

## 📝 Znane Ograniczenia (MVP)

- Mock authentication (brak prawdziwego backendu)
- Dane tylko lokalnie (znikają po restarcie)
- 200 kategorii (można rozszerzyć do 1000+)
- Brak real-time updates
- Brak płatności
- Współrzędne losowe (demo)

## 🤝 Jak Pomóc / Contributing

1. Fork projektu
2. Stwórz branch (`git checkout -b feature/AmazingFeature`)
3. Commit zmian (`git commit -m 'Add AmazingFeature'`)
4. Push do brancha (`git push origin feature/AmazingFeature`)
5. Otwórz Pull Request

## 📄 Licencja

MIT License - możesz robić z tym projektem co chcesz!

## 👤 Autor

Stworzono przez AI w Vibecode Platform

## 🙏 Podziękowania

- Expo team za wspaniałe narzędzia
- React Native community
- Wszystkim testerom i użytkownikom

## 💬 Kontakt / Support

Masz pytania? Problemy? Pomysły?
- Otwórz Issue na GitHubie
- Lub napisz do autora

---

**Zbudowano z ❤️ i ☕ dla społeczności**

🐝 **Bee - Połącz się z ludźmi w prawdziwym życiu!**
