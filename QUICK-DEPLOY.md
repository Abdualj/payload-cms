# ⚡ Pika-asennus: Kirjoituskonekauppa (5 minuutissa)

Nopein tapa saada Kirjoituskonekauppa tuotantoon.

---

## 🚀 Vercel + Supabase (Ilmainen, helpoin)

### 1️⃣ Luo tietokanta (2 min)

1. Mene → [supabase.com](https://supabase.com) → **New Project**
2. Projektin nimi: `kirjoituskonekauppa`
3. Tietokannan salasana: **Luo vahva salasana ja tallenna se!** ⚠️
4. Alue: **Europe North (Stockholm)**
5. Klikkaa **Create Project** → odota 1-2 min ☕

**Hae Connection String:**

**Tapa 1: Connect-nappi (NOPEIN):**
1. Projektin päänäkymässä klikkaa vihreää **Connect** -nappia (oikeassa yläkulmassa)
2. Valitse **App Frameworks**
3. Näet connection stringin - kopioi se!
4. Vaihda `[YOUR-PASSWORD]` omaan salasanaasi

**Tapa 2: Project Settings:**
1. Klikkaa vasemmalla alhaalla **⚙️ Project Settings**
2. Vasemmalta valikosta **Configuration**
3. Etsi **Database** -osio ja klikkaa **Connection String**
4. Kopioi **URI**-muotoinen string
5. Vaihda `[YOUR-PASSWORD]` omaan salasanaasi

**Tapa 3: SQL Editor (jos muut eivät toimi):**
1. Klikkaa vasemmalla **SQL Editor**
2. Aja komento:
   ```sql
   SELECT current_database();
   ```
3. Rakenna connection string käsin:
   ```
   postgresql://postgres.PROJEKTI_ID:SALASANASI@aws-0-eu-north-1.pooler.supabase.com:5432/postgres
   ```
   - Projekti ID löytyy URL:sta tai Project Settings → General

**Connection string näyttää tältä:**
```
postgresql://postgres.xxx:[YOUR-PASSWORD]@aws-0-eu-north-1.pooler.supabase.com:5432/postgres
```

> 💡 **Vieläkään ei löydy?** Katso yksityiskohtainen ohje: [SUPABASE-OHJE.md](./SUPABASE-OHJE.md)

### 2️⃣ Deploy Verceliin (3 min)

1. Pushaa projekti GitHubiin:
```bash
git add .
git commit -m "Ready for deployment"
git push
```

2. Mene → [vercel.com](https://vercel.com) → Kirjaudu GitHubilla
3. Klikkaa **Add New** → **Project** → Valitse repositorysi
4. Klikkaa **Environment Variables** → Lisää:

```env
DATABASE_URL=postgresql://postgres:[PASSWORD]@[HOST]:5432/postgres
PAYLOAD_SECRET=generate-this-below
NEXT_PUBLIC_SERVER_URL=https://your-app.vercel.app
```

**Generoi PAYLOAD_SECRET:**
```bash
openssl rand -base64 32
```
Kopioi tulos → liitä `PAYLOAD_SECRET`-kohtaan

5. Klikkaa **Deploy** → odota 2-3 min ☕

### 3️⃣ Lisää sisältö (1 min)

1. Mene → `https://your-app.vercel.app/admin`
2. Luo admin-käyttäjä:
   - Email: `admin@kirjoituskonekauppa.fi`
   - Salasana: **vahva salasana**
3. Lisää palvelut:
   - **Pages** → **Create New**
   - Täytä: Title, Slug, Icon, Excerpt, Content
   - Merkitse **Featured** ✅
   - Tallenna

**TAI** aja seed-data:
```bash
# Asenna Vercel CLI
npm i -g vercel

# Kirjaudu
vercel login

# Linkkaa projekti
vercel link

# Aja seed
vercel env pull .env.production
pnpm run seed
```

### ✅ Valmis!

- Frontend: `https://your-app.vercel.app`
- Admin: `https://your-app.vercel.app/admin`

---

## 🆘 Ongelmat?

### "Build failed"
→ Testaa ensin lokaalisti:
```bash
pnpm install
pnpm run build
```

### "Database connection failed"
→ Tarkista `DATABASE_URL`:
- Onko salasana oikein?
- Onko host-osoite oikein?
- Lisää `?sslmode=require` loppuun

### "404 Not Found"
→ Lisää sisältöä admin-paneelista tai aja seed-data

---

## 🔄 Päivitys tuotannossa

```bash
git add .
git commit -m "Update content"
git push
```

Vercel deployaa automaattisesti!

---

**Katso täydellinen ohje:** [DEPLOYMENT.md](./DEPLOYMENT.md)
