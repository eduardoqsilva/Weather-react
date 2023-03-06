import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #1d1d1d;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    color: #fff;
  }
`