import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
  margin:0;
  padding:0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  }
  &:focus + input , textarea {
    outline:none;
  }
  button {
    cursor: pointer;
    border: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  li {
    list-style: none;
  }
  #root{
    max-width: 100vw;
    max-height: 100vh;
  }

 html {
   @media ( max-width: 1124px ){
        font-size: 95%;
    }
  } 


`;
