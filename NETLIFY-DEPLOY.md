# ⚡ Netlify Deployment - Kirjoituskonekauppa

Nopea ohje projektin deployaamiseen Netlifyyn.

---

## 🚀 Netlify + Supabase (Ilmainen, helppo)

### 1️⃣ Luo tietokanta Supabasessa (2 min)

**Jos sinulla on jo Supabase-tietokanta:**
- Hyppää suoraan kohtaan 2️⃣

**Jos ei ole:**

1. Mene → [supabase.com](https://supabase.com) → **New Project**
2. Projektin nimi: `kirjoituskonekauppa`
3. Tietokannan salasana: **Luo vahva salasana ja tallenna se!** ⚠️
4. Alue: **Europe North (Stockholm)**
5. Klikkaa **Create Project** → odota 1-2 min ☕

**Hae Connection String:**
1. Klikkaa vihreää **Connect** -nappia (oikeassa yläkulmassa)
2. Valitse **App Frameworks**
3. Kopioi connection string
4. Vaihda `[YOUR-PASSWORD]` omaan salasanaasi

**Sinun connection stringisi:**
```
postgresql://postgres:SALASANASI@db.jborjxvtfnfidhkctoyp.supabase.co:5432/postgres
```

> 💡 **Tarvitsetko apua?** Katso: [SUPABASE-OHJE.md](./SUPABASE-OHJE.md)

---

### 2️⃣ Deploy Netlifyyn (3 min)

#### Vaihe 1: Pushaa projekti GitHubiin

```bash
git add .
git commit -m "Ready for Netlify deployment"
git push
```

#### Vaihe 2: Luo Netlify-sivusto

1. Mene → [netlify.com](https://netlify.com)
2. Klikkaa **Sign up** → Kirjaudu GitHubilla
3. Klikkaa **Add new site** → **Import an existing project**
4. Valitse **Deploy with GitHub**
5. Valitse repositorysi: `payload-cms`

#### Vaihe 3: Määritä Build-asetukset

**Build command:**
```
pnpm run build
```

**Publish directory:**
```
.next
```

**Klikkaa "Show advanced" → "New variable"** ja lisää ympäristömuuttujat:

```
DATABASE_URL=postgresql://postgres:SALASANASI@db.jborjxvtfnfidhkctoyp.supabase.co:5432/postgres
```

```
PAYLOAD_SECRET=generoi-tämä-alla
```

```
NEXT_PUBLIC_SERVER_URL=https://SIVUSTOSI-NIMI.netlify.app
```

**Generoi PAYLOAD_SECRET:**
```bash
openssl rand -base64 32
```
Kopioi tulos ja liitä `PAYLOAD_SECRET`-kohtaan.

> ⚠️ **Huom:** Sivuston nimi määräytyy automaattisesti. Voit muuttaa sen myöhemmin.

#### Vaihe 4: Deploy!

1. Klikkaa **Deploy site**
2. Odota 3-5 minuuttia ☕

---

### 3️⃣ Päivitä NEXT_PUBLIC_SERVER_URL (1 min)

Kun deployment on valmis:

1. Kopioi sivustosi URL (esim. `https://amazing-curie-123456.netlify.app`)
2. Mene **Site settings** → **Environment variables**
3. Muokkaa `NEXT_PUBLIC_SERVER_URL`:
   - Klikkaa muuttujan nimeä
   - Klikkaa **Options** → **Edit**
   - Päivitä oikea URL
   - Klikkaa **Save**
4. **Trigger deploy**: Site overview → **Deploys** → **Trigger deploy** → **Deploy site**

---

### 4️⃣ Lisää sisältö (2 min)

Kun uusi deployment on valmis:

1. Mene → `https://SIVUSTOSI.netlify.app/admin`
2. Luo admin-käyttäjä:
   - Email: `admin@kirjoituskonekauppa.fi`
   - Salasana: **vahva salasana**
3. Lisää palvelut:
   - **Pages** → **Create New**
   - Täytä: Title, Slug, Icon, Excerpt, Content
   - Merkitse **Featured** ✅
   - Tallenna

**TAI** aja seed-data Netlify CLI:llä:

```bash
# Asenna Netlify CLI
npm install -g netlify-cli

# Kirjaudu
netlify login

# Linkkaa projekti
netlify link

# Aja seed paikallisesti (käyttää tuotannon tietokantaa)
pnpm run seed
```

---

### ✅ Valmis!

- **Frontend:** `https://SIVUSTOSI.netlify.app`
- **Admin:** `https://SIVUSTOSI.netlify.app/admin`

---

## 🎨 Custom Domain (valinnainen)

### Oman domainin lisääminen:

1. **Osta domain** (esim. kirjoituskonekauppa.fi)
2. **Netlify → Site settings → Domain management → Add custom domain**
3. Lisää: `kirjoituskonekauppa.fi`
4. **Päivitä DNS-asetukset** domain-palveluntarjoajallasi:
   - A Record: `75.2.60.5`
   - CNAME: `www` → `SIVUSTOSI.netlify.app`
5. **Odota DNS:n päivittymistä** (max 24h)
6. **Netlify aktivoi automaattisesti SSL-sertifikaatin** (Let's Encrypt)

### Päivitä NEXT_PUBLIC_SERVER_URL:

```bash
# Site settings → Environment variables
NEXT_PUBLIC_SERVER_URL=https://kirjoituskonekauppa.fi
```

Trigger deploy uudestaan.

---

## 🔧 Netlify.toml (valinnainen optimointi)

Luo projektin juureen `netlify.toml`:

```toml
[build]
  command = "pnpm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "22"
  NPM_FLAGS = "--legacy-peer-deps"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
  
[functions]
  node_bundler = "esbuild"
```

---

## 🆘 Ongelmat?

### "Build failed"
→ Tarkista build-lokit Netlifyssa:
- **Deploys** → Klikkaa epäonnistunutta deploymenttia
- Katso virheviestit

→ Testaa lokaalisti:
```bash
pnpm install
pnpm run build
```

### "Database connection failed"
→ Tarkista `DATABASE_URL`:
- Onko salasana oikein?
- Onko host-osoite oikein?
- Kokeile lisätä: `?sslmode=require`

### "404 Not Found" kaikilla sivuilla
→ Lisää sisältöä:
- Admin-paneelista TAI
- Aja `pnpm run seed`

### "Function timeout"
→ Netlify Functions timeout on 10s (ilmainen tier)
- Payload CMS saattaa tarvita enemmän aikaa
- Harkitse Netlify Pro -tilausta ($19/kk)
- Tai käytä Vercelia (30s timeout ilmaiseksi)

---

## 📊 Netlify vs Vercel

| Ominaisuus | Netlify | Vercel |
|------------|---------|--------|
| Build timeout | 15 min | 45 min (hobby) |
| Function timeout | 10s (free) / 26s (pro) | 10s (hobby) / 60s (pro) |
| Bandwidth | 100GB/kk | 100GB/kk |
| Build minutes | 300 min/kk | Unlimited |
| Next.js optimointi | Hyvä | Erinomainen (Next.js:n tekijät) |
| Hinta (ilmainen) | ✅ | ✅ |

**Suositus Payload CMS:lle:** Vercel (parempi Next.js-tuki)

---

## 🔄 Päivitys tuotannossa

```bash
git add .
git commit -m "Update content"
git push
```

Netlify deployaa automaattisesti!

---

## 📚 Lisätietoa

- [Netlify Docs - Next.js](https://docs.netlify.com/frameworks/next-js/overview/)
- [Netlify Functions](https://docs.netlify.com/functions/overview/)
- [Custom Domains](https://docs.netlify.com/domains-https/custom-domains/)

---

**Onnea deployaukseen!** 🚀

> 💡 **Vinkki:** Jos kohtaat ongelmia Netlifyssä, Vercel on usein parempi vaihtoehto Next.js + Payload CMS -projekteille. Katso: [QUICK-DEPLOY.md](./QUICK-DEPLOY.md)
