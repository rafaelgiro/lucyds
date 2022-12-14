import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Typography } from "@lucyds/ui";

export default {
  title: "Example/Typography",
  component: Typography,
  parameters: {
    docs: {
      description: {
        component: "Some component _markdown_",
      },
    },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Paragraph = Template.bind({});
Paragraph.args = {
  variant: "paragraph",
  children: "Lorem Ipsum",
};

export const Button = Template.bind({});
Button.args = {
  variant: "button",
  children: "Lorem Ipsum",
};

export const Label = Template.bind({});
Label.args = {
  variant: "label",
  children: "Lorem Ipsum",
};
