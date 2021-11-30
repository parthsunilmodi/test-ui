import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    background-color: ${(props) => props.theme.colors.background}
  }
  input[type="date"] {
    display:block;
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    min-height: 3.5em;
  }
`
