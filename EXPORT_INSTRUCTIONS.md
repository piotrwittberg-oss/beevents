# 📦 Bee App - Instrukcje Eksportu

## Pliki Potrzebne do Eksportu

Skopiuj **wszystkie** poniższe pliki i foldery do swojego komputera:

### 📁 Struktura Folderów

```
bee-app/
├── src/
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── EventCard.tsx
│   │   ├── Input.tsx
│   │   └── Modal.tsx
│   ├── screens/
│   │   ├── LoginScreen.tsx
│   │   ├── RegisterScreen.tsx
│   │   ├── HomeScreen.tsx
│   │   ├── MapScreen.tsx
│   │   ├── CreateEventScreen.tsx
│   │   ├── EventDetailsScreen.tsx
│   │   └── ProfileScreen.tsx
│   ├── navigation/
│   │   └── AppNavigator.tsx
│   ├── state/
│   │   ├── authStore.ts
│   │   └── eventsStore.ts
│   ├── data/
│   │   └── categories.ts
│   ├── types/
│   │   └── index.ts
│   └── utils/
│       └── cn.ts
├── assets/
│   └── (ikony, splash screen - jeśli są)
├── App.tsx
├── index.ts
├── package.json
├── app.json
├── babel.config.js
├── metro.config.js
├── tailwind.config.js
├── tsconfig.json
├── global.css
├── nativewind-env.d.ts
├── README.md
└── bun.lock (lub package-lock.json)
```

## 🚀 Po Pobraniu - Co Dalej

1. **Stwórz folder** na komputerze: `bee-app`
2. **Skopiuj wszystkie pliki** zachowując strukturę folderów
3. **Otwórz terminal** w tym folderze
4. **Zainstaluj zależności:**
   ```bash
   npm install
   ```
5. **Uruchom:**
   ```bash
   npm start
   ```

## ⚠️ Ważne Pliki - Muszą Być!

Te pliki są KONIECZNE:
- ✅ package.json
- ✅ App.tsx
- ✅ app.json
- ✅ Cały folder src/
- ✅ babel.config.js
- ✅ metro.config.js
- ✅ tailwind.config.js

## 📝 Dodatkowe Notatki

- Nie kopiuj folderu `node_modules/` - za duży i niepotrzebny
- Nie kopiuj `.expo/` - wygeneruje się automatycznie
- Skopiuj plik `.gitignore` jeśli istnieje
