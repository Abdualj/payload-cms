import type { CollectionConfig } from 'payload'

export const News: CollectionConfig = {
  slug: 'news',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'publishedDate', 'author'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Otsikko',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      label: 'URL-polku',
      unique: true,
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
      label: 'Lyhyt kuvaus',
      maxLength: 300,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'Sisältö',
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Pääkuva',
    },
    {
      name: 'author',
      type: 'text',
      label: 'Kirjoittaja',
      defaultValue: 'Pärnänen & Pojat',
    },
    {
      name: 'publishedDate',
      type: 'date',
      required: true,
      label: 'Julkaisupäivä',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'category',
      type: 'select',
      label: 'Kategoria',
      options: [
        { label: 'Uutiset', value: 'news' },
        { label: 'Tarinat', value: 'stories' },
        { label: 'Oppaat', value: 'guides' },
        { label: 'Tapahtumat', value: 'events' },
      ],
    },
    {
      name: 'published',
      type: 'checkbox',
      label: 'Julkaistu',
      defaultValue: true,
    },
  ],
}
