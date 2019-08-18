import { createGlobalStyle } from 'styled-components';

const Style = createGlobalStyle`
  * { box-sizing: border-box; }
  
  body {
    margin: 0;
    padding: 0;
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    font-family: 'Roboto', sans-serif;
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

`;

export const theme = {
  fontSizes: [12, 14, 16, 24, 32, 48, 64, 96, 128],
  fontFamily: 'Roboto',
  space: [
    // margin and padding
    0,
    4,
    8,
    16,
    32,
    64,
    128,
    256,
  ],
  colors: {
    blue: '#571DE8',
    red: '#e10',
    lightviolet: '#f4efff',
  },
}

export default Style;