import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'privacyPolicy',
  title: 'Privacy Policy - Page',
  type: 'document',
  i18n: true,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'privacyPolicyText',
      title: 'Privacy Policy',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
})