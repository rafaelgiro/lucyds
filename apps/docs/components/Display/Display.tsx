import {
  Button,
  Logo,
  PsychedelicBox,
  TextField,
  Typography,
} from "@lucyds/ui";
import { DisplayContainer } from "./styles";

export const Display = () => {
  return (
    <DisplayContainer>
      <Logo />
      <Typography variant="heading" htmlTag="h2">
        <strong>COMPONENTS</strong>
      </Typography>
      <Typography variant="hint" htmlTag="p">
        (still playing with it!)
      </Typography>
      <div className="grid">
        <div>
          <Typography variant="heading" htmlTag="h3">
            Button
          </Typography>
          <Button>Hello!</Button>
        </div>

        <div>
          <Typography variant="heading" htmlTag="h3">
            TextField
          </Typography>
          <div className="text-field">
            <TextField label="Hello There!" />
          </div>
        </div>

        <div>
          <Typography variant="heading" htmlTag="h3">
            Psychedelic Box
          </Typography>
          <PsychedelicBox id="cook">
            <svg
              width="100"
              viewBox="0 0 146 146"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="73"
                cy="73"
                r="69"
                fill="#F5C264"
                stroke="#381753"
                strokeWidth="8"
              />
              <path
                d="M57 101.703C41.8154 106.864 27.8961 43 57 43"
                stroke="#381753"
                strokeWidth="24"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </PsychedelicBox>
        </div>
      </div>
    </DisplayContainer>
  );
};
