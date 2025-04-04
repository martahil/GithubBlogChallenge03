import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    
  }

  body {
    background: #071422;
    color: #AFC2D4;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: Nunito;
  }
`;


