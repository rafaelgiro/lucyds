import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: ThemeColors;
    screens: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
  }
}
