import {defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'object',
  fields: [
    defineField({
      name: 'eventName',
      type: 'text',
    }),
    defineField({
      name: 'eventDate',
      type: 'date',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'eventDescription',
      type: 'text',
    }),
        defineField({
      name: 'topic',
      type: 'text',
    }),
  ],
})
