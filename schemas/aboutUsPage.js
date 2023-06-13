import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutUsPage',
  title: 'About Us - Page',
  type: 'document',
  i18n: true,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'missionAndVision',
      title: 'Mission & Vision',
      type: 'blockContent',
    }),
    defineField({
      name: 'leadership',
      title: 'Leadership',
      type: 'blockContent',
    }),
    defineField({
      name: 'leadershipImageOne',
      title: 'Leadership Image One',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'leadershipImageTwo',
      title: 'Leadership Image Two',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'sustainability',
      title: 'Sustainability',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
})
