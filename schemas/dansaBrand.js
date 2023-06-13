import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dansaBrand',
  title: 'Dansa Brand - Page',
  type: 'document',
  i18n: true,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'dansaBrandText',
      title: 'Dansa Description',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
})
