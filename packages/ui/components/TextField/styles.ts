import styled from "@emotion/styled";
import { TextFieldProps } from "./TextField";

export const LucyTextField = styled.div<LucyTextFieldProps>`
  position: relative;

  label {
    display: flex;
    flex-direction: column;

    span {
      display: inline-block;
      margin-left: 1rem;
    }
  }

  & > span {
    display: inline-block;
    margin-top: 0.75rem;
    margin-left: 1rem;
  }

  input {
    margin-top: 0.5rem;
    padding: 0 1rem;
    height: 2.5rem;
    background-color: #fff;
    border: none;
    border-radius: 1.5rem;
    font-family: "Josefin Sans", sans-serif;
    box-shadow: 0px 0px 0px 0.25rem
      ${({ theme, hasError }) =>
        hasError ? theme.color.error : theme.color.fontPrimary};
    outline: none;
  }

  &::after {
    content: "";
    position: absolute;
    width: calc(100% + 0.5rem);
    height: 3rem;
    top: 1.25rem;
    left: 0%;
    border-radius: 1.5rem;
    background-color: ${({ theme, hasError }) =>
      hasError ? theme.color.error : theme.color.fontPrimary};
    z-index: -1;
    transition: top 0.2s ease-out, left 0.1s ease-out;
  }

  &:focus-within,
  &:hover {
    &::after {
      top: 1.375rem;
      left: 0.125rem;
    }
  }
`;

interface LucyTextFieldProps extends Omit<TextFieldProps, "label"> {}
