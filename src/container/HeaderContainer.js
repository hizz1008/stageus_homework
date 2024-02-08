import React, { useState } from "react";
import { Link } from "react-router-dom";

import HomeBanner from "../components/HomeBanner.js";
import IconBtn from "../components/IconBtn.js";
import IIconBtn from "../components/IIconBtn.js";
import cameraIcon from "../image/camera.png";
import bellIcon from "../image/bell.png";

import styled from "styled-components";
import { Input } from "../style/Input.js";
import { Header, Section, Div } from "../style/LayoutStyle.js";

import { useRecoilState } from "recoil";
import { navToggleAtom } from "../recoil/mainAtom.js";

const YouTubeHeader = styled(Header)`
  position: fixed;
  top: 0;

  z-index: 1;
`;

const SectionCenter = styled(Section)`
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: 700px;
`;

const SarchBarDiv = styled(Div)`
  flex-basis: 500px;
  flex-shrink: 1;
  position: relative;
`;
const SearchInput = styled(Input)`
  box-sizing: border-box;
  border-style: none;
  border: 1px solid #cccccc;
  border-radius: 20px 0 0 20px;
  z-index: 1;
  &:focus {
    outline: 1px solid blue;
  }
`;
const SearchBtnDiv = styled(Div)`
  border-color: #f2f2f2;
  border: 1px solid #cccccc;
  border-radius: 0 20px 20px 0;
  border-left: 0px;
  background-color: #f8f8f8;
  position: relative;
`;

const KeybordImg = styled.i`
  position: absolute;
  right: 8px;
  line-height: 36px;
`;
const SearchGlass = styled.i`
  position: absolute;
  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);
`;

const HeaderContainer = () => {
  const createVideoClickEvnet = async () => {
    const response = await fetch(``);
  };

  const [navToggle, setNavToggle] = useRecoilState(navToggleAtom);
  const menuBtnClickEvent = () => {
    setNavToggle(!navToggle);
  };

  const homeBannerUseHoverStyle = {
    initialStyle: { backgroundColor: "inherit" },
    hoverStyle: { backgroundColor: "var(--color-cccccc)" },
  };
  const componentStyle = {
    wrapperDiv: {
      $flex: "h_start_center",
      $width: "30%",
    },
  };
  const iconBtnUseHoverStyle = {
    initialStyle: { display: "none" },
    hoverStyle: { display: "flex" },
  };

  const voiceBtn = {
    key: "pulsIcon",
    iconClassName: "fa-solid fa-microphone",
    divStyle: `
      display: flex;
      align-items: center;
      justify-content: center;
      width:39px;
      height:36px;
      background-color: var(--color-softLightGray);
      border-radius: 50%;
      margin-left: 16px;
      position: relative;
    `,
    iconStyle: `
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      font-size: 16px;
      cursor: pointer;
    `,
    opacityText: "음성으로 검색",
    opacityTextPosition: "bottom",
  };

  const iconData = [
    {
      key: "pulsIcon",
      imgSrc: cameraIcon,
      linkActivation: true,
      linkTo: "/createVideo",
      linkFlex: "h_center_center",
      margin: "0 5px",
      imgSize: "medium",
      opacityText: "만들기",
      opacityTextPosition: "bottom",
    },
    {
      key: "bellIcon",
      divStyle: `
        display: flex;
        justifyContent: "center";
        alignItems: "center";
        position: "relative";
        width: "24px";
        height: "24px";
        margin:0 5px;
      `,
      imgSrc: bellIcon,
      imgSize: "medium",
      opacityText: "알림",
      opacityTextPosition: "bottom",
    },
    {
      key: "userIcon",
      linkActivation: true,
      linkTo: "/profile",
      linkStyle: `margin: 0 5px;`,
      imgSrc:
        "https://yt3.ggpht.com/yti/AGOGRCqKQI9WPqH2JQ6d9UfO7H3qcrM7D4zTtLiizl8K=s88-c-k-c0x00ffffff-no-rj",
      imgSize: "xLarge",
      imgStyle: `
      display: flex;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
      `,
    },
  ];

  return (
    <YouTubeHeader
      $flex="h_between_center"
      $width="100%"
      $height="60px"
      $padding="0 20px"
      $bgColor="var(--color-white)"
    >
      <HomeBanner
        {...{ homeBannerUseHoverStyle, menuBtnClickEvent, componentStyle }}
      />
      <SectionCenter $width="40%" $height="37px" $flex="h_start_start">
        <SarchBarDiv $width="100%" $flex="h_start_center">
          <SearchInput
            $flex="h_start_start"
            $width="100%"
            $height="100%"
            $padding="10px 0 10px 30px"
            type="text"
            placeholder="검색"
          />
          <KeybordImg className="fa-solid fa-keyboard"></KeybordImg>
        </SarchBarDiv>
        <SearchBtnDiv $width="8%" $height="100%">
          <SearchGlass
            className="fa-solid fa-magnifying-glass"
            id="searchGlass"
          ></SearchGlass>
        </SearchBtnDiv>
        <IIconBtn
          key={voiceBtn.key}
          {...{ elem: voiceBtn, iconBtnUseHoverStyle }}
        />
      </SectionCenter>
      <Section $width="30%" $flex="h_end_center">
        {iconData.map((elem) => {
          return (
            <IIconBtn key={elem.key} {...{ elem, iconBtnUseHoverStyle }} />
          );
        })}
      </Section>
    </YouTubeHeader>
  );
};
export default HeaderContainer;
