import { PsychedelicBox } from "@lucyds/ui";
import styled from "@emotion/styled";

export const ScreenContainer = styled(PsychedelicBox)`
  width: 200%;
  margin-left: -10vw;
  margin-right: -30vw;
  transform-style: preserve-3d;
  transform: perspective(50rem) rotateY(20deg);
  position: relative;

  @media (min-width: 768px) {
    width: 100%;
    margin-left: 10vw;
    margin-right: -5vw;
  }

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 85%;
    height: 85%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const FormContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  button {
    margin-left: auto;
  }

  & > * {
    margin-bottom: 1.5rem;
  }
`;

export const MuffinContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  p {
    display: none;

    @media (min-width: 768px) {
      display: block;
      max-width: 20rem;
      font-size: 2rem;
      text-transform: uppercase;
      transform: rotate(-5deg);
    }
  }

  .cook {
    width: 40%;
    margin-right: 2rem;
  }
`;
