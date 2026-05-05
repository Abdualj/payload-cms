import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Sivun otsikko',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      label: 'URL-polku',
      unique: true,
      admin: {
        description: 'URL-osoite sivulle (esim. "huolto", "myynti")',
      },
    },
    {
      name: 'icon',
      type: 'text',
      label: 'Ikoni',
      admin: {
        description: 'Emoji tai ikonikoodi (esim. 🛠, 🖋, 🔧)',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Lyhyt kuvaus',
      admin: {
        description: 'Käytetään palvelukorteissa',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Näytä etusivun palvelukorteissa',
      defaultValue: false,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'Sisältö',
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Yläkuva',
    },
    {
      name: 'metaDescription',
      type: 'textarea',
      label: 'Meta-kuvaus (SEO)',
      maxLength: 160,
    },
    {
      name: 'published',
      type: 'checkbox',
      label: 'Julkaistu',
      defaultValue: true,
    },
  ],
}
