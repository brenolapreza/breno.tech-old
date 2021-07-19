import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  img{
    max-width: 100%;
  }

  body {
    color:${props => props.theme.color};
    background-color: ${ props => props.theme.background};
    font-family: var(--font-family-default);
  }

  html {
    --color-main: #2C3038;
    --color-secun: #EFEFEF;
  } 
  
.container{
  max-width: 70%;
  margin: 0 auto;
}
  
  `

  export default GlobalStyle