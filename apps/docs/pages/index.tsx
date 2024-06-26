import { Logo, PsychedelicBox, ThemeProvider } from "@lucyds/ui";
import { Global, css } from "@emotion/react";
import { Snek } from "../components/Snek/Snek";
import { Screen } from "../components/Screen/Screen";
import { Eyes } from "../components/Eyes/Eyes";
import { Display } from "../components/Display/Display";

// TODO: Refactor everything, just testing for now
export default function Docs() {
  return (
    <div>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          html,
          body,
          #__next,
          #__next > div {
            width: 100%;
            height: 100%;
          }

          main {
            overflow: hidden;
          }

          .container {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding-top: 1rem;
            position: relative;
            z-index: 10;
          }

          .snek {
            width: 100%;
            max-width: 33rem;
          }

          .eyes {
            position: fixed;
            width: 100%;
            max-width: 35vw;
            bottom: 0;
            left: 0;
            z-index: 20;

            @media (min-width: 768px) {
              max-width: 20vw;
            }
          }
        `}
      />
      <ThemeProvider>
        <main>
          <div className="container">
            <Screen />
            <Snek />
          </div>
          <Display />
          <Eyes />
        </main>
      </ThemeProvider>
    </div>
  );
}
