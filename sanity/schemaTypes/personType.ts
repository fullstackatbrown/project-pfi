import {defineField, defineType} from 'sanity'

/**
 * A person shown on the Members, Mentors or Mentees page, chosen by `group`.
 */
export const personType = defineType({
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'group',
      type: 'string',
      description: 'Which page this person appears on',
      options: {
        list: [
          {title: 'Member', value: 'member'},
          {title: 'Mentor', value: 'mentor'},
          {title: 'Mentee', value: 'mentee'},
        ],
        layout: 'radio',
      },
      initialValue: 'member',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      type: 'string',
      description: 'e.g. Founder, Curriculum Lead',
    }),
    defineField({
      name: 'year',
      type: 'string',
      description: 'e.g. Junior, Class of 2027',
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          validation: (rule) =>
            rule.custom((alt, context) =>
              (context.parent as {asset?: unknown})?.asset && !alt
                ? 'Alt text is required when an image is set'
                : true,
            ),
        }),
      ],
    }),
    defineField({
      name: 'bio',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'email',
      type: 'email',
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'role', media: 'image'},
  },
})
