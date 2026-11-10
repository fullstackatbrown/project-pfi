import {defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'eventName',
      title: 'Event name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'eventDate',
      title: 'Event date',
      type: 'date',
      // date fields store YYYY-MM-DD, not a full ISO timestamp
      initialValue: () => new Date().toISOString().slice(0, 10),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'eventDescription',
      title: 'Event description',
      type: 'text',
    }),
    defineField({
      name: 'topic',
      type: 'string',
    }),
  ],
  orderings: [
    {
      title: 'Event date, newest first',
      name: 'eventDateDesc',
      by: [{field: 'eventDate', direction: 'desc'}],
    },
  ],
  preview: {
    select: {title: 'eventName', subtitle: 'eventDate'},
  },
})
