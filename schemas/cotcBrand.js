import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'cotcBrand',
  title: 'COTC Brand - Page',
  type: 'document',
  i18n: true,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'cotcBrandText',
      title: 'COTC Description',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
})
