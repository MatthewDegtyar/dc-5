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
        of: [{ type: "block" }]
      },
      {
        name: "closing",
        title: "Closing",
        type: "array",
        of: [{ type: "block" }]
      }
    ]
  }
  
  export default project;