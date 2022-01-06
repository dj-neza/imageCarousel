import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    width: 100vw;
    max-width: 100%;
    height: 100vh;
    min-height: 100vh;
    overflow: scroll;
    margin: 0;
    padding: 0;
    a {
      cursor: pointer;
    }
    svg {
      pointer-events: none;
    }
    background-color: #18242F;
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  #root {
    height: 100%;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
