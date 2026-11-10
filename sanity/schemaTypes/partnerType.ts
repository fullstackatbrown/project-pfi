import {defineField, defineType} from 'sanity'

export const partnerType = defineType({
  name: 'partner',
  title: 'Partner',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'address',
      type: 'string',
      description: 'Street address, used to place the partner on the map',
    }),
    defineField({
      name: 'description',
      type: 'text',
      rows: 4,
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'address'},
  },
})
