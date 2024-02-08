import React from "react";
import SignUpContainer from "../container/SignUpContainer";

import { Div } from "../style/LayoutStyle";

const LoginPage = () => {
  return (
    <Div $flex="h_center_center" $width="100%" $height="100vh">
      <SignUpContainer />
    </Div>
  );
};

export default LoginPage;
