import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { TypographyProps } from "./Typography";

export const LucyTypography = styled.div<LucyTypographyProps>`
  color: ${({ theme, hasError }) =>
    hasError ? theme.color.error : theme.color.fontPrimary};
  ${({ variant }) => variants[variant]}
`;

const variants: Record<
  NonNullable<LucyTypographyProps["variant"]>,
  SerializedStyles
> = {
  label: css`
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.075rem;
  `,
  button: css`
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
  `,
  paragraph: css`
    font-size: 1rem;
    font-weight: 400;
  `,
  hint: css`
    font-size: 0.75rem;
    font-weight: 400;
  `,
  heading: css`
    font-size: 2rem;
    font-weight: 500;
  `,
};

interface LucyTypographyProps extends Omit<TypographyProps, "priority"> {
  variant: NonNullable<TypographyProps["variant"]>;
}
