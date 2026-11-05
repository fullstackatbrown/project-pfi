import {defineField, defineType} from 'sanity'

/**
 * 
 * Fields: name, title, type, fiel
 */
export const personType = defineType({
  name: 'PFIPerson',
  title: 'Person',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      type: 'text',
    }),
    defineField({
      name: 'role',
      type: 'text',
    }),
    defineField({
      name: 'Year',
      type: 'text',
    }),
        defineField({
      name: 'image',
      type: 'image',
    }),
      defineField({
      name: 'bio',
      type: 'image',
    }),
        defineField({
      name: 'email',
      type: 'email',
    }),
  ],
})
