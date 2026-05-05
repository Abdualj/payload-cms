# 🔍 Supabase Connection String - Yksityiskohtainen ohje

Jos et löydä Supabase connection stringiä, seuraa näitä ohjeita:

---

## 📍 Missä Connection String sijaitsee?

### ⚡ Tapa 1: Connect-nappi (HELPOIN & NOPEIN!)

1. **Kirjaudu Supabaseen**: [supabase.com](https://supabase.com)

2. **Valitse projektisi**: Klikkaa `kirjoituskonekauppa` -projektia

3. **Klikkaa Connect-nappia**:
   - Oikeassa yläkulmassa on vihreä **Connect** -nappi
   - Klikkaa sitä

4. **Valitse App Frameworks**:
   - Näet eri vaihtoehtoja (ORMs, App Frameworks, jne.)
   - Klikkaa **App Frameworks**

5. **Kopioi Connection String**:
   - Näet connection stringin valmiina
   - Kopioi se sellaisenaan
   - Vaihda `[YOUR-PASSWORD]` omaan salasanaasi

---

### 🔧 Tapa 2: Project Settings → Configuration

1. **Kirjaudu Supabaseen**: [supabase.com](https://supabase.com)

2. **Valitse projektisi**: Klikkaa `kirjoituskonekauppa` -projektia

3. **Avaa Project Settings**:
   - Vasemmassa sivupalkissa, alhaalla
   - Klikkaa **rataskuvaketta (⚙️)** tai tekstiä "Project Settings"

4. **Mene Configuration-välilehdelle**:
   - Vasemmalla valikossa klikkaa **Configuration**
   - (EI "Database" - se on eri osio!)

5. **Etsi Database-osio**:
   - Vieritä alas kunnes näet **"Database"** -otsikon
   - Klikkaa **Connection String** tai **View connection string**

6. **Kopioi URI**:
   ```
   postgresql://postgres.xxxxx:[YOUR-PASSWORD]@aws-0-eu-north-1.pooler.supabase.com:5432/postgres
   ```

7. **Vaihda salasana**:
   - Korvaa `[YOUR-PASSWORD]` omalla salasanallasi
   - Salasana on sama, jonka loit projektin luomisen yhteydessä

---

### 🗄️ Tapa 3: Database Dashboard (jos muut eivät toimi)

1. Klikkaa vasemmalla **Database** (tietokanta-ikoni)
2. Ylhäällä näet **Connect** -napin
3. Valitse **App Frameworks** tai **Connection String**
4. Kopioi connection string

---

### 🛠️ Tapa 4: Rakenna connection string itse

Jos mikään ei toimi, voit rakentaa connection stringin itse:

1. **Hae Projekti ID**:
   - Mene **Project Settings** → **General**
   - Kopioi **Reference ID** (esim. `abcdefghijk`)

2. **Hae Host**:
   - Alue: **Europe North (Stockholm)** = `aws-0-eu-north-1.pooler.supabase.com`
   - Tai katso URL:sta: `https://PROJEKTI-ID.supabase.co`

3. **Rakenna connection string**:
   ```
   postgresql://postgres.PROJEKTI-ID:SALASANASI@aws-0-eu-north-1.pooler.supabase.com:5432/postgres
   ```

**Esimerkki:**
```
postgresql://postgres.abcdefghijk:MyStr0ng!Pass@aws-0-eu-north-1.pooler.supabase.com:5432/postgres
```

---

## ❓ Mitä jos unohdin salasanan?

### Resetoi salasana:

1. Mene **Project Settings** → **Database**
2. Vieritä kohtaan **"Database password"**
3. Klikkaa **Reset database password**
4. Luo uusi vahva salasana
5. **TALLENNA SALASANA** (esim. salasananhallintaohjelmaan)
6. Päivitä connection string uudella salasanalla

---

## 🔒 Connection String -muoto

Oikea muoto näyttää tältä:

```
postgresql://postgres.PROJECT_REF:PASSWORD@HOST:5432/postgres
```

**Esimerkki:**
```
postgresql://postgres.abcdefghijk:MyStr0ng!Pass@aws-0-eu-north-1.pooler.supabase.com:5432/postgres
```

**Komponentit:**
- `postgres.abcdefghijk` = Käyttäjänimi
- `MyStr0ng!Pass` = SINUN SALASANASI
- `aws-0-eu-north-1.pooler.supabase.com` = Host
- `5432` = Portti
- `postgres` = Tietokannan nimi

---

## ✅ Testaa yhteyttä

Kun olet kopioinut connection stringin, testaa se:

```bash
# Asenna psql (jos ei ole)
brew install postgresql

# Testaa yhteyttä
psql "postgresql://postgres.xxx:PASSWORD@HOST:5432/postgres"

# Jos yhteys toimii, näet:
# postgres=>
```

Tai testaa ohjelmallisesti:

```bash
node -e "require('pg').Client({connectionString: process.env.DATABASE_URL}).connect().then(() => console.log('✅ Yhteys OK!')).catch(e => console.log('❌ Virhe:', e.message))"
```

---

## 🆘 Yleisimmät virheet

### Virhe: "password authentication failed"
→ Salasana on väärin. Resetoi se Supabasessa.

### Virhe: "connection refused"
→ Tarkista että host-osoite on oikein kopioitu.

### Virhe: "SSL connection required"
→ Lisää loppuun: `?sslmode=require`
```
postgresql://postgres.xxx:PASSWORD@HOST:5432/postgres?sslmode=require
```

### Connection string näyttää erilaiselta
→ Käytä **URI**-versiota, ei "Session pooler" tai "Transaction pooler"

---

## 📱 Missä eri vaihtoehdot sijaitsevat?

Supabase tarjoaa useita connection string -tyyppejä:

| Tyyppi | Käyttö | Suositus |
|--------|--------|----------|
| **URI** | Suora yhteys | ✅ Käytä tätä! |
| Session pooler | Connection pooling | ⚠️ Voi toimia |
| Transaction pooler | Transaktiot | ❌ Älä käytä |
| Direct connection | Suora IP | ⚠️ Vain kehitys |

**Valitse aina URI!**

---

## 🎯 Nopea yhteenveto

1. **Kirjaudu** → supabase.com
2. **Valitse projekti** → kirjoituskonekauppa
3. **Project Settings** → ⚙️ (vasemmalla alhaalla)
4. **Database** → Connection string
5. **URI** → Kopioi
6. **Vaihda salasana** → [YOUR-PASSWORD]
7. **Valmis!** 🎉

---

## 📞 Tarvitsetko lisäapua?

- [Supabase Docs - Database](https://supabase.com/docs/guides/database)
- [Supabase Connection Strings](https://supabase.com/docs/guides/database/connecting-to-postgres)

Jos ongelma jatkuu, voit myös:
1. Luo uusi projekti Supabasessa
2. Tai käytä [Neon.tech](https://neon.tech) (toinen ilmainen PostgreSQL-palvelu)
3. Tai käytä Vercel Postgresiä

---

**Connection string löytyi?** → Palaa takaisin [QUICK-DEPLOY.md](./QUICK-DEPLOY.md)! 🚀
