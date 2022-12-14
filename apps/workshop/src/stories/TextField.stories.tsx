import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextField } from "@lucyds/ui";

export default {
  title: "Example/TextField",
  component: TextField,
  parameters: {
    docs: {
      description: {
        component: "Some component _markdown_",
      },
    },
  },
  argTypes: {
    label: { defaultValue: "Input label" },
    type: {
      defaultValue: "text",
      control: {
        type: "select",
        options: ["text", "password", "email", "number"],
      },
    },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const Default = Template.bind({});
