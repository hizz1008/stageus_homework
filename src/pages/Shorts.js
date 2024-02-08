import React from "react";

import styled from "styled-components";
import { Main } from "../style/LayoutStyle";

import NavContainer from "../container/NavContainer";
import ShortsArticles from "../container/ShortsArticles";

const Shorts = () => {
  return (
    <>
      <NavContainer />
      <Main $flex="v_center_center" $width="100%" $padding="60px 0 0 100px">
        <ShortsArticles />
      </Main>
    </>
  );
};

export default Shorts;
