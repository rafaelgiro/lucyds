import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "@lucyds/ui";

export default {
  title: "Example/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: "Some component _markdown_",
      },
    },
  },
  argTypes: {
    size: {
      options: ["sm", "md"],
      defaultValue: "md",
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  priority: "primary",
  children: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  priority: "secondary",
  children: "Button",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  priority: "tertiary",
  children: "Button",
};
