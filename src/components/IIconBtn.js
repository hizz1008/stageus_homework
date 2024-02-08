import React from "react";
import useHover from "../hooks/useHover";

import { Link } from "react-router-dom";

import styled from "styled-components";
import { setFlex } from "../style/SetFlex";

const setSize = (value) => {
  if (value === "medium") {
    return `
    width:24px;
    height:24px;
    `;
  } else if (value === "large") {
    return `
    width:30px;
    height:30px;
    `;
  } else if (value === "xLarge") {
    return `
    width:36px;
    height:36px;
    `;
  }
};

const IconImg = styled.img`
  ${(props) => setSize(props.$size)};
  ${(props) => props.$imgStyle || ""};
  cursor: pointer;
`;

const Icon = styled.i`
  ${(props) => props.iconStyle};
  ${(props) => setFlex(props.$flex)};
  box-sizing: ${(props) => props.$boxSizing || "border-box"};
  width: ${(props) => props.$width || "fit-content"};
  height: ${(props) => props.$height || "fit-content"};
  padding: ${(props) => props.$padding || "0"};
  margin: ${(props) => props.$margin || "0"};
  background-color: ${(props) => props.$bgColor || "initial"};
`;

const TextContent = styled.p`
  ${(props) => props.$textContentStyle || ""};
`;

const OpacityTextBottom = styled.p`
  ${(props) => props.$fontSize || "var(--font-size-normal)"};
  width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 10px 5px;
  margin: 0;
  position: absolute;
  left: 50%;
  bottom: -50px;
  transform: translate(-50%, 0%);
  color: var(--color-white);
  background-color: #1f1f1faf;
  font-size: var(--font-size-small);
  transition: all 0.2s ease-in-out;
  z-index: 1;
`;

const OpacityTextLeft = styled.p`
  ${(props) => props.$fontSize || "var(--font-size-normal)"};
  width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 10px 5px;
  margin: 0;
  position: absolute;
  top: 50%;
  right: 150%;
  transform: translate(0, -50%);
  color: var(--color-white);
  background-color: #1f1f1faf;
  font-size: var(--font-size-small);
  transition: all 0.2s ease-in-out;
  z-index: 1;
`;

const IconDiv = styled.div`
  position: relative;
  ${(props) => props.$divStyle};
`;
const LinkStyle = styled(Link)`
  ${(props) => props.$divStyle};
  ${(props) => {
    return setFlex(props.$flex);
  }};
  padding: ${(props) => props.$padding || "0"};
  margin: ${(props) => props.$margin || "0"};
  font-size: ${(props) => props.$fontSize || "var(--font-size-normal)"};
  border-radius: 5px;
  position: relative;
`;
const IconText = styled(Link)`
  position: relative;
  ${(props) => props.$hover}
  font-size: ${(props) => props.$fontSize || "var(--font-size-normal)"};
  border-radius: 5px;
`;
const IconTextColumn = styled(IconText)`
  ${(props) => {
    return setFlex(props.$flex);
  }};
  padding: ${(props) => props.$padding || "0"};
`;
const IconTextVertical = styled(IconText)`
  ${(props) => {
    return setFlex(props.$flex);
  }};
  padding: ${(props) => props.$padding || "0"};
`;

const IIconBtn = (props) => {
  const { elem, iconBtnUseHoverStyle } = props;
  const { style, mouseOver, mouseOut } = useHover(
    iconBtnUseHoverStyle?.initialStyle,
    iconBtnUseHoverStyle?.hoverStyle
  );
  const iconBtn = (
    <>
      {elem.iconClassName ? (
        <Icon
          className={elem.iconClassName}
          $iconStyle={elem.iconStyle}
          $flex={elem.iconFlex}
        ></Icon>
      ) : (
        <IconImg
          src={elem.imgSrc}
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
          $size={elem.imgSize}
          $imgStyle={elem.imgStyle}
        />
      )}
      {elem.textContent ? (
        <TextContent $textContentStyle={elem.textContentStyle}>
          {elem.textContent}
        </TextContent>
      ) : null}
      {elem.opacityText ? (
        elem.opacityTextPosition === "bottom" ? (
          <OpacityTextBottom style={style}>
            {elem.opacityText}
          </OpacityTextBottom>
        ) : (
          <OpacityTextLeft style={style}>{elem.opacityText}</OpacityTextLeft>
        )
      ) : null}
    </>
  );

  return (
    <>
      {elem.linkActivation ? (
        <LinkStyle
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
          $flex={elem.linkFlex}
          $padding={elem.linkPadding}
          $margin={elem.margin}
          $fontSize={elem.iconFontSize}
          $hover={elem.hoverStyle}
          to={elem.linkTo}
          $linkStyle={elem.linkStyle}
        >
          {iconBtn}
        </LinkStyle>
      ) : (
        <IconDiv
          $divStyle={elem.divStyle}
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
          onClick={elem.onClick}
        >
          {iconBtn}
        </IconDiv>
      )}
    </>
  );
};

export default IIconBtn;

//결합도 게시판의 상태에 따라서 출력되는 종류가 다르다면
//props에 따라 적절한 기능을 출력하도록 분기를 나눔
