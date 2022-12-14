import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonProps } from "./Button";

export const LucyBytton = styled.button<LucyButtonProps>`
  ${({ priority }) => priotities[priority]}
`;

const priotities: Record<
  NonNullable<LucyButtonProps["priority"]>,
  SerializedStyles
> = {
  primary: css``,
  secondary: css``,
  tertiary: css``,
};

interface LucyButtonProps extends Omit<ButtonProps, "priority"> {
  priority: NonNullable<ButtonProps["priority"]>;
}
