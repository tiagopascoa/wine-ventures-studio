import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'termsAndConditions',
  title: 'Terms and Conditions - Page',
  type: 'document',
  i18n: true,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'termsAndConditionsText',
      title: 'Terms and Conditions',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
})