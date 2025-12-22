import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'certification',
  title: 'Certification',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'issuer', title: 'Issuer', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'date', title: 'Date', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'badge', title: 'Badge Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'link', title: 'Verification Link', type: 'url' }),
    defineField({ name: 'order', title: 'Display Order', type: 'number', validation: (Rule) => Rule.required() }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
