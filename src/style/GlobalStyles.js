import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root{
    --color-white:white;
    --color-softLightGray:#f2f2f2;
    --color-lightGray:#f3f3f3;
    --color-veryLightGray:#f8f8f8;
    --color-paleGray: #cccccc;
    --color-veryPaleGray:#eeeeee;

    --font-size-small:12px;
    --font-size-normal:14px;
    --font-size-medium:16px;
    --font-size-large:18px;
    --font-size-xLarge:20px;
    --font-size-xxLarge:24px;

    --font-weight-small:200;
    --font-weight-normal:400;
    --font-weight-medium:600;
    --font-weight-large:800;
  }
`;
export default GlobalStyles;
