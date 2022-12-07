import { css } from "@emotion/react";
import styled from "@emotion/styled";

function getAxis() {
  const max = -45;
  const min = -55;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getDelay() {
  const max = 2;
  const min = 0;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const StyledPsychedelicBox = styled.div`
  position: relative;
`;

export const BackgroundVisual = styled.div<{ index: number; uniqueId: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.3;

  ${({ index, uniqueId }) => {
    const positions = [
      { x: `${getAxis()}%`, y: `${getAxis()}%`, delay: getDelay() },
      { x: `${getAxis()}%`, y: `${getAxis()}%`, delay: getDelay() },
      { x: `${getAxis()}%`, y: `${getAxis()}%`, delay: getDelay() },
      { x: `${getAxis()}%`, y: `${getAxis()}%`, delay: getDelay() },
    ];

    return css`
      animation: move-around-${uniqueId}-${index} 4s ease-out infinite;
      animation-delay: ${positions[index].delay}s;
      @keyframes move-around-${uniqueId}-${index} {
        0% {
          transform: translate(-50%, -50%);
        }

        50% {
          transform: translate(${positions[index].x}, ${positions[index].y});
        }

        100% {
          transform: translate(-50%, -50%);
        }
      }
    `;
  }}
`;
