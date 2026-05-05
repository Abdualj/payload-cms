# Kirjoituskonekauppa Pärnänen & Pojat - Payload CMS

Tämä on sisällönhallintajärjestelmä pienyritykselle "Kirjoituskonekauppa Pärnänen & Pojat" toteutettuna Payload CMS:llä.

## 📖 Sisällysluettelo

- [Projektin kuvaus](#projektin-kuvaus)
- [🚀 Deployment - Käyttöönotto tuotannossa](#-deployment---käyttöönotto-tuotannossa)
- [Payload CMS - Yleisesittely](#payload-cms---yleisesittely)
- [Tekniset vaatimukset](#tekniset-vaatimukset)
- [Asennus ja käyttöönotto](#asennus-ja-käyttöönotto)
- [Ominaisuudet](#ominaisuudet)
- [Vertailu WordPressiin](#vertailu-wordpressiin)

## 🎯 Projektin kuvaus

Projektin tavoitteena on luoda modernin kirjoituskonekaupan verkkosivusto käyttäen Payload CMS:ää sisällönhallintajärjestelmänä. Sivusto sisältää:

- Tuotekatalogit (kirjoituskoneet)
- Uutis-/blogiominaisuus
- Staattiset sivut (Tietoa meistä, Yhteystiedot)
- Sivuston asetukset (yhteystiedot, sosiaalinen media)

---

## 🚀 Deployment - Käyttöönotto tuotannossa

### Pika-asennus (5 minuuttia)
👉 **[QUICK-DEPLOY.md](./QUICK-DEPLOY.md)** - Nopein tapa deployata Verceliin + Supabase (ilmainen)

### Täydellinen deployment-ohje
👉 **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Kattavat ohjeet eri alustoille:
- ☁️ Vercel (Suositeltu Next.js:lle)
- 🚂 Railway
- 🐳 Docker
- 🖥️ VPS (DigitalOcean, Linode, Hetzner)
- 🗄️ Tietokannan asennus (Supabase, Neon, Railway, jne.)

### Dokumentaatio suomeksi
- 📘 **[KAYTTOOHJE.md](./KAYTTOOHJE.md)** - Käyttöohje suomeksi
- 📋 **[PROJEKTI-VALMIS.md](./PROJEKTI-VALMIS.md)** - Projektin yhteenveto
- 🏛️ **[README-KIRJOITUSKONEKAUPPA.md](./README-KIRJOITUSKONEKAUPPA.md)** - Tekninen dokumentaatio

---
- Sivuston asetukset (yhteystiedot, sosiaalinen media)

## 🚀 Payload CMS - Yleisesittely

### Mikä on Payload CMS?

Payload CMS on **headless CMS** (sisällönhallintajärjestelmä), joka on rakennettu Node.js:llä ja TypeScriptillä. Se tarjoaa:

- **Headless-arkkitehtuuri**: Backend ja frontend ovat täysin erillisiä
- **API-first lähestymistapa**: Sisältö on saatavilla REST ja GraphQL API:en kautta
- **TypeScript-natiiviystävällisyys**: Täysi tyyppituki kehityksessä
- **Koodipohjainen konfiguraatio**: Kaikki asetukset koodina (ei UI:ssa klikkailtua)
- **Integraatio Next.js:n kanssa**: Saumaton integraatio moderniin React-frameworkiin

### Keskeiset termit

- **Headless CMS**: Sisällönhallintajärjestelmä, jossa backend (sisällön hallinta) on erillään frontendistä (näkymä)
- **Collection**: Tietokannan kokoelma (esim. Products, Pages, News)
- **Global**: Yksittäinen globaali asetus (esim. Site Settings)
- **Field**: Kentät määrittelevät, millaista dataa kokoelmissa voi olla
- **Hook**: Toiminnallisuutta, joka suoritetaan tietyn tapahtuman yhteydessä (esim. ennen tallennusta)

## 💻 Tekniset vaatimukset

### Järjestelmävaatimukset

- **Node.js**: >= 18.20.2 tai >= 20.9.0
- **MongoDB**: >= 5.0 (tietokanta)
- **pnpm/npm/yarn**: Paketinhallinta

### Käytetyt teknologiat

- **Payload CMS**: 3.84.1 (sisällönhallinta)
- **Next.js**: 16.2.3 (React framework)
- **React**: 19.2.4
- **MongoDB**: Tietokanta
- **TypeScript**: Tyyppiturvallinen kehitys
- **Tailwind CSS**: Tyylit frontendissä

## 🛠️ Asennus ja käyttöönotto

### 1. Kloonaa repositorio

```bash
git clone <repository-url>
cd payload-cms
```

### 2. Asenna riippuvuudet

```bash
pnpm install
```

### 3. Konfiguroi ympäristömuuttujat

Luo `.env` tiedosto projektin juureen:

```env
# MongoDB Connection
DATABASE_URL=mongodb://127.0.0.1/kirjoituskonekauppa

# Payload Secret (generoi satunnainen merkkijono)
PAYLOAD_SECRET=your-secret-key-here

# Server
PORT=3000
```

### 4. Käynnistä MongoDB

Voit käyttää Docker Composea:

```bash
docker-compose up -d
```

Tai lokaalia MongoDB-asennusta.

### 5. Käynnistä kehityspalvelin

```bash
pnpm dev
```

Sivusto aukeaa osoitteessa: `http://localhost:3000`
Admin-paneeli: `http://localhost:3000/admin`

### 6. Luo ensimmäinen käyttäjä

Kun käyt ensimmäisen kerran admin-paneelissa, sinua pyydetään luomaan admin-käyttäjä.

## ✨ Ominaisuudet

### Collections (Kokoelmat)

#### 1. Products (Tuotteet)

- Tuotteen nimi ja kuvaus
- Hinta
- Kategoria (mekaaniset, sähköiset, vintage, tarvikkeet, varaosat)
- Valmistaja ja valmistusvuosi
- Kunto (uusi, erinomainen, hyvä, tyydyttävä, kunnostettu)
- Varastotilanne
- Kuvagalleria (max 10 kuvaa)
- Esitelty tuote -merkintä
- Tekniset tiedot (paino, mitat, väri, näppäinasettelu)

#### 2. Pages (Sivut)

- Staattiset sivut (Tietoa meistä, Yhteystiedot jne.)
- Rich text -editori sisällölle
- SEO-metatiedot
- URL-polkujen hallinta

#### 3. News (Uutiset)

- Blogiartikkelit ja uutiset
- Kategorisointi
- Julkaisupäivä
- Ottekohtainen listaus
- Pääkuva artikkelille

#### 4. Media

- Kuvien ja tiedostojen hallinta
- Automaattinen kuvien optimointi (Sharp)
- Tuki eri tiedostoformaateille

### Globals (Globaalit asetukset)

#### Site Settings

- Sivuston nimi ja iskulause
- Logo
- Yhteystiedot (sähköposti, puhelin, osoite, aukioloajat)
- Sosiaalinen media (Facebook, Instagram, Twitter)
- SEO-asetukset

## 📊 Vertailu WordPressiin

| Ominaisuus           | Payload CMS                              | WordPress                           |
| -------------------- | ---------------------------------------- | ----------------------------------- |
| **Arkkitehtuuri**    | Headless, API-first                      | Monolittiinen, PHP                  |
| **Kieli**            | TypeScript/JavaScript                    | PHP                                 |
| **Tietokanta**       | MongoDB (NoSQL)                          | MySQL (SQL)                         |
| **Admin UI**         | Moderni React-pohjainen                  | Perinteinen PHP-pohjainen           |
| **Joustavuus**       | Erittäin joustava, koodipohjainen        | Joustava, mutta plugin-riippuvainen |
| **Suorituskyky**     | Nopea (API-pohjainen)                    | Kohtuullinen (riippuu plugineista)  |
| **Kehittäjäkokemus** | Erinomainen (TypeScript, moderni)        | Hyvä (laaja yhteisö)                |
| **Oppimiskäyrä**     | Keskitaso (vaatii JS/TS-osaamista)       | Helppo aloittelijoille              |
| **Hosting**          | Node.js-pohjainen                        | PHP-pohjainen (yleisempi)           |
| **Teemointi**        | Custom frontend (Next.js, React, Vue...) | WordPress-teemat                    |
| **Pluginit**         | npm-paketit                              | WordPress-pluginit                  |
| **API**              | REST & GraphQL sisäänrakennettu          | REST API vaatii setup               |
| **Turvallisuus**     | Moderni, vähemmän kohdehyökkäyksiä       | Yleinen kohde, vaatii päivityksiä   |

### Payload CMS:n edut

✅ **Moderni kehityskokemus**: TypeScript, React, Next.js
✅ **Täysi hallinta**: Kaikki koodina, ei "maagisia" toimintoja
✅ **Headless**: Frontend voi olla mitä tahansa (Next.js, Vue, mobiiliappi...)
✅ **Suorituskyky**: Nopea API, optimoitu rakenne
✅ **Skaalautuvuus**: MongoDB:n kanssa helppo skaalata

### Payload CMS:n haasteet

❌ **Pienempi yhteisö**: Vähemmän valmiita ratkaisuja kuin WordPressissä
❌ **Tekninen osaaminen**: Vaatii JavaScript/TypeScript-osaamista
❌ **Hosting**: Vaatii Node.js-tukea (ei perinteinen PHP-hosting)
❌ **Oppimiskäyrä**: Jyrkempi kuin WordPress aloittelijoille

## 🌐 Käyttöönotto tuotannossa

### Build tuotantoa varten

```bash
pnpm build
pnpm start
```

### Deployment-vaihtoehdot

1. **Payload Cloud**: Virallinen Payload-hosting
2. **Vercel/Netlify**: Next.js-hosting (vaatii erillisen MongoDB-tietokannan)
3. **DigitalOcean/AWS/Azure**: VPS tai container-palvelu
4. **Docker**: Containerisoi sovellus (Dockerfile mukana)

### Ympäristömuuttujat tuotannossa

```env
DATABASE_URL=mongodb+srv://user:password@cluster.mongodb.net/dbname
PAYLOAD_SECRET=<strong-random-secret>
NODE_ENV=production
```

## 📝 Kehitys ja ylläpito

### Käytettävyys

**Admin-paneeli** on erittäin käyttäjäystävällinen:

- Intuitiivinen käyttöliittymä
- Drag-and-drop kuvien lataamiseen
- Rich text -editori sisällölle
- Reaaliaikainen esikatselu
- Mobiiliystävällinen

**Ylläpito**:

- Sisällön päivitys helppoa admin-paneelin kautta
- Ei tarvetta koskea koodiin päivittäisessä käytössä
- Automaattiset backupit (MongoDB)
- Versiointi sisällölle (Draft-tila)

### Nopeus ja päivitettävyys

- **Nopea**: API-pohjainen arkkitehtuuri, optimoitu suorituskyky
- **Päivitettävyys**: Instant-päivitykset admin-paneelin kautta
- **Cache**: Mahdollisuus käyttää Next.js:n ISR (Incremental Static Regeneration)
- **CDN**: Staattiset assets helppo hostata CDN:ssä

## 👨‍💻 Tekijä

Projekti toteutettu osana sisällönhallintajärjestelmien vertailua.

## 📄 Lisenssi

MIT

---

**Payload CMS dokumentaatio**: https://payloadcms.com/docs
**GitHub**: https://github.com/payloadcms/payload

## Quick start

This template can be deployed directly from our Cloud hosting and it will setup MongoDB and cloud S3 object storage for media.

## Quick Start - local setup

To spin up this template locally, follow these steps:

### Clone

After you click the `Deploy` button above, you'll want to have standalone copy of this repo on your machine. If you've already cloned this repo, skip to [Development](#development).

### Development

1. First [clone the repo](#clone) if you have not done so already
2. `cd my-project && cp .env.example .env` to copy the example environment variables. You'll need to add the `MONGODB_URL` from your Cloud project to your `.env` if you want to use S3 storage and the MongoDB database that was created for you.

3. `pnpm install && pnpm dev` to install dependencies and start the dev server
4. open `http://localhost:3000` to open the app in your browser

That's it! Changes made in `./src` will be reflected in your app. Follow the on-screen instructions to login and create your first admin user. Then check out [Production](#production) once you're ready to build and serve your app, and [Deployment](#deployment) when you're ready to go live.

#### Docker (Optional)

If you prefer to use Docker for local development instead of a local MongoDB instance, the provided docker-compose.yml file can be used.

To do so, follow these steps:

- Modify the `MONGODB_URL` in your `.env` file to `mongodb://127.0.0.1/<dbname>`
- Modify the `docker-compose.yml` file's `MONGODB_URL` to match the above `<dbname>`
- Run `docker-compose up` to start the database, optionally pass `-d` to run in the background.

## How it works

The Payload config is tailored specifically to the needs of most websites. It is pre-configured in the following ways:

### Collections

See the [Collections](https://payloadcms.com/docs/configuration/collections) docs for details on how to extend this functionality.

- #### Users (Authentication)

  Users are auth-enabled collections that have access to the admin panel.

  For additional help, see the official [Auth Example](https://github.com/payloadcms/payload/tree/3.x/examples/auth) or the [Authentication](https://payloadcms.com/docs/authentication/overview#authentication-overview) docs.

- #### Media

  This is the uploads enabled collection. It features pre-configured sizes, focal point and manual resizing to help you manage your pictures.

### Docker

Alternatively, you can use [Docker](https://www.docker.com) to spin up this template locally. To do so, follow these steps:

1. Follow [steps 1 and 2 from above](#development), the docker-compose file will automatically use the `.env` file in your project root
1. Next run `docker-compose up`
1. Follow [steps 4 and 5 from above](#development) to login and create your first admin user

That's it! The Docker instance will help you get up and running quickly while also standardizing the development environment across your teams.

## Questions

If you have any issues or questions, reach out to us on [Discord](https://discord.com/invite/payload) or start a [GitHub discussion](https://github.com/payloadcms/payload/discussions).
