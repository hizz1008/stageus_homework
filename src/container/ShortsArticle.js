import React from "react";

import styled from "styled-components";
import { Section, Div } from "../style/LayoutStyle";

import { Img } from "../style/Img";
import { P } from "../style/P";

import UserInteractionPanel from "../components/UserInteractionPanel";
import ShortsRight from "../container/ShortsRight";

const ShortsLeft = styled(Div)`
  position: relative;
`;

const Top = styled(Section)`
  position: absolute;
  color: white;
`;

const Mid = styled(Section)`
  z-index: -1;
`;

const Bottom = styled(Section)`
  position: absolute;
  bottom: 0;
  color: white;
`;

const ShortsImg = styled(Img)`
  filter: brightness(90%);
  border-radius: 10px;
  object-fit: cover;
`;

const ShortsArticle = (props) => {
  const { elem } = props;

  return (
    <Section $flex="h_start_end" $height="100%" $margin="5% 0">
      <ShortsLeft $flex="v_column_start" $width="450px" $height="800px">
        <Top $flex="h_between_center" $width="100%" $padding="15px 25px">
          <i className="fa-solid fa-play"></i>
          <i className="fa-solid fa-volume-high"></i>
        </Top>
        <Mid $width="100%" $height="100%">
          <ShortsImg $width="100%" $height="100%" src={elem.shortsImgSrc} />
        </Mid>
        <Bottom $flex="v_column_start" $margin="0 0 5% 5%">
          <UserInteractionPanel {...{ elem }} />
          <P fontWeight="large" $margin="10px 0">
            {elem.shortsTitle}
          </P>
          <P fontWeight="large">{elem.shortsText}</P>
        </Bottom>
      </ShortsLeft>
      <ShortsRight />
    </Section>
  );
};

export default ShortsArticle;
