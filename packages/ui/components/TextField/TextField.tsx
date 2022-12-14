import { Typography } from "../Typography";
import { LucyTextField } from "./styles";

export const TextField = (props: TextFieldProps) => {
  const { hasError, hintText, label, id, type = "text", ...other } = props;

  return (
    <LucyTextField>
      <label htmlFor={id}>
        <Typography variant="label" hasError={hasError}>
          {label}
        </Typography>
        <input
          type={type}
          id={id}
          aria-invalid={hasError}
          aria-describedby={`${id}-hint`}
          {...other}
        />
      </label>
      {hintText && (
        <Typography variant="hint" id={`${id}-hint`} hasError={hasError}>
          {hintText}
        </Typography>
      )}
    </LucyTextField>
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
