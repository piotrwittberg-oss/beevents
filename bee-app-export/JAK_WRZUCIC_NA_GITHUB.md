# 🚀 Jak Wrzucić Bee App na GitHub

## KROK 1: Załóż Konto GitHub (Jeśli Nie Masz)

1. Wejdź na: **https://github.com**
2. Kliknij **"Sign Up"**
3. Wpisz email, hasło, nazwę użytkownika
4. Zweryfikuj konto (email)

---

## KROK 2: Stwórz Nowe Repozytorium

1. Kliknij **"+"** w prawym górnym rogu
2. Wybierz **"New repository"**
3. Wpisz nazwę: **bee-app**
4. Opis: **"Aplikacja mobilna do organizacji wydarzeń"**
5. Zostaw **Public** (publiczne)
6. **NIE** zaznaczaj "Initialize with README"
7. Kliknij **"Create repository"**

---

## KROK 3: Wrzuć Pliki

### OPCJA A: Przez Przeglądarkę (Najprościej!)

1. Na stronie swojego repozytorium kliknij **"uploading an existing file"**
2. **Przeciągnij wszystkie pliki** z folderu `bee-app-export`
3. Lub kliknij **"choose your files"** i wybierz wszystkie
4. Na dole wpisz: "Initial commit - Bee App"
5. Kliknij **"Commit changes"**

### OPCJA B: Przez Terminal (Dla Zaawansowanych)

```bash
# 1. Przejdź do folderu
cd bee-app-export

# 2. Zainicjuj Git
git init

# 3. Dodaj wszystkie pliki
git add .

# 4. Zrób pierwszy commit
git commit -m "Initial commit - Bee App"

# 5. Dodaj remote (ZAMIEŃ 'twoj-username' na swoją nazwę!)
git remote add origin https://github.com/twoj-username/bee-app.git

# 6. Wyślij na GitHub
git branch -M main
git push -u origin main
```

---

## KROK 4: Gotowe! 🎉

Teraz możesz:

1. **Udostępnić link** znajomym: `https://github.com/twoj-username/bee-app`
2. **Pobrać projekt** z dowolnego miejsca
3. **Kliknąć "Code" → "Download ZIP"** żeby pobrać

---

## 📱 Link do Pobrania na Telefon

Po wrzuceniu na GitHub, link będzie wyglądał tak:

```
https://github.com/twoj-username/bee-app/archive/refs/heads/main.zip
```

Ten link **bezpośrednio pobiera ZIP** - wyślij go sobie na telefon!

---

## ❓ Problemy?

### Nie znam Git / GitHub
→ Użyj **OPCJI A** (przez przeglądarkę) - najłatwiejsza!

### Błąd "Permission denied"
→ Sprawdź czy jesteś zalogowany na GitHub

### Zbyt duże pliki
→ Usuń folder `node_modules` przed wrzuceniem (i tak nie jest potrzebny)

---

**Powodzenia!** 🐝
