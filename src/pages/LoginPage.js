import React, { useEffect } from "react";
import LoginContainer from "../container/LoginContainer";

import { Div } from "../style/LayoutStyle";

import { useCookies } from "react-cookie";

const LoginPage = () => {
  const [cookie, setCookie] = useCookies(["token"]);
  useEffect(() => {
    if (cookie.token) {
      window.location.href = "/";
    }
  }, [cookie]);
  return (
    <Div $flex="h_center_center" $width="100%" $height="100vh">
      <LoginContainer />
    </Div>
  );
};

export default LoginPage;
