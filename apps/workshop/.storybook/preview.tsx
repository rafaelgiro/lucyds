import React from "react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

import { ThemeProvider, defaultColors } from "@lucyds/ui";

export const decorators = [
  (Story) => (
    <ThemeProvider color={defaultColors}>
      <Story />
    </ThemeProvider>
  ),
];
