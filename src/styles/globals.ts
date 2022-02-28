import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background-linear-color);
    color: var(--secundary-color);
    
    height: 100vh;
    font-family: 'Roboto', sans-serif;
  }

  h1, h2, h3, h4, a, p, span {
    margin: 0;
    padding: 0;
  }

  .container {
    margin: 0 auto;
    max-width: 900px;
  }
  
  :root {
    --background-linear-color: linear-gradient(180deg, #1B1C22 0%, #101114 100%);
    --main-color: #222329;
    --secundary-color: #B2B3BA;
    --third-color: #54555B;
    --background-logo: #121316;
    --color-hover: #2E334E;
  }
`;
