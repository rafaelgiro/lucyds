import { Button, TextField } from "@lucyds/ui";
import { FormContainer } from "./styles";

export const Form = () => {
  return (
    <FormContainer>
      <TextField id="lucy-t" label="Username" />
      <TextField id="lucy-p" label="Password" type="password" hasError />
      <Button>LOGIN</Button>
    </FormContainer>
  );
};
