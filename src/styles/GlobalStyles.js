import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body {
  background: ${(p) => p.theme.bodyBgColor};
  min-height: 100vh;
  margin: 0;
  color: ${(p) => p.theme.bodyFontColor};
  font-family: 'Kaushan Script';
}`;

export default GlobalStyles;
