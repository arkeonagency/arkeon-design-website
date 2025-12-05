import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local', // Keeps files in your repo (best for developers)
  },
  collections: {
    posts: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description' }),
        pubDate: fields.text({ label: 'Date (e.g. Oct 24, 2023)' }),
        author: fields.text({ label: 'Author', defaultValue: 'Arkeon Team' }),
        heroImage: fields.text({ label: 'Image URL (e.g. /images/name.jpg)' }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
  },
});