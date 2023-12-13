import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
  slug: "users",
  auth: {
    verify: {
      generateEmailHTML: ({ token }) => {
        return `<p>Hello from PhiShop! Please verify your email</p>`;
      },
    },
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: "role",
      required: true,
      defaultValue: "user",
      admin: {
        condition: () => false,
      },
      type: "select",
      options: [
        {
          label: "Admin",
          value: "amdin",
        },
        { label: "User", value: "user" },
      ],
    },
  ],
};
