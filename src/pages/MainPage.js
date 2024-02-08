import React, { useEffect } from "react";

import styled from "styled-components";
import { Main } from "../style/LayoutStyle";

import NavSlide from "../container/NavSlide.js";
import HeaderContainer from "../container/HeaderContainer.js";
import NavContainer from "../container/NavContainer.js";
import VideoArticles from "../container/VideoArticles.js";

import useRedirectNoCookies from "../hooks/useRedirectNoCookie.js";
import { useCookies } from "react-cookie";

const MainStyle = styled(Main)`
  flex-wrap: wrap;
`;

const MainPage = () => {
  const [cookie, setCookie] = useCookies(["token"]);
  useRedirectNoCookies(cookie.token);
  useEffect(() => {
    if (!cookie.token) {
      window.location.href = "/login";
    }
  }, [cookie]);
  return (
    <>
      <HeaderContainer />
      <NavSlide />
      <NavContainer />
      <MainStyle $width="100%" $padding="60px 0 0 100px" $flex="h_start_start">
        <VideoArticles />
      </MainStyle>
    </>
  );
};

export default MainPage;
