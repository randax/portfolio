import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'speaking',
  title: 'Speaking Engagement',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'event', title: 'Event', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'location', title: 'Location', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'date', title: 'Date', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'videoLink', title: 'Video Link', type: 'url' }),
    defineField({ name: 'slidesLink', title: 'Slides Link', type: 'url' }),
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
