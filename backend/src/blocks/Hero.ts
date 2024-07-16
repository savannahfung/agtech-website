import type { Block } from "payload/types";

const Hero: Block = {
  slug: "hero",
  labels: {
    singular: "Hero",
    plural: "Heroes",
  },
  fields: [
    {
      name: "heading",
      label: "Heading",
      type: "text",
      required: true,
    },
    {
      name: "content",
      label: "Content",
      type: "richText",
    },
    {
      name: "background",
      label: "Background",
      type: "upload",
      relationTo: "media",
    },
  ],
};

export default Hero;
