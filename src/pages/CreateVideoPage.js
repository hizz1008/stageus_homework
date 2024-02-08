import React from "react";
import CreateVideoContainer from "../container/CreateVideoContainer";
import HeaderContainer from "../container/HeaderContainer.js";
import useRedirectNoCookies from "../hooks/useRedirectNoCookie.js";
import { useCookies } from "react-cookie";

import { Div } from "../style/LayoutStyle";

const CreateVideoPage = () => {
  const [cookie, setCookie] = useCookies(["token"]);
  useRedirectNoCookies(cookie.token);
  return (
    <>
      <HeaderContainer />
      <Div $flex="h_center_center" $width="100%" $height="100vh">
        <CreateVideoContainer />
      </Div>
    </>
  );
};

export default CreateVideoPage;
