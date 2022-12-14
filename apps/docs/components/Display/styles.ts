import styled from "@emotion/styled";

export const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin-top: 1rem;
  }

  .grid {
    display: flex;
    flex-direction: column;
    width: 100%;
    flex: 1;

    padding-left: 33vw;

    @media (min-width: 768px) {
      flex-direction: row;
      padding-left: 20vw;
    }

    h3 {
      margin-top: 1rem;
      margin-bottom: 0.5rem;
    }

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 33%;

      .text-field {
        width: 80%;
        margin: 0 auto;
      }
    }
  }
`;
