import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";

import { ThemeProvider, defaultColors } from "./contexts/Theme";

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ThemeProvider color={defaultColors}>{children}</ThemeProvider>;
};

/**
 * @link https://testing-library.com/docs/react-testing-library/setup/#custom-render
 */
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
