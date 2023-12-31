import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
::before,
::after {
  box-sizing: border-box;
}

body {
  font-family: ${({ theme }) => theme.typography.mainFont};
  background-color: #1f1a1a;
  color: #fff;
  margin: 0;
}

h1,
h2 {
  margin-top: 0;
}

ul,
li {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

a {
    text-decoration: none;
    color: inherit;
  }
`;
export default GlobalStyle;
