import React from "react";
import styled from "styled-components";
import { Nav } from "../style/LayoutStyle";

import useHover from "../hooks/useHover";
import IIconBtn from "../components/IIconBtn";

const NavStyle = styled(Nav)`
  position: fixed;
  top: 60px;
  left: 0px;
`;

const NavContainer = () => {
  const iconData = [
    {
      key: "home",
      linkActivation: true,
      hoverStyle: `
        &:hover{
          background-color:var(--color-lightGray);
        }
      `,
      linkFlex: "v_center_center",
      linkPadding: "20px 0",
      iconClassName: "fa-solid fa-house",
      iconFontSize: "var(--font-size-xxLarge)",
      textContentStyle: `
        font-size: 8px;
        font-weight: 400;
      
        margin-top: 8px;
        margin-bottom: 0;
      `,
      textContent: "홈",
      LinkTo: "/",
    },
    {
      key: "shorts",
      linkActivation: true,
      hoverStyle: `
        &:hover{
          background-color:var(--color-lightGray);
        }
      `,
      linkFlex: "v_center_center",
      linkPadding: "20px 0",
      iconClassName: "fa-brands fa-youtube",
      iconFontSize: "var(--font-size-xxLarge)",
      textContentStyle: `
        font-size: 8px;
        font-weight: 400;
      
        margin-top: 8px;
        margin-bottom: 0;
      `,
      textContent: "Shorts",
      LinkTo: "/shorts",
    },
    {
      key: "subscriber",
      linkActivation: true,
      hoverStyle: `
        &:hover{
          background-color:var(--color-lightGray);
        }
      `,
      linkFlex: "v_center_center",
      linkPadding: "20px 0",
      iconClassName: "fa-solid fa-pen-to-square",
      iconFontSize: "var(--font-size-xxLarge)",
      textContentStyle: `
        font-size: 8px;
        font-weight: 400;
      
        margin-top: 8px;
        margin-bottom: 0;
      `,
      textContent: "Subscriber",
      LinkTo: "/subscriber",
    },
    {
      key: "locker",
      linkActivation: true,
      hoverStyle: `
        &:hover{
          background-color:var(--color-lightGray);
        }
      `,
      linkFlex: "v_center_center",
      linkPadding: "20px 0",
      iconClassName: "fa-solid fa-photo-film",
      iconFontSize: "var(--font-size-xxLarge)",
      textContentStyle: `
        font-size: 8px;
        font-weight: 400;
      
        margin-top: 8px;
        margin-bottom: 0;
      `,
      textContent: "보관함",
      LinkTo: "/locker",
    },
  ];

  const iconBtnUseHoverStyle = {
    initialStyle: { backgroundColor: "#f2f2f2" },
    hoverStyle: { backgroundColor: "initial" },
  };

  return (
    <NavStyle
      $width="75px"
      $height="100vh"
      $padding="0 4px"
      $bgColor="var(--color-white)"
    >
      {iconData.map((elem) => {
        return <IIconBtn key={elem.key} {...{ elem, iconBtnUseHoverStyle }} />;
      })}
    </NavStyle>
  );
};
export default NavContainer;
