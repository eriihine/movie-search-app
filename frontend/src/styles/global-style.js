import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.background};;
    color: ${(props) => props.theme.colors.text};
    min-width: 800px;
    overflow-x: hidden;
  }
`;
