import { createGlobalStyle } from "styled-components";
import "react-perfect-scrollbar/dist/css/styles.css";
export default createGlobalStyle`
  &::-webkit-scrollbar{width:10px; background:#333;}
  &::-webkit-scrollbar-track{background: rgba(0,0,0,0.1);}
  &::-webkit-scrollbar-thumb{border-radius:10px; background:#000;}
  *{
    margin: 0;
    padding: 0;
    outline:none;
    box-sizing:border-box;
  }
  *:focus{
    outline:none;
  }
  html,body,#root{
    height: 100%;
  }
  body{
    -webkit-font-smoothing:antialiased;
    background:#111;
    color:white;
  }
  body,input,button{
    font: 14px 'Roboto',sans-serif;
  }
  a{
    text-decoration:none;
  }
  ul{
    list-style:none;
  }
  button{
    cursor:pointer;
  }
`;
