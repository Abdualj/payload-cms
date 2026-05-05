import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Sivuston asetukset',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      required: true,
      label: 'Sivuston nimi',
      defaultValue: 'Kirjoituskonekauppa Pärnänen & Pojat',
    },
    {
      name: 'tagline',
      type: 'text',
      label: 'Iskulause',
      defaultValue: 'Klassisia kirjoituskoneita vuodesta 1952',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Logo',
    },
    {
      name: 'contactInfo',
      type: 'group',
      label: 'Yhteystiedot',
      fields: [
        {
          name: 'email',
          type: 'email',
          label: 'Sähköposti',
          required: true,
        },
        {
          name: 'phone',
          type: 'text',
          label: 'Puhelin',
        },
        {
          name: 'address',
          type: 'textarea',
          label: 'Osoite',
        },
        {
          name: 'openingHours',
          type: 'textarea',
          label: 'Aukioloajat',
        },
      ],
    },
    {
      name: 'socialMedia',
      type: 'group',
      label: 'Sosiaalinen media',
      fields: [
        {
          name: 'facebook',
          type: 'text',
          label: 'Facebook URL',
        },
        {
          name: 'instagram',
          type: 'text',
          label: 'Instagram URL',
        },
        {
          name: 'twitter',
          type: 'text',
          label: 'Twitter URL',
        },
      ],
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO-asetukset',
      fields: [
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta-kuvaus',
          maxLength: 160,
        },
        {
          name: 'keywords',
          type: 'text',
          label: 'Avainsanat',
        },
      ],
    },
  ],
}
