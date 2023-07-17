import { createGlobalStyle } from 'styled-components'



export const GlobalStyle = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    --webkit-font-smoothing: antialiased;
    --moz-osx-font-smoothing: grayscale;
  }


  body {
    background-color: #111111;
    color: #ffffff;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
  }
`