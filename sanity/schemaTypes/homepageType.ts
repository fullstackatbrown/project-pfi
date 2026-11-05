import {defineField, defineType} from 'sanity'

export const homepageType = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'object',
  fields: [
    defineField({
      name: 'missionStatement',
      type: 'text',
    }),
    defineField({
      name: 'visionStatement',
      type: 'text',
    }),
    defineField({
      name: 'valuesStatement',
      type: 'text',
    }),
  ],
})
 
