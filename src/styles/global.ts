import styled, { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-background.svg';

export const Signature = styled.small`
  a {
    display: flex;
    margin-top: 80px;
    text-decoration: none;
    color: #0366d6;
  }
`;

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: #E5E5E5 url(${githubBackground}) no-repeat 70% top;
    -webkit-font-smooth: antialiased;
  }

  body, input, button{
    font: 16px 'Roboto', sans-serif;
  }

  #root{
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button{
    cursor: pointer;
  }
`;
