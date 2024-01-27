

const project = {
    name: "project",
    title: "Projects",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "name" }
      },
      {
        name: "tagline",
        title: "Tagline",
        type: "string",
      },
      {
        name: "topic",
        title: "Topic",
        type: "string",
        options: {
          list: [
            { "title": "Web Design", "value": "Web Design"},
            { "title": "Marketing", "value": "Marketing"},
            { "title": "Misc", "value": "Misc"},

          ],
        }
      },
      {
        name: "author",
        title: "Author",
        type: "string",
      },
      {
        name: "author_link",
        title: "Author_Link",
        type: "url"
      },

      {
        name: "image",
        title: "Image",
        type: "image",
        options: { hotspot: true },
        fields: [
          {
            name: "alt",
            title: "Alt",
            type: "string"
          }
        ]
      },
      {
        name: "url",
        title: "URL",
        type: "url"
      },
      {
        name: "content",
        title: "Content",
        type: "array",
        of: [
          {
            type: "block",
            
          },
          {
            type: 'image',
            fields: [
              {
                name: "alt",
                title: "Alt",
                type: "string"
              }
            ]
          }
        ],
      },
      {
        name: "closing",
        title: "Closing",
        type: "array",
        of: [{ type: "block" }]
      }
    ],
    orderings: [
      {
        title: 'Release Date, New',
        name: 'releaseDateDesc',
        by: [
          {field: '_createdAt', direction: 'desc'}
        ]
      },
      {
        title: 'Release Date, Old',
        name: 'releaseDateAsc',
        by: [
          {field: '_createdAt', direction: 'asc'}
        ]
      },
    ],
  }
  
  export default project;