import React from "react";

import IIconBtn from "../components/IIconBtn";

import thumbsUp from "../image/thumbs_up.png";
import thumbsDown from "../image/thumbs_down.png";
import comment from "../image/comment.png";
import share from "../image/share.png";
import more from "../image/more.png";
import styled from "styled-components";
import { Section } from "../style/LayoutStyle";

const ShortsRightSection = styled(Section)`
  margin-left: 15px;
`;

const ShortsRight = () => {
  const sideIIconBtnData = [
    {
      key: "like",
      divStyle: `
        margin-bottom:10px;
      `,
      imgSize: "large",
      imgSrc: thumbsUp,
      textContent: "2.5만",
      opacityText: "이 동영상이 마음에 듭니다.",
      opacityTextPosition: "left",
    },
    {
      key: "dislike",
      divStyle: `
        margin-bottom:10px;
      `,
      imgSize: "large",
      imgSrc: thumbsDown,
      textContent: "싫어요",
      opacityText: "이 동영상이 마음에 들지 않습니다.",
      opacityTextPosition: "left",
    },
    {
      key: "comment",
      divStyle: `
        margin-bottom:10px;
      `,
      imgSize: "large",
      imgSrc: comment,
      textContent: "354",
      opacityText: "댓글",
      opacityTextPosition: "left",
    },
    {
      key: "share",
      divStyle: `
        margin-bottom:10px;
      `,
      imgSize: "large",
      imgSrc: share,
      textContent: "공유",
      opacityText: "공유",
      opacityTextPosition: "left",
    },
    {
      key: "more",
      divStyle: `
        margin-bottom:10px;
      `,
      imgSize: "large",
      imgSrc: more,
    },
  ];

  const iconBtnUseHoverStyle = {
    initialStyle: { display: "none" },
    hoverStyle: { display: "flex" },
  };

  return (
    <Section $margin="0 0 0 15px">
      {sideIIconBtnData.map((elem) => {
        return <IIconBtn key={elem.key} {...{ elem, iconBtnUseHoverStyle }} />;
      })}
    </Section>
  );
};

export default ShortsRight;
