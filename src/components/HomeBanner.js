import React from "react";
import useHover from "../hooks/useHover";
import { Link } from "react-router-dom";

import menuBtnIcon from "../image/menuBtn.png";
import mainLogoIcon from "../image/mainLogo.jpg";

import styled from "styled-components";
import { Div } from "../style/LayoutStyle";
import { Img } from "../style/Img";

const MenuBarDiv = styled(Div)`
  font-size: 20px;

  padding: 8px;

  cursor: pointer;
  object-fit: contain;

  transition: all 0.2s ease-in-out;
  border-radius: 50%;
`;

const LogoLink = styled(Link)`
  display: flex;
`;

const HomeBanner = (props) => {
  const { homeBannerUseHoverStyle, menuBtnClickEvent } = props;

  const { wrapperDiv } = props.componentStyle;

  const { style, mouseOver, mouseOut } = useHover(
    homeBannerUseHoverStyle.initialStyle,
    homeBannerUseHoverStyle.hoverStyle
  );

  return (
    <Div
      $flex={wrapperDiv.$flex}
      $width={wrapperDiv.$width}
      $margin={wrapperDiv.$margin}
      $height={wrapperDiv.$height}
    >
      <MenuBarDiv
        $flex="h_center_center"
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
        onClick={menuBtnClickEvent}
        style={style}
      >
        <Img $width="20px" $height="20px" src={menuBtnIcon} alt="메뉴 버튼" />
      </MenuBarDiv>
      <LogoLink to="/">
        <Img
          $width="100px"
          $padding="0 20px"
          src={mainLogoIcon}
          alt="유튜브 메인로고"
        />
      </LogoLink>
    </Div>
  );
};

export default HomeBanner;
