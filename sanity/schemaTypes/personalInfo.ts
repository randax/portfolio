import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'personalInfo',
  title: 'Personal Information',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'role', title: 'Role/Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'intro', title: 'Introduction', type: 'text', validation: (Rule) => Rule.required() }),
    defineField({ name: 'bio', title: 'Bio Paragraphs', type: 'array', of: [{ type: 'text' }] }),
    defineField({ name: 'skills', title: 'Skills', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'profileImage', title: 'Profile Image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'social',
      title: 'Social Links',
      type: 'object',
      fields: [
        { name: 'github', type: 'url', title: 'GitHub' },
        { name: 'linkedin', type: 'url', title: 'LinkedIn' },
        { name: 'twitter', type: 'url', title: 'Twitter/X' },
        { name: 'email', type: 'string', title: 'Email' },
      ],
    }),
  ],
})
