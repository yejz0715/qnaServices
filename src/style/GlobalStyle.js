import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
export const GlobalStyle = createGlobalStyle`

${reset}

html {
  --color-text: #333333;
  --color-text-secondary: #999999;
  --color-primary: #99C9A6;
  --color-background: #ECECEC;
  font-size: 62.5%; 
}



body{
  width:100%;
  height: 100vh;
  background-color:#F7F6F2;
  color: #333;
  margin: 0;
  font-family:  -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;

  font-weight: 600;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-text);

}
a{
      text-decoration: none;
      color: inherit;
  }
  *{
      box-sizing: border-box;
  }
  input, textarea { 
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
    outline: none;
    border:none;
    background-color: transparent;
  }
  
  input{
    outline: none;
    border:none;
    border-bottom: 1px solid gray;
    background-color: transparent;
  }


  button {
     outline: none;
    border: none;
    cursor: pointer;
  }

  select {
    border:none;
    background: none;
     outline: none;
  }
  

`;
