import { useMemo } from "react";
import { PsychodelicBoxProps } from "./interfaces";
import { BackgroundVisual, StyledPsychedelicBox } from "./styles";

export const PsychedelicBox = (props: PsychodelicBoxProps) => {
  const { waves = 4, children, id, ...other } = props;

  console.log(id);

  return (
    <StyledPsychedelicBox {...other}>
      {children}
      {Array.from({ length: waves }, (_, i) => (
        <BackgroundVisual key={`${id}-${i}`} index={i} uniqueId={id}>
          {children}
        </BackgroundVisual>
      ))}
    </StyledPsychedelicBox>
  );
};
