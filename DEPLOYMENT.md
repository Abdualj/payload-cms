# 🚀 Deployment-ohje: Kirjoituskonekauppa

Tämä ohje kattaa projektin julkaisemisen tuotantoympäristöön.

## 📋 Sisältö

1. [Vercel Deployment (Suositeltu)](#vercel-deployment)
2. [Railway Deployment](#railway-deployment)
3. [Docker Deployment](#docker-deployment)
4. [VPS Deployment (DigitalOcean, Linode, jne.)](#vps-deployment)
5. [Tietokannan asennus](#tietokannan-asennus)

---

## 🌐 Vercel Deployment (Suositeltu)

Vercel on paras vaihtoehto Next.js-projekteille. Se on ilmainen pienille projekteille.

### Vaihe 1: Valmistele projekti

```bash
# Varmista että kaikki riippuvuudet on asennettu
pnpm install

# Testaa että build toimii
pnpm run build
```

### Vaihe 2: Luo GitHub repository (jos ei vielä ole)

```bash
git init
git add .
git commit -m "Initial commit - Kirjoituskonekauppa"
git branch -M main
git remote add origin https://github.com/KÄYTTÄJÄNIMI/kirjoituskonekauppa.git
git push -u origin main
```

### Vaihe 3: Luo PostgreSQL-tietokanta

**Vaihtoehto A: Vercel Postgres (Suositeltu)**

1. Mene [vercel.com/dashboard](https://vercel.com/dashboard)
2. Klikkaa **Storage** → **Create Database** → **Postgres**
3. Anna tietokannalle nimi: `kirjoituskonekauppa-db`
4. Valitse alue (esim. Frankfurt)
5. Kopioi `DATABASE_URL` myöhempää käyttöä varten

**Vaihtoehto B: Supabase (Ilmainen)**

1. Mene [supabase.com](https://supabase.com) → **New Project**
2. Luo uusi projekti: `kirjoituskonekauppa`
3. Luo vahva salasana ja **tallenna se**
4. Valitse alue: **Europe North 1 (Stockholm)**
5. Odota projektin valmistumista (1-2 min)

**Hae Connection String:**
- Klikkaa **Project Settings** (rataskuvake vasemmalla)
- Valitse **Database**
- Etsi **Connection string** -osio
- Valitse **URI** (ei Transaction pooler)
- Kopioi connection string
- Vaihda `[YOUR-PASSWORD]` omaan salasanaasi
- Muoto: `postgresql://postgres.xxx:[PASSWORD]@aws-0-eu-north-1.pooler.supabase.com:5432/postgres`

**Vaihtoehto C: Neon (Ilmainen)**

1. Mene [neon.tech](https://neon.tech)
2. Luo uusi projekti
3. Kopioi Connection String

### Vaihe 4: Deploy Verceliin

1. Mene [vercel.com](https://vercel.com)
2. Kirjaudu sisään GitHubilla
3. Klikkaa **Add New** → **Project**
4. Importoi GitHub-repositorysi
5. Määritä ympäristömuuttujat:

```env
DATABASE_URL=postgresql://user:password@host:5432/database
PAYLOAD_SECRET=your-super-secret-key-here-min-32-characters
NEXT_PUBLIC_SERVER_URL=https://your-app.vercel.app
```

> **Tärkeää!** Generoi turvallinen `PAYLOAD_SECRET`:
> ```bash
> openssl rand -base64 32
> ```

6. Klikkaa **Deploy**
7. Odota 2-3 minuuttia

### Vaihe 5: Aja seed-data tuotannossa

Kun deployment on valmis, aja seed-data:

```bash
# Asenna Vercel CLI
npm i -g vercel

# Kirjaudu sisään
vercel login

# Linkkaa projekti
vercel link

# Aja seed-komento tuotannossa
vercel env pull .env.production
pnpm run seed
```

Tai aja manuaalisesti admin-paneelista:
- Mene `https://your-app.vercel.app/admin`
- Luo käyttäjä
- Lisää sisältöä manuaalisesti

### Vaihe 6: Testaa sivusto

- Frontend: `https://your-app.vercel.app`
- Admin: `https://your-app.vercel.app/admin`

---

## 🚂 Railway Deployment

Railway on helppokäyttöinen ja tarjoaa ilmaisen tason.

### Vaihe 1: Luo Railway-projekti

1. Mene [railway.app](https://railway.app)
2. Kirjaudu GitHubilla
3. Klikkaa **New Project**
4. Valitse **Deploy from GitHub repo**
5. Valitse repositorysi

### Vaihe 2: Lisää PostgreSQL

1. Klikkaa **New** → **Database** → **PostgreSQL**
2. Railway luo automaattisesti `DATABASE_URL`

### Vaihe 3: Määritä ympäristömuuttujat

Mene projektin **Variables**-välilehdelle:

```env
DATABASE_URL=${{Postgres.DATABASE_URL}}
PAYLOAD_SECRET=your-super-secret-key-here
NEXT_PUBLIC_SERVER_URL=https://your-app.up.railway.app
PORT=3000
```

### Vaihe 4: Deploy

Railway deployaa automaattisesti kun pushaat GitHubiin.

---

## 🐳 Docker Deployment

### Vaihe 1: Rakenna Docker image

```bash
# Rakenna image
docker build -t kirjoituskonekauppa .

# Testaa lokaalisti
docker run -p 3000:3000 \
  -e DATABASE_URL="postgresql://user:pass@host:5432/db" \
  -e PAYLOAD_SECRET="your-secret" \
  -e NEXT_PUBLIC_SERVER_URL="http://localhost:3000" \
  kirjoituskonekauppa
```

### Vaihe 2: Julkaise Docker Hubiin (valinnainen)

```bash
# Kirjaudu Docker Hubiin
docker login

# Tagaa image
docker tag kirjoituskonekauppa yourusername/kirjoituskonekauppa:latest

# Pushaa
docker push yourusername/kirjoituskonekauppa:latest
```

### Vaihe 3: Deploy palvelimelle

```bash
# Palvelimella
docker pull yourusername/kirjoituskonekauppa:latest
docker run -d \
  --name kirjoituskonekauppa \
  -p 80:3000 \
  -e DATABASE_URL="postgresql://..." \
  -e PAYLOAD_SECRET="..." \
  -e NEXT_PUBLIC_SERVER_URL="https://yourdomain.com" \
  --restart unless-stopped \
  yourusername/kirjoituskonekauppa:latest
```

---

## 🖥️ VPS Deployment (DigitalOcean, Linode, Hetzner)

### Vaihe 1: Luo VPS

1. Tilaa VPS (esim. DigitalOcean Droplet)
   - Ubuntu 24.04 LTS
   - 2GB RAM (min)
   - 2 CPU cores
2. Kirjaudu SSH:lla

### Vaihe 2: Asenna riippuvuudet

```bash
# Päivitä järjestelmä
sudo apt update && sudo apt upgrade -y

# Asenna Node.js 22
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs

# Asenna pnpm
npm install -g pnpm

# Asenna PostgreSQL
sudo apt install postgresql postgresql-contrib -y

# Asenna Nginx
sudo apt install nginx -y

# Asenna PM2 (prosessinhallinta)
npm install -g pm2
```

### Vaihe 3: Asenna PostgreSQL

```bash
# Vaihda postgres-käyttäjään
sudo -u postgres psql

# Luo tietokanta ja käyttäjä
CREATE DATABASE kirjoituskonekauppa;
CREATE USER kkuser WITH PASSWORD 'your-strong-password';
GRANT ALL PRIVILEGES ON DATABASE kirjoituskonekauppa TO kkuser;
\q
```

### Vaihe 4: Kloonaa projekti

```bash
cd /var/www
sudo git clone https://github.com/KÄYTTÄJÄNIMI/kirjoituskonekauppa.git
cd kirjoituskonekauppa
sudo chown -R $USER:$USER /var/www/kirjoituskonekauppa
```

### Vaihe 5: Määritä ympäristömuuttujat

```bash
nano .env
```

Lisää:
```env
DATABASE_URL=postgresql://kkuser:your-strong-password@localhost:5432/kirjoituskonekauppa
PAYLOAD_SECRET=your-super-secret-key-min-32-chars
NEXT_PUBLIC_SERVER_URL=https://yourdomain.com
PORT=3000
```

### Vaihe 6: Rakenna ja käynnistä

```bash
# Asenna riippuvuudet
pnpm install

# Rakenna
pnpm run build

# Aja seed-data
pnpm run seed

# Käynnistä PM2:lla
pm2 start pnpm --name kirjoituskonekauppa -- start
pm2 save
pm2 startup
```

### Vaihe 7: Määritä Nginx reverse proxy

```bash
sudo nano /etc/nginx/sites-available/kirjoituskonekauppa
```

Lisää:
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Aktivoi:
```bash
sudo ln -s /etc/nginx/sites-available/kirjoituskonekauppa /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Vaihe 8: Asenna SSL (Let's Encrypt)

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

---

## 🗄️ Tietokannan asennus

### PostgreSQL pilvipalveluissa (Ilmaiset vaihtoehdot)

#### 1. **Supabase** (Suositeltu ilmaiseksi)
- ✅ 500MB tietokanta
- ✅ Unlimited API requests
- ✅ Auto backups
- 🌍 [supabase.com](https://supabase.com)

#### 2. **Neon**
- ✅ 3GB storage
- ✅ Unlimited queries
- ✅ Branching (dev/prod)
- 🌍 [neon.tech](https://neon.tech)

#### 3. **Vercel Postgres**
- ✅ 256MB storage (ilmainen)
- ✅ Integroitu Verceliin
- 🌍 [vercel.com/storage/postgres](https://vercel.com/storage/postgres)

#### 4. **Railway**
- ✅ 1GB storage
- ✅ 100h runtime/month
- 🌍 [railway.app](https://railway.app)

#### 5. **ElephantSQL**
- ✅ 20MB storage (ilmainen)
- ✅ Shared server
- 🌍 [elephantsql.com](https://elephantsql.com)

---

## ⚙️ Ympäristömuuttujat (Täydellinen lista)

```env
# Tietokanta (PAKOLLINEN)
DATABASE_URL=postgresql://user:password@host:5432/database

# Payload CMS salaisuus (PAKOLLINEN, min 32 merkkiä)
PAYLOAD_SECRET=your-super-secret-key-here-minimum-32-characters

# Palvelimen URL (PAKOLLINEN)
NEXT_PUBLIC_SERVER_URL=https://yourdomain.com

# Portti (valinnainen, oletus: 3000)
PORT=3000

# Node-ympäristö (tuotannossa)
NODE_ENV=production
```

---

## 🔒 Turvallisuus

### Ennen tuotantoon vientiä:

1. **Vaihda admin-salasana!**
   - Kirjaudu: `https://yourdomain.com/admin`
   - Mene Settings → Change Password

2. **Generoi turvallinen PAYLOAD_SECRET:**
   ```bash
   openssl rand -base64 32
   ```

3. **Määritä turvallinen DATABASE_URL:**
   - Älä koskaan commitoi `.env`-tiedostoa Gitiin
   - Käytä vahvoja salasanoja

4. **Rajoita admin-pääsy (valinnainen):**
   - Määritä IP-whitelisting Nginxissä
   - Käytä VPN:ää

---

## 📊 Monitorointi

### PM2 (VPS)

```bash
# Katso status
pm2 status

# Katso logit
pm2 logs kirjoituskonekauppa

# Restart
pm2 restart kirjoituskonekauppa
```

### Vercel

- Mene [vercel.com/dashboard](https://vercel.com/dashboard)
- Klikkaa projektia → **Logs**

---

## 🆘 Ongelmanratkaisu

### Build-virhe Vercelissä

```bash
# Testaa build lokaalisti ensin
pnpm run build

# Jos virheitä, tarkista:
- tsconfig.json
- Ympäristömuuttujat
- Node.js versio (22.x)
```

### Tietokantayhteys epäonnistuu

```bash
# Testaa yhteyttä
psql $DATABASE_URL

# Tarkista:
- Käyttäjän oikeudet
- Firewall-säännöt
- SSL-vaatimukset (lisää ?sslmode=require)
```

### 404-virhe kaikilla sivuilla

- Tarkista että `NEXT_PUBLIC_SERVER_URL` on oikein
- Varmista että seed-data on ajettu
- Katso Payload admin-paneelista että sivut ovat julkaistuja

---

## 📚 Lisäresurssit

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Payload CMS Deployment](https://payloadcms.com/docs/production/deployment)
- [Vercel Docs](https://vercel.com/docs)
- [Railway Docs](https://docs.railway.app)

---

## ✅ Deployment Checklist

- [ ] Build toimii lokaalisti (`pnpm run build`)
- [ ] Tietokanta on luotu
- [ ] Ympäristömuuttujat määritetty
- [ ] `PAYLOAD_SECRET` generoitu turvallisesti
- [ ] Projekti pushattu GitHubiin
- [ ] Deployttu valittuun palveluun
- [ ] Seed-data ajettu
- [ ] Admin-salasana vaihdettu
- [ ] SSL-sertifikaatti asennettu
- [ ] Domain-nimi yhdistetty
- [ ] Monitorointi asetettu

---

**Valmista!** 🎉

Nyt Kirjoituskonekauppa on tuotannossa ja valmiina palvelemaan asiakkaita!
