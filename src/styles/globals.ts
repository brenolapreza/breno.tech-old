import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background-linear-color);
    color: var(--secundary-color);
    
    min-height: 100vh;
    height: 100%;
    font-family: 'Roboto', sans-serif;
  }

  h1, h2, h3, h4, a, p, span {
    margin: 0;
    padding: 0;
  }

  @media (max-width: 1080px){
    html {
        font-size: 93.75%;
    }
  }
  @media (max-width: 720px){
    html {
        font-size: 87.5%;
    }
  }

  .container {
    margin: 0 auto;
    max-width: 900px;
    @media (max-width: 786px) {
    width: 80%;
  }

  }
  
  :root {
    --background-linear-color: linear-gradient(180deg, #1B1C22 0%, #101114 100%);
    --main-color: #222329;
    --secundary-color: #B2B3BA;
    --third-color: #54555B;
    --background-logo: #121316;
    --color-hover: #2E334E;

    --dark-blue-600: #0C0F16;
    --dark-blue-200: #525568;
  }
`;
