# Kirjoituskonekauppa, Pärnänen & Pojat

Moderni verkkosivu kirjoituskoneiden huolto-, myynti- ja entisöintipalvelulle. Rakennettu Next.js:llä, Payload CMS:llä ja PostgreSQL:llä.

## 🎯 Projektin ominaisuudet

- ✨ **Moderni Next.js 16** - Server-side rendering ja optimoidut React-komponentit
- 🗄️ **Payload CMS 3** - Tehokas headless CMS sisällönhallintaan
- 🐘 **PostgreSQL** - Luotettava ja skaalautuva tietokanta
- 🎨 **Tailwind CSS 4** - Modernit ja responsiiviset tyylit
- 📱 **Täysin responsiivinen** - Toimii kaikilla laitteilla
- 🔐 **Turvallinen** - Sisäänrakennettu autentikointi ja pääsynhallinta

## 🚀 Pika-aloitus

### Edellytykset

- Node.js 20+ 
- pnpm 9+
- Docker (PostgreSQL:lle)

### Asennus

1. **Kloonaa repositorio ja asenna riippuvuudet:**
```bash
cd payload-cms
pnpm install
```

2. **Käynnistä PostgreSQL Docker-kontissa:**
```bash
docker compose up -d postgres
```

3. **Luo esimerkkisisältö:**
```bash
pnpm exec tsx src/seed-main.ts
```

4. **Käynnistä kehityspalvelin:**
```bash
pnpm dev
```

Sivusto on nyt käytettävissä osoitteessa: **http://localhost:3000**

## 📋 Admin-paneeli

Admin-paneeli löytyy osoitteesta: **http://localhost:3000/admin**

### Kirjautumistiedot (demo)

- **Sähköposti:** admin@kirjoituskonekauppa.fi
- **Salasana:** demo1234

## 🗂️ Projektin rakenne

```
payload-cms/
├── src/
│   ├── app/
│   │   ├── (frontend)/          # Frontend-sivut
│   │   │   ├── page.tsx         # Etusivu
│   │   │   ├── [slug]/          # Dynaamiset palvelusivut
│   │   │   └── styles.css       # Tailwind CSS
│   │   └── (payload)/           # Payload CMS Admin
│   ├── collections/             # Payload kokoelmat
│   │   ├── Pages.ts             # Sivut/Palvelut
│   │   ├── Users.ts             # Käyttäjät
│   │   ├── Media.ts             # Media-tiedostot
│   │   ├── Products.ts          # Tuotteet
│   │   └── News.ts              # Uutiset
│   ├── globals/                 # Globaalit asetukset
│   │   └── SiteSettings.ts      # Sivuston asetukset
│   └── payload.config.ts        # Payload konfiguraatio
├── docker-compose.yml           # Docker-palvelut
├── .env                         # Ympäristömuuttujat
└── package.json                 # Riippuvuudet ja skriptit
```

## 📝 Sisällönhallinta

### Palvelusivut

Luo uusia palvelusivuja Admin-paneelista:

1. Siirry **Pages** → **Create New**
2. Täytä seuraavat kentät:
   - **Sivun otsikko**: Palvelun nimi (esim. "Huolto")
   - **URL-polku**: Sivun slug (esim. "huolto")
   - **Ikoni**: Emoji (esim. 🛠)
   - **Lyhyt kuvaus**: Palvelun tiivistelmä
   - **Sisältö**: Täydellinen kuvaus
   - **Näytä etusivun palvelukorteissa**: ✓ (näyttää etusivulla)

### Sivuston asetukset

Muokkaa globaaleja asetuksia:
- Siirry **Globals** → **Sivuston asetukset**
- Päivitä yhteystiedot, logo, SEO-asetukset jne.

## 🎨 Suunnitteluperiaatteet

- **Väripaletti**: Amber/Orange-sävyt perinteisen tunnelman luomiseksi
- **Typografia**: Selkeät, helppolukuiset fontit
- **Layout**: Responsiivinen grid-layout
- **Komponentit**: Modernit kortit, hero-osiot ja call-to-action -painikkeet

## 🛠️ Kehitys

### Hyödylliset komennot

```bash
# Kehityspalvelin
pnpm dev

# Tuotantoversion rakennus
pnpm build

# Tuotantopalvelimen käynnistys
pnpm start

# Tyyppien generointi
pnpm generate:types

# Linting
pnpm lint

# Testit
pnpm test
```

### Ympäristömuuttujat

```env
# PostgreSQL tietokanta
DATABASE_URL=postgresql://postgres:postgres@localhost:5433/payload

# Payload salaisuus (vaihda tuotannossa!)
PAYLOAD_SECRET=your-secret-key-here
```

## 📊 Tietokanta

Projekti käyttää PostgreSQL:ää Docker-kontissa:

- **Host**: localhost
- **Port**: 5433 (host) → 5432 (container)
- **Database**: payload
- **User**: postgres
- **Password**: postgres

### Tietokannan hallinta

```bash
# Käynnistä PostgreSQL
docker compose up -d postgres

# Pysäytä PostgreSQL
docker compose down postgres

# Tyhjennä tietokanta
docker compose down -v postgres
```

## 🌐 Tuotantoon vienti

1. **Päivitä ympäristömuuttujat:**
   - Vaihda `PAYLOAD_SECRET` turvalliseksi
   - Päivitä `DATABASE_URL` tuotantotietokantaan

2. **Rakenna projekti:**
```bash
pnpm build
```

3. **Käynnistä tuotantopalvelin:**
```bash
pnpm start
```

### Suositellut hosting-palvelut

- **Vercel** - Next.js-sovelluksille
- **Railway** - Full-stack sovelluksille PostgreSQL:llä
- **Heroku** - PostgreSQL-tuki sisäänrakennettuna
- **Digital Ocean** - VPS-palvelin täyteen kontrolliin

## 📖 Lisätietoja

- [Next.js Dokumentaatio](https://nextjs.org/docs)
- [Payload CMS Dokumentaatio](https://payloadcms.com/docs)
- [Tailwind CSS Dokumentaatio](https://tailwindcss.com/docs)

## 🤝 Tuki

Kysymyksiä tai ongelmia? Ota yhteyttä:

- **Email**: info@kirjoituskonekauppa.fi
- **Puhelin**: 09 323431267
- **Osoite**: Jääkärinkatu 9, 00150 Helsinki

## 📄 Lisenssi

MIT License - Vapaasti käytettävissä ja muokattavissa.

---

**Kirjoituskonekauppa, Pärnänen & Pojat** - Perinteitä ja laatua jo vuodesta 1957 🖋️
