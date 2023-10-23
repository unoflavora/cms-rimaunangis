import blockContent from './blockContent'

export default {
  name: 'news',
  type: 'document',
  title: 'News',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Header Image',
    },
    {
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {name: 'alt', title: 'Alt Description', type: 'string'},
            {name: 'attribution', title: 'Attribution', type: 'string'},
          ],
        },
      ],
    },
  ],
}
