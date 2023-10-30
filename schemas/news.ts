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
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'date',
      type: 'date',
      title: 'Published Date',
    },
    {
      title: 'Url',
      name: 'Url',
      type: 'url',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Header Image',
    },
  ],
}
