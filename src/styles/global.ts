import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    color: ${(props) => props.theme.default.pallet['base-text']};
    background: ${(props) => props.theme.default.pallet['base-background']};
  }
  
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 1rem;
    box-shadow: none;
  }
  
  button {
    border: 0;
    margin: 8px;
    border-radius: 8px;
  }
`
