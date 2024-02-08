import React from "react";
import ReactDom from "react-dom/client";
import GlobalStyles from "./style/GlobalStyles";

import { RecoilRoot } from "recoil";

import App from "./App";

ReactDom.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <GlobalStyles />
    <App />
  </RecoilRoot>
);
