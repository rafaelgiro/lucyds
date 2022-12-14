import { TextFieldContainer } from "./styles";

export const TextField = (props: TextFieldProps) => {
  const { hasError, hintText, ...other } = props;

  return (
    <TextFieldContainer>
      <input {...other} />
    </TextFieldContainer>
  );
};

export interface TextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  /**
   * If true, the input will display different styles on his border,
   * label and hintText.
   */
  hasError?: boolean;
  /**
   * The text that will be displayed on the bottom of the input.
   */
  hintText?: string;
  /**
   * The label that will be displayed on the top of the input.
   */
  label: string;
  /**
   * Text type of type of the input.
   *
   * @default 'text'
   */
  type?: "text" | "password" | "email" | "number";
}
