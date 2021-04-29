import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: #333;
    font-family: 'Josefin Sans', sans-serif;
    color: #EAEAEA;
  }

  h1 {
    font-weight: 600;
    font-size: 6.5rem; 
  }

  h2 {
    font-weight: 600;
    font-size: 5.5rem; 
  }

  p {
    font-size: 1.8rem;
    line-height: 120%;
  }
`;

export default GlobalStyles;
