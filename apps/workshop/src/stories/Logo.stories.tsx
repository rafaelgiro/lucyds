import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Logo } from "@lucyds/ui";

export default {
  title: "Example/Logo",
  component: Logo,
  parameters: {
    docs: {
      description: {
        component: "Some component _markdown_",
      },
    },
  },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
