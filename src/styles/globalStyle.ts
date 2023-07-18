import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    background-image: ${props => props.theme.colors.background};
    background-repeat: no-repeat;
    background-attachment: fixed;
    max-height: 100vh;
    max-width: 100vw;
    color: ${props => props.theme.colors.font};
    font-family: 'Bebas Neue', sans-serif;
  }

  svg {
    max-width: 100px;
    max-height: 100px;
    stroke: ${props => props.theme.colors.font};
    transition: all 300ms ease-in-out;
  }
`
export default GlobalStyle;