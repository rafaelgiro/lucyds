import { css, SerializedStyles, Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonProps } from "./Button";

export const LucyButton = styled.button<LucyButtonProps>`
  border-radius: 0.25rem;
  ${({ priority, theme }) => priotities[priority](theme)}
  ${({ size }) => sizes[size]}
  position: relative;
  transition: margin-top 0.2s ease-out;

  &::after {
    content: "";
    position: absolute;
    width: calc(100% + 0.5rem);
    height: calc(100% + 0.5rem);
    top: 0%;
    left: 0%;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.color.fontPrimary};
    z-index: -1;
    transition: all 0.15s ease-out;
  }

  &:active {
    margin-top: 0.125rem;
    &::after {
      top: 0%;
      left: 0%;
      width: 100%;
      height: 100%;
    }
  }

  &:hover {
    &::after {
      top: 2%;
      left: 1%;
    }
  }
`;

const priotities: Record<
  NonNullable<LucyButtonProps["priority"]>,
  (theme: Theme) => SerializedStyles
> = {
  primary: (theme: Theme) => css`
    background-color: ${theme.color.highlight};
    box-shadow: 0px 0px 0px 0.25rem ${theme.color.fontPrimary};
  `,
  secondary: (theme: Theme) =>
    css`
      background-color: ${theme.color.backgroundPrimary};
      box-shadow: 0px 0px 0px 0.25rem ${theme.color.fontPrimary};
    `,
  tertiary: (_: Theme) => css`
    &:after {
      display: none;
    }

    span {
      transition: opacity 0.2s ease-out;
      &:hover {
        opacity: 0.7;
      }
    }
  `,
};

const sizes: Record<NonNullable<LucyButtonProps["size"]>, SerializedStyles> = {
  sm: css`
    padding: 0.5rem 1rem 0.25rem 1rem;
  `,
  md: css`
    padding: 0.75rem 1.75rem 0.5rem 1.75rem;
  `,
};

interface LucyButtonProps extends Omit<ButtonProps, "priority" | "size"> {
  priority: NonNullable<ButtonProps["priority"]>;
  size: NonNullable<ButtonProps["size"]>;
}
