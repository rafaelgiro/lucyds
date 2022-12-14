import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { TypographyProps } from "./Typography";

export const LucyTypography = styled.div<LucyTypographyProps>`
  color: ${(props) => `${props.theme.color.fontPrimary}`};

  &.paragraph {
    font-size: 1rem;
  }

  &.subtitle {
    font-size: 0.75rem;
  }

  &.heading {
    font-size: 1.25rem;
  }
`;

const variants: Record<
  NonNullable<LucyTypographyProps["variant"]>,
  SerializedStyles
> = {
  label: css``,
  button: css``,
  paragraph: css``,
};

interface LucyTypographyProps extends Omit<TypographyProps, "priority"> {
  variant: NonNullable<TypographyProps["variant"]>;
}
