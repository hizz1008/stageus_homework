import React, { useEffect } from "react";

import IconBtn from "../components/IconBtn";
import HomeBanner from "../components/HomeBanner";

import { useRecoilState } from "recoil";
import { navToggleAtom } from "../recoil/mainAtom";

import styled from "styled-components";
import { Nav, Div } from "../style/LayoutStyle";

import "../css/navSlide.css";

const NavStyle = styled(Nav)`
  position: fixed;
  top: 0;

  transition: left 0.5s ease-in-out;

  z-index: 2;
`;
const BackgroundColor = styled(Div)`
  position: fixed;
  top: 0;

  z-index: 1;
`;

const NavSlide = () => {
  const [navToggle, setNavToggle] = useRecoilState(navToggleAtom);

  const menuBtnClickEvent = () => {
    setNavToggle(!navToggle);
    console.log(navToggle);
  };

  //props
  const componentStyle = {
    wrapperDiv: {
      $flex: "h_center_center",
      $height: "60px",
      $margin: "0 70px 0 25px",
    },
  };

  const homeBannerUseHoverStyle = {
    initialStyle: { backgroundColor: "inherit" },
    hoverStyle: { backgroundColor: "var(--color-cccccc)" },
  };
  const iconBtnUseHoverStyle = {
    initialStyle: "backgroundColorInital",
    hoverStyle: "backgroundColorf2f2f2",
  };
  // /props
  const dummyData = [
    {
      key: "navSlideHomeLogo",
      linkClassName: "navSlideSectionLogo",
      iconId: "navSlideIcon",
      iconClassName: "fa-solid fa-house",
      pTagClassName: "navSlideSectionText",
      textContent: "홈",
      LinkTo: "/",
    },
    {
      key: "navSlideShortsLogo",
      linkClassName: "navSlideSectionLogo",
      iconId: "navSlideIcon",
      iconClassName: "fa-brands fa-youtube",
      pTagClassName: "navSlideSectionText",
      textContent: "Shorts",
      LinkTo: "/shorts",
    },
    {
      key: "navSlideSubScriberLogo",
      linkClassName: "navSlideSectionLogo",
      iconId: "navSlideIcon",
      iconClassName: "fa-solid fa-pen-to-square",
      pTagClassName: "navSlideSectionText",
      textContent: "SubScriber",
      LinkTo: "/subscriber",
    },
    {
      key: "navSlideLockerLogo",
      linkClassName: "navSlideSectionLogo",
      iconId: "navSlideIcon",
      iconClassName: "fa-solid fa-photo-film",
      pTagClassName: "navSlideSectionText",
      textContent: "보관함",
      LinkTo: "/locker",
    },
  ];

  return (
    <>
      <NavStyle
        $flex="v_start_start"
        $height="100%"
        $bgColor="var(--color-white)"
        style={{ display: navToggle ? "flex" : "none" }}
      >
        <HomeBanner
          {...{ homeBannerUseHoverStyle, menuBtnClickEvent, componentStyle }}
        />
        {dummyData.map((elem) => {
          return <IconBtn key={elem.key} {...{ iconBtnUseHoverStyle, elem }} />;
        })}
      </NavStyle>
      <BackgroundColor
        $width="100vw"
        $height="100%"
        $bgColor="rgba(0,0,0,0.5)"
        style={{ display: navToggle ? "block" : "none" }}
        onClick={menuBtnClickEvent}
      ></BackgroundColor>
    </>
  );
};

export default NavSlide;
