import { getPayload } from 'payload'
import config from '@/payload.config'

async function seed() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  console.log('🌱 Seeding database...')

  try {
    // Create sample products
    console.log('Creating products...')

    const product1 = await payload.create({
      collection: 'products',
      data: {
        name: 'Olivetti Lettera 32',
        description:
          'Klassinen italialainen matkakirjoituskone 1960-luvulta. Kevyt, kompakti ja toimiva.',
        price: 249,
        category: 'vintage',
        manufacturer: 'Olivetti',
        year: 1963,
        condition: 'excellent',
        inStock: true,
        featured: true,
        specifications: {
          weight: '4.5 kg',
          dimensions: '28 x 30 x 10 cm',
          color: 'Siniharmaa',
          keyboardLayout: 'qwerty',
        },
      },
    })

    const product2 = await payload.create({
      collection: 'products',
      data: {
        name: 'Royal Quiet De Luxe',
        description:
          'Amerikkalainen klassikko 1950-luvulta. Hemingwayn suosikki. Erinomainen kirjoituskokemus.',
        price: 329,
        category: 'vintage',
        manufacturer: 'Royal',
        year: 1955,
        condition: 'restored',
        inStock: true,
        featured: true,
        specifications: {
          weight: '6.2 kg',
          dimensions: '32 x 31 x 12 cm',
          color: 'Musta',
          keyboardLayout: 'qwerty',
        },
      },
    })

    const product3 = await payload.create({
      collection: 'products',
      data: {
        name: 'Hermes 3000',
        description:
          'Sveitsiläinen huippumalli. Tunnettu erityisen tasaisesta ja miellyttävästä kirjoitustuntumasta.',
        price: 459,
        category: 'vintage',
        manufacturer: 'Hermes',
        year: 1968,
        condition: 'excellent',
        inStock: true,
        featured: true,
        specifications: {
          weight: '5.8 kg',
          dimensions: '31 x 29 x 11 cm',
          color: 'Vihreä',
          keyboardLayout: 'qwerty',
        },
      },
    })

    await payload.create({
      collection: 'products',
      data: {
        name: 'Olympia SM9',
        description: 'Saksalainen laadukas toimistokirjoituskone. Kestävä ja luotettava.',
        price: 189,
        category: 'mechanical',
        manufacturer: 'Olympia',
        year: 1972,
        condition: 'good',
        inStock: true,
        featured: false,
        specifications: {
          weight: '8.5 kg',
          dimensions: '38 x 35 x 14 cm',
          color: 'Beige',
          keyboardLayout: 'qwerty',
        },
      },
    })

    await payload.create({
      collection: 'products',
      data: {
        name: 'Mustenauhapakkaus',
        description:
          'Universaali mustenauhapakkaus, sopii useimpiin kirjoituskoneisiin. 5 kpl pakkaus.',
        price: 24.9,
        category: 'accessories',
        manufacturer: 'Universal',
        condition: 'new',
        inStock: true,
        featured: false,
      },
    })

    console.log('✓ Products created')

    // Create sample pages
    console.log('Creating pages...')

    await payload.create({
      collection: 'pages',
      data: {
        title: 'Tietoa meistä',
        slug: 'tietoa-meista',
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Kirjoituskonekauppa Pärnänen & Pojat on perheyritys, joka on palvellut kirjoituskoneharrastajia ja -ammattilaisia vuodesta 1952.',
                  },
                ],
              },
            ],
          },
        },
        metaDescription: 'Tutustu Suomen vanhimpaan kirjoituskonekauppaan',
        published: true,
      },
    })

    await payload.create({
      collection: 'pages',
      data: {
        title: 'Yhteystiedot',
        slug: 'yhteystiedot',
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Ota yhteyttä - autamme mielellämme kaikissa kirjoituskoneisiin liittyvissä asioissa!',
                  },
                ],
              },
            ],
          },
        },
        metaDescription: 'Ota yhteyttä Kirjoituskonekauppa Pärnänen & Pojat',
        published: true,
      },
    })

    console.log('✓ Pages created')

    // Create sample news
    console.log('Creating news articles...')

    await payload.create({
      collection: 'news',
      data: {
        title: 'Uusi erä vintage-koneita saapunut!',
        slug: 'uusi-era-vintage-koneita',
        excerpt: 'Olemme saaneet valikoimaamme upean erän 1960-70-lukujen kirjoituskoneita.',
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Tuore toimitus Italian sunnuntaimarkkinoilta toi mukanaan upeita löytöjä. Mukana mm. Olivetti Lettera 32, Hermes 3000 ja Royal Quiet De Luxe.',
                  },
                ],
              },
            ],
          },
        },
        author: 'Matti Pärnänen',
        publishedDate: new Date('2026-04-15').toISOString(),
        category: 'news',
        published: true,
      },
    })

    await payload.create({
      collection: 'news',
      data: {
        title: 'Kirjoituskoneiden huolto ja kunnostus',
        slug: 'kirjoituskoneiden-huolto',
        excerpt: 'Tarjoamme nyt myös ammattitasoista huolto- ja kunnostuspalvelua.',
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Vuosien kokemuksella kunnostamme ja huollamme kaikki kirjoituskonemallit. Tuo koneesi meille arvioitavaksi!',
                  },
                ],
              },
            ],
          },
        },
        author: 'Pärnänen & Pojat',
        publishedDate: new Date('2026-03-20').toISOString(),
        category: 'news',
        published: true,
      },
    })

    console.log('✓ News articles created')

    // Update site settings
    console.log('Updating site settings...')

    await payload.updateGlobal({
      slug: 'site-settings',
      data: {
        siteName: 'Kirjoituskonekauppa Pärnänen & Pojat',
        tagline: 'Klassisia kirjoituskoneita vuodesta 1952',
        contactInfo: {
          email: 'info@parnanen-pojat.fi',
          phone: '+358 9 123 4567',
          address: 'Kirjoituskatu 12\n00100 Helsinki\nSuomi',
          openingHours: 'Ma-Pe: 10:00-18:00\nLa: 10:00-15:00\nSu: Suljettu',
        },
        socialMedia: {
          facebook: 'https://facebook.com/parnanenpojat',
          instagram: 'https://instagram.com/parnanenpojat',
        },
        seo: {
          metaDescription:
            'Kirjoituskonekauppa Pärnänen & Pojat - Suomen vanhin kirjoituskonekauppa. Laaja valikoima vintage- ja klassisia kirjoituskoneita.',
          keywords: 'kirjoituskone, vintage, klassinen, Olivetti, Royal, Hermes, Helsinki',
        },
      },
    })

    console.log('✓ Site settings updated')

    console.log('\n✅ Database seeded successfully!')
    console.log('\n📝 Next steps:')
    console.log('1. Visit http://localhost:3000/admin to access the admin panel')
    console.log('2. Create your admin user')
    console.log('3. Visit http://localhost:3000 to see the frontend')
  } catch (error) {
    console.error('❌ Error seeding database:', error)
    throw error
  }

  process.exit(0)
}

seed()
