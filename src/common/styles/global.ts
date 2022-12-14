import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  html,
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100vw;
    min-height: 100%;
    margin: 0 auto;
  }
  
  * {
    box-sizing: border-box;
  }
  button {
    cursor: pointer;
    border: none;
    outline: none;
    -webkit-appearance: none;
    border-radius: 0;
    padding: 0;
  }
  input {
    -webkit-appearance: none;
    -webkit-border-radius: 0;
  }
  input:focus {
    outline: none;
  }
  textarea {
    box-sizing: border-box;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
  textarea:focus {
    outline: none;
  }
  a {
    text-decoration:none;
  }
  input[disabled] {
    background-color: white;
  }
`;

export default GlobalStyle;
