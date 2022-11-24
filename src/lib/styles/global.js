import { createGlobalStyle } from "styled-components";
import media from "@lib/styles/media";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    font-family: "Spoqa Han Sans Neo", "sans-serif";
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    font-family: "Spoqa Han Sans Neo", "sans-serif";
    font-size: $font-size-16;
  }

  :root {
    ${media.small}{
    --rsbs-max-w: 65vw;
    --rsbs-ml:auto;
    --rsbs-mr:auto;
    }
    --rsbs-handle-bg: #fff;
    --rsbs-antigap-scale-y: 0;
    --rsbs-backdrop-bg: #fff;
    --rsbs-bg: #fff;
    --rsbs-backdrop-opacity: 1;
    --rsbs-content-opacity: 1;
    --rsbs-overlay-h: 0px;
    --rsbs-overlay-rounded: 16px;
    --rsbs-overlay-translate-y: 0px;
  }

  body {
    font-family: ;
    color: $;
  }
  h1 {
    margin: 0;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  button,
  input,
  select,
  textarea {
    border: 0;
    background-color: transparent;
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }

  img {
    border-style: none;
  }
  
  a,
  button {
    cursor: pointer;
  }
  
  ul,
  li,
  ol {
    list-style: none;
    padding-left: 0;
  }
  
`;

export default GlobalStyle;
