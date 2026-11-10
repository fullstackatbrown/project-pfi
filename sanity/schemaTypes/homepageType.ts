import {defineField, defineType} from 'sanity'

// Singleton: structure.ts pins this to the fixed document ID `homepage`
export const homepageType = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'missionStatement',
      title: 'Mission statement',
      type: 'text',
    }),
    defineField({
      name: 'visionStatement',
      title: 'Vision statement',
      type: 'text',
    }),
    defineField({
      name: 'valuesStatement',
      title: 'Values statement',
      type: 'text',
    }),
  ],
  preview: {
    prepare: () => ({title: 'Homepage'}),
  },
})
