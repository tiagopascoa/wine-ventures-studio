import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutUsMain',
  title: 'About Us - Main',
  type: 'document',
  i18n: true,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'aboutUsMainText',
      title: 'About Us',
      type: 'text',
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
})
