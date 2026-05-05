import { Payload } from 'payload'

export const seedKirjoituskonekauppa = async (payload: Payload): Promise<void> => {
  // Create admin user if not exists
  const { docs: users } = await payload.find({
    collection: 'users',
    where: {
      email: {
        equals: 'admin@kirjoituskonekauppa.fi',
      },
    },
  })

  if (users.length === 0) {
    await payload.create({
      collection: 'users',
      data: {
        email: 'admin@kirjoituskonekauppa.fi',
        password: 'demo1234',
        name: 'Admin',
      },
    })
    console.log('✓ Admin user created: admin@kirjoituskonekauppa.fi / demo1234')
  }

  // Create service pages
  const services = [
    {
      title: 'Huolto',
      slug: 'huolto',
      icon: '🛠',
      excerpt: 'Kirjoituskoneet ovat kestäviä laitteita, mutta aika ja käyttö jättävät jälkensä. Tarjoamme kattavan huoltopalvelun, joka pitää koneesi toimintakunnossa vuosikymmeniä eteenpäin.',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'heading',
              tag: 'h2',
              children: [{ text: 'Huoltopalvelumme' }],
            },
            {
              type: 'paragraph',
              children: [
                { text: 'Kirjoituskoneet ovat kestäviä laitteita, mutta aika ja käyttö jättävät jälkensä. Tarjoamme kattavan huoltopalvelun, joka pitää koneesi toimintakunnossa vuosikymmeniä eteenpäin.' },
              ],
            },
            {
              type: 'heading',
              tag: 'h3',
              children: [{ text: 'Huoltoon kuuluu:' }],
            },
            {
              type: 'list',
              tag: 'ul',
              children: [
                { type: 'listitem', children: [{ text: '✔️ Mekaanisten osien puhdistus ja voitelu' }] },
                { type: 'listitem', children: [{ text: '✔️ Mustenauhojen vaihto' }] },
                { type: 'listitem', children: [{ text: '✔️ Näppäinten ja telan tarkistus sekä säätö' }] },
                { type: 'listitem', children: [{ text: '✔️ Pienet korjaukset ja varaosien vaihto' }] },
              ],
            },
            {
              type: 'paragraph',
              children: [
                { text: 'Huollamme kaikki kirjoituskonemerkit ja -mallit ammattitaidolla. Varaa aika huoltoon soittamalla tai lähettämällä sähköpostia!' },
              ],
            },
          ],
        },
      },
      featured: true,
      published: true,
    },
    {
      title: 'Myynti',
      slug: 'myynti',
      icon: '🖋',
      excerpt: 'Etsitkö omaa kirjoituskonetta? Meiltä löydät laajan valikoiman huollettuja ja täysin toimintakuntoisia koneita eri aikakausilta.',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'heading',
              tag: 'h2',
              children: [{ text: 'Laaja valikoima kirjoituskoneita' }],
            },
            {
              type: 'paragraph',
              children: [
                { text: 'Etsitkö omaa kirjoituskonetta? Meiltä löydät laajan valikoiman huollettuja ja täysin toimintakuntoisia koneita eri aikakausilta. Valikoimassamme on sekä peruskäyttöön sopivia malleja että harvinaisia keräilykappaleita.' },
              ],
            },
            {
              type: 'paragraph',
              children: [
                { text: 'Autamme valitsemaan juuri sinun tarpeisiisi sopivan kirjoituskoneen! Jokainen myytävä kone on huollettu ja testattu ennen myyntiä.' },
              ],
            },
            {
              type: 'heading',
              tag: 'h3',
              children: [{ text: 'Miksi valita meiltä?' }],
            },
            {
              type: 'list',
              tag: 'ul',
              children: [
                { type: 'listitem', children: [{ text: 'Kaikki koneet huollettuja ja toimintakuntoisia' }] },
                { type: 'listitem', children: [{ text: 'Asiantunteva neuvonta' }] },
                { type: 'listitem', children: [{ text: 'Takuu jokaiselle koneelle' }] },
                { type: 'listitem', children: [{ text: 'Harvinaisia vintage-malleja' }] },
              ],
            },
          ],
        },
      },
      featured: true,
      published: true,
    },
    {
      title: 'Entisöinti',
      slug: 'entisointi',
      icon: '🔧',
      excerpt: 'Jos omistat vanhan, mutta rakkaan kirjoituskoneen, joka kaipaa uuden elämän, me voimme auttaa! Entisöintipalvelumme palauttaa koneesi alkuperäiseen loistoonsa.',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'heading',
              tag: 'h2',
              children: [{ text: 'Täydellinen entisöinti' }],
            },
            {
              type: 'paragraph',
              children: [
                { text: 'Jos omistat vanhan, mutta rakkaan kirjoituskoneen, joka kaipaa uuden elämän, me voimme auttaa! Entisöintipalvelumme palauttaa koneesi alkuperäiseen loistoonsa.' },
              ],
            },
            {
              type: 'heading',
              tag: 'h3',
              children: [{ text: 'Entisöintiprosessi:' }],
            },
            {
              type: 'list',
              tag: 'ul',
              children: [
                { type: 'listitem', children: [{ text: '✔️ Koneiston täydellinen purku, puhdistus ja kunnostus' }] },
                { type: 'listitem', children: [{ text: '✔️ Maalipinnan ja merkkien ehostus' }] },
                { type: 'listitem', children: [{ text: '✔️ Uusien osien valmistus tarvittaessa' }] },
                { type: 'listitem', children: [{ text: '✔️ Testaus ja hienosäätö alkuperäisen käyttötuntuman palauttamiseksi' }] },
              ],
            },
            {
              type: 'paragraph',
              children: [
                { text: 'Pidämme huolta kirjoituskoneistasi samalla asiantuntemuksella ja intohimolla, joka on kulkenut Pärnäsen suvussa jo yli 60 vuoden ajan.' },
              ],
            },
          ],
        },
      },
      featured: true,
      published: true,
    },
  ]

  for (const service of services) {
    const { docs: existing } = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: service.slug,
        },
      },
    })

    if (existing.length === 0) {
      await payload.create({
        collection: 'pages',
        data: service,
      })
      console.log(`✓ Page created: ${service.title}`)
    }
  }

  // Update site settings
  const settings = await payload.findGlobal({
    slug: 'site-settings',
  })

  if (!settings.siteName) {
    await payload.updateGlobal({
      slug: 'site-settings',
      data: {
        siteName: 'Kirjoituskonekauppa, Pärnänen & Pojat',
        tagline: 'Perinteitä ja laatua jo vuodesta 1957',
        contactInfo: {
          email: 'info@kirjoituskonekauppa.fi',
          phone: '09 323431267',
          address: 'Jääkärinkatu 9, 00150 Helsinki',
          openingHours: 'Ma-Pe 10-18\nLa 10-15',
        },
        seo: {
          metaDescription: 'Kirjoituskoneiden huolto, myynti ja entisöinti Helsingissä. Palvelua vuodesta 1957.',
          keywords: 'kirjoituskone, kirjoituskoneet, huolto, entisöinti, vintage, Helsinki',
        },
      },
    })
    console.log('✓ Site settings updated')
  }

  console.log('\n✓ Kirjoituskonekauppa seed data created successfully!')
  console.log('\nYou can now login with:')
  console.log('Email: admin@kirjoituskonekauppa.fi')
  console.log('Password: demo1234')
}
