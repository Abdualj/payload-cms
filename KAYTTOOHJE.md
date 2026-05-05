# Kirjoituskonekauppa - Käyttöohje

## 🎯 Projekti on nyt valmis!

Olet onnistuneesti luonut modernin verkkosivuston Kirjoituskonekauppa Pärnänen & Pojat -yritykselle.

## ✅ Mitä on tehty

1. ✓ **PostgreSQL-tietokanta** käynnissä (portti 5433)
2. ✓ **Next.js + Payload CMS** asennettu ja konfiguroitu
3. ✓ **Tailwind CSS 4** tyylitys
4. ✓ **Esimerkkisisältö** luotu (3 palvelusivua)
5. ✓ **Admin-käyttäjä** luotu
6. ✓ **Responsiivinen etusivu** ja palvelusivut

## 🌐 Sivusto on nyt käytössä

- **Frontend**: http://localhost:3000
- **Admin**: http://localhost:3000/admin

### Kirjaudu admin-paneeliin:
- **Email**: admin@kirjoituskonekauppa.fi
- **Salasana**: demo1234

## 📋 Sivuston sisältö

Projekti sisältää valmiit sivut:

### Etusivu (/)
- Hero-osio tervetuloviestillä
- 3 palvelukorttia (Huolto, Myynti, Entisöinti)
- Tietoa meistä -osio (historia vuodesta 1957)
- Yhteystiedot

### Palvelusivut
1. **/huolto** 🛠 - Huoltopalvelut
2. **/myynti** 🖋 - Myynti
3. **/entisointi** 🔧 - Entisöinti

## 🎨 Sisällön muokkaaminen

### 1. Muokkaa palvelusivuja

1. Mene osoitteeseen: http://localhost:3000/admin
2. Kirjaudu sisään
3. Valitse **Pages** vasemmasta valikosta
4. Klikkaa sivua jonka haluat muokata
5. Tee muutokset ja paina **Save**

### 2. Lisää uusi palvelu

1. **Pages** → **Create New**
2. Täytä kentät:
   - **Sivun otsikko**: esim. "Varaosat"
   - **URL-polku**: esim. "varaosat"
   - **Ikoni**: esim. ⚙️
   - **Lyhyt kuvaus**: Lyhyt kuvaus palvelusta
   - **Sisältö**: Täydellinen kuvaus
   - **Näytä etusivun palvelukorteissa**: ✓
3. **Save**

### 3. Päivitä yhteystiedot

1. Mene **Globals** → **Sivuston asetukset**
2. Muokkaa yhteystietoja
3. **Save**

## 🛠️ Kehittäjän työkalut

### Palvelimen hallinta

```bash
# Käynnistä dev-palvelin
pnpm dev

# Pysäytä palvelin
Ctrl + C terminaalissa

# Käynnistä PostgreSQL
docker compose up -d postgres

# Pysäytä PostgreSQL
docker compose down postgres
```

### Tyyppien generointi

Kun lisäät tai muokkaat kokoelmia:

```bash
pnpm generate:types
```

## 📱 Responsiivisuus

Sivusto toimii kaikilla laitteilla:
- 📱 Mobiili (320px+)
- 📱 Tabletti (768px+)
- 💻 Desktop (1024px+)

## 🎨 Värimaailma

Projekti käyttää lämmintä, perinteistä väripalettia:

- **Pääväri**: Amber/Kulta (#d97706, #b45309)
- **Aksenttiväri**: Orange (#ea580c)
- **Tausta**: Vaalea beige (#fffbeb, #fef3c7)
- **Teksti**: Tumma harmaa (#1f2937)

## 📝 Seuraavat askeleet

### Suositeltavaa lisättävää:

1. **Kuvagalleria** - Lisää kuvia kirjoituskoneista
2. **Yhteystietolomake** - Email-lähetys
3. **Kartta** - Google Maps liikkeen sijaintiin
4. **SEO** - Meta-tagit ja sitemap
5. **Analytics** - Google Analytics tai vastaava

### Laajennukset:

1. **Verkkokauppa** - Myy kirjoituskoneita suoraan sivustolta
2. **Varausjärjestelmä** - Huoltovaraukset
3. **Blogi** - Vinkkejä ja tarinoita kirjoituskoneista
4. **Monikielisyys** - Englanti/Ruotsi

## 🚀 Tuotantoon vienti

Kun olet valmis julkaisemaan sivuston:

1. **Valitse hosting**:
   - Vercel (suositeltu Next.js:lle)
   - Railway (PostgreSQL sisäänrakennettu)
   - Heroku

2. **Päivitä .env**:
   - Vaihda PAYLOAD_SECRET turvalliseksi
   - Päivitä DATABASE_URL tuotantotietokantaan

3. **Rakenna projekti**:
```bash
pnpm build
pnpm start
```

## 💡 Vinkkejä

- **Varmuuskopioi tietokanta** säännöllisesti
- **Testaa muutokset** ennen tuotantoon vientiä
- **Käytä vahvoja salasanoja** tuotannossa
- **Päivitä riippuvuudet** säännöllisesti

## ❓ Ongelmatilanteet

### Sivusto ei lataudu?
1. Tarkista että PostgreSQL on käynnissä: `docker compose ps`
2. Tarkista dev-palvelin: `pnpm dev`
3. Katso virheviestit terminaalista

### Ei pääse admin-paneeliin?
- Varmista että käyttäjä on luotu: `pnpm exec tsx src/seed-main.ts`
- Käytä oikeita kirjautumistietoja

### PostgreSQL-yhteysongelmat?
- Varmista että portti 5433 on vapaa
- Käynnistä kontti uudelleen: `docker compose restart postgres`

## 📞 Tuki

Jos tarvitset apua, tarkista:
1. Terminal-virheviestit
2. Browser Console (F12)
3. README-KIRJOITUSKONEKAUPPA.md

---

**Onnea projektille!** 🎉

Rakennettu ❤️:llä käyttäen Next.js, Payload CMS & PostgreSQL
