# ✅ Deployment Checklist

Käy tämä lista läpi ennen kuin deployt projektin tuotantoon.

## 📋 Ennen Deployausta

### 1. Koodin tarkistus
- [ ] Projekti builddaa lokaalisti: `pnpm run build`
- [ ] Ei TypeScript-virheitä: `pnpm run lint`
- [ ] Kaikki testit läpäisty (jos on testejä)
- [ ] Ei dev-riippuvuuksia tuotantokoodissa

### 2. Tietokanta
- [ ] PostgreSQL-tietokanta luotu (Supabase/Neon/Vercel)
- [ ] `DATABASE_URL` kopioi talteen turvalliseen paikkaan
- [ ] Tietokantayhteys testattu

### 3. Ympäristömuuttujat
- [ ] `DATABASE_URL` määritetty
- [ ] `PAYLOAD_SECRET` generoitu: `openssl rand -base64 32`
- [ ] `NEXT_PUBLIC_SERVER_URL` määritetty oikein
- [ ] Kaikki muuttujat .env-tiedostossa (älä commitoi!)

### 4. Git & GitHub
- [ ] Projekti pushattu GitHubiin
- [ ] `.gitignore` sisältää `.env`
- [ ] `.env.example` on päivitetty
- [ ] README päivitetty

### 5. Turvallisuus
- [ ] `PAYLOAD_SECRET` on vahva (min 32 merkkiä)
- [ ] Tietokannan salasana on vahva
- [ ] `.env` EI ole Gitissä
- [ ] Admin-salasana valmiina (vahva!)

---

## 🚀 Deployment

### Vercel (Suositeltu)

- [ ] Vercel-tili luotu
- [ ] Projekti yhdistetty GitHubiin
- [ ] Ympäristömuuttujat lisätty Verceliin
- [ ] Build-komento: `pnpm run build`
- [ ] Output directory: `.next`
- [ ] Deploy painettu!

### Railway

- [ ] Railway-tili luotu
- [ ] PostgreSQL-tietokanta luotu Railwayssa
- [ ] Projekti yhdistetty GitHubiin
- [ ] Ympäristömuuttujat määritetty
- [ ] Deploy painettu!

### Docker

- [ ] `Dockerfile` tarkistettu
- [ ] `docker-compose.yml` päivitetty
- [ ] Image builddattu: `docker build -t kirjoituskonekauppa .`
- [ ] Container testattu lokaalisti
- [ ] Image pushattu Docker Hubiin (valinnainen)

### VPS

- [ ] VPS vuokrattu (DigitalOcean/Linode/Hetzner)
- [ ] Node.js 22 asennettu
- [ ] PostgreSQL asennettu
- [ ] Nginx asennettu
- [ ] PM2 asennettu
- [ ] Projekti kloonattu palvelimelle
- [ ] Build ajettu
- [ ] PM2 käynnistetty
- [ ] Nginx konfiguroitu
- [ ] SSL-sertifikaatti asennettu (Let's Encrypt)

---

## 🌱 Deployment jälkeen

### 1. Testaa sivusto
- [ ] Frontend toimii: `https://yourdomain.com`
- [ ] Admin-paneeli toimii: `https://yourdomain.com/admin`
- [ ] Kaikki sivut lataavat oikein
- [ ] Kuvat näkyvät (jos on)
- [ ] Ei 404-virheitä

### 2. Luo admin-käyttäjä
- [ ] Mene: `https://yourdomain.com/admin`
- [ ] Luo käyttäjä (vahva salasana!)
- [ ] Kirjaudu sisään

### 3. Lisää sisältö

**Vaihtoehto A: Seed-data**
```bash
# Vercel
vercel env pull .env.production
pnpm run seed

# Railway
railway run pnpm run seed

# VPS
pnpm run seed
```

**Vaihtoehto B: Manuaalisesti**
- [ ] Lisää palvelut (Pages)
- [ ] Merkitse palvelut "Featured"
- [ ] Täytä Site Settings
- [ ] Lisää tuotteita (jos tarpeen)
- [ ] Julkaise sisältö

### 4. SEO & Analytics (Valinnainen)
- [ ] Google Analytics asennettu
- [ ] Meta-tagit lisätty
- [ ] Favicon asetettu
- [ ] Sitemap generoi automaattisesti

### 5. Monitorointi
- [ ] Vercel Analytics päällä (jos Vercel)
- [ ] Error tracking (Sentry tms.) asennettu (valinnainen)
- [ ] Uptime monitoring (UptimeRobot) asetettu (valinnainen)

### 6. Backup
- [ ] Tietokannan automaattiset varmuuskopiot päällä
- [ ] Media-tiedostojen backup (jos on paljon)

### 7. Domain (Valinnainen)
- [ ] Domain ostettu (esim. kirjoituskonekauppa.fi)
- [ ] DNS-asetukset päivitetty Verceliin/Railway
- [ ] SSL toimii custom domainilla
- [ ] Redirectit toimivat (www → non-www tms.)

---

## 🎯 Lopputarkistus

- [ ] Sivusto ladataan nopeasti (< 3s)
- [ ] Mobiilissa näyttää hyvältä
- [ ] Admin-paneeli toimii sujuvasti
- [ ] Kaikki linkit toimivat
- [ ] Lomakkeet toimivat (jos on)
- [ ] Email-ilmoitukset toimivat (jos on)

---

## 📞 Kun kaikki valmista

### Tee näin:

1. **Testaa perusteellisesti**
   - Klikkaa kaikkia linkkejä
   - Testaa admin-paneelista sisällön lisäys
   - Testaa mobiilinäkymä

2. **Ota backup**
   - Exportaa tietokanta
   - Tallenna ympäristömuuttujat

3. **Dokumentoi**
   - Kirjoita muistiin admin-tunnukset (turvalliseen paikkaan!)
   - Tallenna deployment-tiedot
   - Päivitä KAYTTOOHJE.md tarpeen mukaan

4. **Ilmoita asiakkaalle** (jos teet asiakkaalle)
   - Sivuston osoite
   - Admin-osoite
   - Tunnukset (turvallisesti!)
   - Ohje sisällön päivittämiseen

---

## 🆘 Ongelmat?

### Build epäonnistuu
→ Katso: [DEPLOYMENT.md - Troubleshooting](./DEPLOYMENT.md#ongelmanratkaisu)

### Tietokanta ei toimi
→ Tarkista `DATABASE_URL` ja SSL-asetukset

### 404-virheet
→ Varmista että seed-data on ajettu TAI lisää sisältö manuaalisesti

### Muut ongelmat
→ Katso: [DEPLOYMENT.md](./DEPLOYMENT.md)

---

**Deployment onnistui?** 🎉

→ Merkitse kaikki checkboxit ✅  
→ Nauti upeasta sivustostasi!  
→ Päivitä tämä checklist seuraavaa projektia varten!
