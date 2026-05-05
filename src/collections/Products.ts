import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'price', 'category', 'inStock'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Tuotteen nimi',
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
      label: 'Kuvaus',
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      label: 'Hinta (€)',
      min: 0,
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      label: 'Kategoria',
      options: [
        {
          label: 'Mekaaniset kirjoituskoneet',
          value: 'mechanical',
        },
        {
          label: 'Sähköiset kirjoituskoneet',
          value: 'electric',
        },
        {
          label: 'Vintage kirjoituskoneet',
          value: 'vintage',
        },
        {
          label: 'Tarvikkeet',
          value: 'accessories',
        },
        {
          label: 'Varaosat',
          value: 'parts',
        },
      ],
    },
    {
      name: 'manufacturer',
      type: 'text',
      label: 'Valmistaja',
    },
    {
      name: 'year',
      type: 'number',
      label: 'Valmistusvuosi',
    },
    {
      name: 'condition',
      type: 'select',
      label: 'Kunto',
      options: [
        {
          label: 'Uusi',
          value: 'new',
        },
        {
          label: 'Erinomainen',
          value: 'excellent',
        },
        {
          label: 'Hyvä',
          value: 'good',
        },
        {
          label: 'Tyydyttävä',
          value: 'fair',
        },
        {
          label: 'Kunnostettu',
          value: 'restored',
        },
      ],
    },
    {
      name: 'inStock',
      type: 'checkbox',
      label: 'Varastossa',
      defaultValue: true,
    },
    {
      name: 'images',
      type: 'array',
      label: 'Kuvat',
      minRows: 1,
      maxRows: 10,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Esitelty tuote',
      defaultValue: false,
    },
    {
      name: 'specifications',
      type: 'group',
      label: 'Tekniset tiedot',
      fields: [
        {
          name: 'weight',
          type: 'text',
          label: 'Paino',
        },
        {
          name: 'dimensions',
          type: 'text',
          label: 'Mitat',
        },
        {
          name: 'color',
          type: 'text',
          label: 'Väri',
        },
        {
          name: 'keyboardLayout',
          type: 'select',
          label: 'Näppäinasettelu',
          options: [
            { label: 'QWERTY', value: 'qwerty' },
            { label: 'AZERTY', value: 'azerty' },
            { label: 'QWERTZ', value: 'qwertz' },
            { label: 'Muu', value: 'other' },
          ],
        },
      ],
    },
  ],
}
