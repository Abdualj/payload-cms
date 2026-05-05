# Payload CMS - Esittelydokumentti

## 📌 Projektin tiedot

- **Sisällönhallintajärjestelmä**: Payload CMS
- **Asiakasyritys**: Kirjoituskonekauppa Pärnänen & Pojat
- **Toteutus**: Full-stack web-sovellus (Next.js + Payload CMS)

---

## 1. Payload CMS - Yleisesittely

### Mikä on Payload CMS?

Payload CMS on **moderni, headless-sisällönhallintajärjestelmä**, joka on rakennettu TypeScriptillä ja Node.js:llä. Se on julkaistu vuonna 2021 ja kasvattanut nopeasti suosiotaan kehittäjäyhteisössä.

### Keskeiset ominaisuudet

- ✅ **Headless CMS** - Backend ja frontend täysin erillisiä
- ✅ **TypeScript-natiivi** - Täysi tyyppituki kehityksessä
- ✅ **API-first** - REST ja GraphQL API:t automaattisesti
- ✅ **Koodipohjainen** - Kaikki konfiguraatio koodina
- ✅ **Self-hosted** - Täysi kontrolli dataan ja infrastruktuuriin
- ✅ **Next.js-integraatio** - Saumaton yhteistyö Reactin kanssa
- ✅ **Avoimen lähdekoodin** - MIT-lisenssi

### Payload CMS:n filosofia

> "Give developers the tools and freedom to build anything, while giving content editors a great experience."

Payload pyrkii antamaan kehittäjille **täyden vapauden** ja **kontrollin**, samalla kun sisällöntuottajat saavat **helppokäyttöisen käyttöliittymän**.

---

## 2. Termit ja käsitteet

### Headless CMS

**Headless CMS** = Sisällönhallintajärjestelmä ilman kiinteää "päätä" (frontendia)

- Backend ja frontend ovat **täysin erillisiä**
- Sisältö toimitetaan **API:n kautta** (REST tai GraphQL)
- Frontend voi olla **mitä tahansa**: Next.js, Vue, React Native, mobiiliappi...
- **Joustavuus**: Yksi backend, monta frontendia

**Perinteinen CMS** (esim. WordPress):

```
┌─────────────────────┐
│   Frontend (PHP)    │
│         +           │
│   Backend (PHP)     │
└─────────────────────┘
```

**Headless CMS** (Payload):

```
┌──────────────┐    API    ┌──────────────┐
│   Backend    │ ◄────────► │  Frontend 1  │
│  (Payload)   │            │  (Next.js)   │
└──────────────┘            └──────────────┘
      ▲
      │ API
      ▼
┌──────────────┐
│  Frontend 2  │
│ (Mobile App) │
└──────────────┘
```

### Collection

**Collection** = Tietokokoelma, joka sisältää tietyntyyppistä dataa

Esimerkiksi:

- `products` - Tuotteet
- `pages` - Sivut
- `users` - Käyttäjät

### Global

**Global** = Yksittäinen globaali data-objekti (ei kokoelma)

Esimerkiksi:

- `site-settings` - Sivuston asetukset
- `navigation` - Navigaatio
- `footer` - Footer-tiedot

### Field Types

Payload tukee monia kenttätyyppejä:

- `text` - Tekstikenttä
- `richText` - Rich text -editori
- `number` - Numeroarvo
- `email` - Sähköpostiosoite
- `select` - Pudotusvalikko
- `checkbox` - Valintaruutu
- `upload` - Tiedoston lataus
- `relationship` - Suhde toiseen kokoelmaan
- `array` - Taulukko
- `group` - Kenttäryhmä

### Access Control

Payload tarjoaa hienojakoisen **käyttöoikeushallinta**:

```typescript
access: {
  read: () => true,              // Kaikki voivat lukea
  create: ({ req }) => req.user, // Vain kirjautuneet voivat luoda
  update: ({ req }) => req.user, // Vain kirjautuneet voivat päivittää
  delete: ({ req }) => req.user?.role === 'admin', // Vain adminit voivat poistaa
}
```

---

## 3. Tekniset vaatimukset

### Järjestelmävaatimukset

| Komponentti    | Vaatimus                        |
| -------------- | ------------------------------- |
| **Node.js**    | >= 18.20.2 tai >= 20.9.0        |
| **Tietokanta** | MongoDB >= 5.0 (tai PostgreSQL) |
| **RAM**        | Vähintään 2 GB (suositus 4 GB+) |
| **Disk**       | 500 MB + datalle tilaa          |

### Teknologia-stack (tämä projekti)

```
┌─────────────────────────────────────┐
│         Frontend (Next.js)          │
│  - React 19                         │
│  - Tailwind CSS                     │
│  - TypeScript                       │
└─────────────────────────────────────┘
              ▲
              │ API
              ▼
┌─────────────────────────────────────┐
│      Backend (Payload CMS)          │
│  - Payload 3.84.1                   │
│  - Node.js / TypeScript             │
│  - REST + GraphQL API               │
└─────────────────────────────────────┘
              ▲
              │
              ▼
┌─────────────────────────────────────┐
│       Database (MongoDB)            │
│  - NoSQL                            │
│  - Flexible schema                  │
└─────────────────────────────────────┘
```

### Riippuvuudet

**Core:**

- `payload` - CMS-ydin
- `@payloadcms/db-mongodb` - MongoDB-adapteri
- `@payloadcms/richtext-lexical` - Rich text -editori
- `next` - React framework
- `react` & `react-dom` - UI-kirjasto

**Dev:**

- `typescript` - Tyyppitarkistus
- `tailwindcss` - CSS-framework
- `eslint` - Koodin laadunvarmistus

---

## 4. Käyttöönotto

### Kevyt vs. Raskas

**Payload CMS on "keskitasoa"** käyttöönoton osalta:

| Aspekti           | Kevyt                  | Raskas                                    |
| ----------------- | ---------------------- | ----------------------------------------- |
| **Asennus**       | ⚠️ Keskitaso           | Node.js + MongoDB vaadittava              |
| **Konfiguraatio** | ⚠️ Keskitaso           | Koodipohjainen (TypeScript)               |
| **Hosting**       | ⚠️ Vaatii Node.js-tuen | Ei toimi perus PHP-hostingissa            |
| **Oppimiskäyrä**  | ⚠️ Keskitaso           | JavaScript/TypeScript-osaaminen tarvitaan |

**Verrattuna:**

- **WordPress**: Helpompi asentaa (PHP + MySQL)
- **Strapi**: Samanlainen (Node.js-pohjainen)
- **Ghost**: Keskitaso (Node.js, mutta yksinkertaisempi)

### Asennuksen vaiheet

1. **Luo projekti:**

```bash
npx create-payload-app@latest my-project
```

2. **Valitse template:** Blank / Blog / E-commerce

3. **Valitse tietokanta:** MongoDB / PostgreSQL

4. **Asenna riippuvuudet:**

```bash
cd my-project
pnpm install
```

5. **Käynnistä:**

```bash
pnpm dev
```

6. **Luo admin-käyttäjä** selaimessa: `http://localhost:3000/admin`

### Deployment-vaihtoehdot

1. **Payload Cloud** (virallinen) - Helpoin
2. **Vercel/Netlify** - Next.js-hosting + erillinen MongoDB
3. **DigitalOcean/AWS** - VPS tai container
4. **Docker** - Containerisoi sovellus

---

## 5. Alustan käytettävyys ja ylläpito

### Käytettävyys (Content Editors)

**Admin-paneeli:** ⭐⭐⭐⭐⭐ (5/5)

✅ **Edut:**

- Moderni, intuitiivinen React-pohjainen UI
- Responsiivinen (toimii mobiililla)
- Nopea ja sujuva
- Live-validointi lomakkeissa
- Drag-and-drop kuvien lataamiseen
- Rich text -editori (Lexical)
- Automaattinen tallennus (draft-tila)

❌ **Haasteet:**

- Vaatii pienen opettelun (ei niin tuttu kuin WordPress)
- Käyttöliittymä englanniksi (ei suomen kielen tukea)

### Ylläpito (Developers)

**Kehittäjäkokemus:** ⭐⭐⭐⭐⭐ (5/5)

✅ **Edut:**

- TypeScript-tuki (vähemmän bugeja)
- Koodipohjainen konfiguraatio (versiohallinnan kanssa helppoa)
- Hyvä dokumentaatio
- Hooks ja plugins (laajennettavuus)
- Testaus helpompaa (API-pohjainen)

❌ **Haasteet:**

- Pienempi yhteisö kuin WordPress
- Vähemmän valmiita plugineja
- Vaatii JavaScript-osaamista

### Päivitykset

- **npm/pnpm:** `pnpm update`
- **Semantic versioning:** Major.Minor.Patch
- **Breaking changes:** Harvemmin kuin WordPress
- **Security updates:** Nopeat (aktiivinen kehitys)

---

## 6. Nopeus ja päivitettävyys

### Suorituskyky

**API Response Time:**

- REST API: ~50-150ms (riippuen kyselystä)
- GraphQL API: ~100-300ms

**Page Load:**

- SSR (Server-Side Rendering): ~500ms - 1s
- SSG (Static Site Generation): ~100-300ms
- ISR (Incremental Static Regeneration): ~100-300ms

**Verrattuna WordPressiin:**

- **Payload:** Nopeampi (API-pohjainen, ei PHP-prosessointia)
- **WordPress:** Hitaampi (PHP + MySQL, pluginit hidastavat)

### Optimointi

✅ **Payload tarjoaa:**

- **Image optimization** (Sharp)
- **API caching** (Redis/Memcached)
- **CDN-tuki** (staattiset tiedostot)
- **Lazy loading** (kuvat)

### Sisällön päivitys

**Reaaliaikaisuus:**

- Admin-paneelissa: **Välitön**
- Frontendissä (SSR): **Välitön** (seuraava lataus)
- Frontendissä (SSG): **Regeneroi tarvittaessa** (ISR)

**Draft-tila:**

- Tallenna keskeneräinen sisältö
- Esikatsele ennen julkaisua
- Versiointi (tulevissa versioissa)

---

## 7. Vertailu WordPressiin

### Arkkitehtuuri

| Ominaisuus     | Payload CMS                       | WordPress         |
| -------------- | --------------------------------- | ----------------- |
| **Tyyppi**     | Headless CMS                      | Monolittiinen CMS |
| **Kieli**      | TypeScript/JavaScript             | PHP               |
| **Tietokanta** | MongoDB (NoSQL)                   | MySQL (SQL)       |
| **API**        | REST + GraphQL (sisäänrakennettu) | REST (lisäosa)    |
| **Frontend**   | Vapaa valinta (Next.js, Vue...)   | PHP-teemat        |

### Kehittäjäkokemus

| Aspekti                | Payload CMS              | WordPress                 |
| ---------------------- | ------------------------ | ------------------------- |
| **Moderni stack**      | ✅ TypeScript, React     | ❌ PHP (vanhentunut)      |
| **Tyyppituki**         | ✅ TypeScript            | ❌ Ei natiivisti          |
| **Testattavuus**       | ✅ API-pohjainen, helppo | ⚠️ Haastavampi            |
| **Versiointi**         | ✅ Kaikki koodina (Git)  | ⚠️ Osittain tietokannassa |
| **Plugin-ekosysteemi** | ⚠️ Pienempi (npm)        | ✅ Valtava (WP Plugins)   |

### Käyttäjäkokemus (Editors)

| Aspekti               | Payload CMS              | WordPress           |
| --------------------- | ------------------------ | ------------------- |
| **Admin UI**          | ✅ Moderni, nopea, React | ⚠️ Perinteinen, PHP |
| **Helppokäyttöisyys** | ⚠️ Vaatii opettelun      | ✅ Tuttu monille    |
| **Mobiilituki**       | ✅ Responsiivinen        | ⚠️ Rajoitetumpi     |
| **Kielivaihtoehdot**  | ⚠️ Vähemmän kieliä       | ✅ Laaja tuki       |

### Suorituskyky

| Aspekti           | Payload CMS             | WordPress                   |
| ----------------- | ----------------------- | --------------------------- |
| **Nopeus**        | ✅ Nopea (Node.js, API) | ⚠️ Hitaampi (PHP, pluginit) |
| **Skaalautuvuus** | ✅ Helppo (MongoDB)     | ⚠️ Haastavampi              |
| **Caching**       | ✅ Moderni (Redis, CDN) | ⚠️ Pluginit tarvitaan       |

### Turvallisuus

| Aspekti                 | Payload CMS           | WordPress                    |
| ----------------------- | --------------------- | ---------------------------- |
| **Hyökkäyskohteet**     | ✅ Vähemmän (uudempi) | ❌ Paljon (suosituin)        |
| **Päivitykset**         | ✅ Nopeat             | ⚠️ Usein tarvittavia         |
| **Plugin-turvallisuus** | ✅ npm-ekosysteemi    | ❌ WP-pluginit (vaihtelevaa) |

### Kustannukset

| Aspekti      | Payload CMS                   | WordPress                    |
| ------------ | ----------------------------- | ---------------------------- |
| **Lisenssi** | ✅ Ilmainen (MIT)             | ✅ Ilmainen (GPL)            |
| **Hosting**  | ⚠️ Node.js-hosting kalliimpaa | ✅ Halpa PHP-hosting         |
| **Kehitys**  | ⚠️ Vaatii osaavaa kehittäjää  | ✅ Helpompi löytää tekijöitä |
| **Ylläpito** | ✅ Vähemmän päivityksiä       | ⚠️ Jatkuvat päivitykset      |

---

## 8. Käyttötapaukset

### Payload CMS sopii hyvin:

✅ **Headless-projekteihin** (mobiiliappi + web)
✅ **API-pohjaisiin sovelluksiin**
✅ **Moderneihin web-sovelluksiin** (React, Vue, Next.js)
✅ **Kehittäjävetoisiin projekteihin**
✅ **Kun tarvitaan täysi kontrolli**

### WordPress sopii paremmin:

✅ **Blogeihin ja sisältösivustoihin**
✅ **Kun ei ole omaa kehittäjää**
✅ **Kun tarvitaan laaja plugin-ekosysteemi**
✅ **Kun budjetti on pieni**
✅ **Kun sisällöntuottajat tottuneet WordPressiin**

---

## 9. Omat kommentit

### Plussat (+)

1. **Moderni kehityskokemus**: TypeScript ja React tekevät kehityksestä nautinnollista
2. **Täysi kontrolli**: Kaikki koodina, ei yllätyksiä
3. **API-first**: Helppo integroida mihin tahansa
4. **Suorituskyky**: Nopea ja tehokas
5. **Dokumentaatio**: Hyvin kirjoitettu ja ajantasainen
6. **Admin UI**: Paras CMS-käyttöliittymä mitä olen käyttänyt

### Miinukset (-)

1. **Oppimiskäyrä**: Vaatii JavaScript/TypeScript-osaamista
2. **Pienempi yhteisö**: Vähemmän valmiita ratkaisuja
3. **Hosting**: Kalliimpaa kuin PHP
4. **Kielituki**: Ei suomen kielen tukea admin-paneelissa
5. **Nuori projekti**: Ei yhtä kypsä kuin WordPress

### Yhteenveto

**Payload CMS on erinomainen valinta moderneille web-projekteille**, joissa:

- Halutaan **headless-arkkitehtuuri**
- On **osaava kehittäjä** saatavilla
- Tarvitaan **API-pohjaista sisällönhallintaa**
- Halutaan **täysi kontrolli ja joustavuus**

**Suosittelisin Payload CMS:ää**, jos projekti on teknisesti kunnianhimoinen ja kehittäjäresurssit ovat kunnossa. WordPressiä suosittelisin yksinkertaisempiin sisältösivustoihin ja blogeihin, joissa budjetti on tiukka.

---

## 10. Demonstraatio

### Kirjoituskonekauppa Pärnänen & Pojat

**URL:** http://localhost:3000

**Admin:** http://localhost:3000/admin

**Ominaisuudet:**

- ✅ Tuotehallinta (kirjoituskoneet)
- ✅ Sivujen hallinta
- ✅ Uutiset/blogi
- ✅ Sivuston asetukset
- ✅ Mediahallinta
- ✅ Moderni, responsiivinen UI
- ✅ Suomenkielinen sisältö

**Tekninen toteutus:**

- Frontend: Next.js 16 + React 19
- Backend: Payload CMS 3.84
- Tietokanta: MongoDB
- Tyylit: Tailwind CSS
- Kieli: TypeScript

---

**Lisätiedot:**

- Payload CMS: https://payloadcms.com
- Dokumentaatio: https://payloadcms.com/docs
- GitHub: https://github.com/payloadcms/payload
