import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html, button {
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

*, *::after, *:before {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.fontColor};
}


li {
  list-style-type: none;
}
`;
