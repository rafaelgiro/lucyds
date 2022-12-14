import { TextFieldContainer } from "./styles";

export const TextField = (props: TextFieldProps) => {
  const { hasError, hintText, ...other } = props;

  return (
    <TextFieldContainer>
      <input {...other} />
    </TextFieldContainer>
  );
};

interface TextFieldProps extends React.HTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
  hintText?: string;
}
