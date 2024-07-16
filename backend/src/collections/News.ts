import { CollectionConfig } from "payload/types";

const News: CollectionConfig = {
  slug: "news",
  labels: {
    singular: "News",
    plural: "News",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "slug",
      label: "Slug",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "content",
      label: "Content",
      type: "richText",
      required: true,
    },
  ],
};

export default News;
