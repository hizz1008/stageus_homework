import React from "react";
import useHover from "../hooks/useHover";

import { Link } from "react-router-dom";

import styled from "styled-components";
import { Div, Article } from "../style/LayoutStyle";

import { Img } from "../style/Img";
import { H1 } from "../style/H1";
import { P } from "../style/P";

const ArticleStyle = styled(Article)`
  flex: 1 1 290px;
  cursor: pointer;
  position: relative;
`;

const VideoInfoData = styled.div`
  margin: 0;
  color: black;
  opacity: 0.6;
`;

const VideoImgDiv = styled(Div)`
  position: relative;
`;

const VideoImg = styled(Img)`
  transition: all 0.3s ease-in-out;
  object-fit: cover;
`;

const UserImg = styled(Img)`
  object-fit: cover;
  border-radius: 50%;
`;

const apiUrl = process.env.REACT_APP_API_URL;

const VideoArticle = (props) => {
  const dummyImgData =
    "https://i.ytimg.com/vi/VVl-lwpKKFM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCeEZIWloiEB00qciGwGcu6RRxwxA";
  const { elem } = props;
  const { style, mouseOver, mouseOut } = useHover(
    "brightness(100%)",
    "brightness(80%)"
  );

  const borderRadius = style === "brightness(100%)" ? "10px" : "0";

  return (
    <ArticleStyle
      $flex="v_start_start"
      $width="100%"
      $margin="0 29px 0 0"
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
    >
      <Link to={`video-viewer/${elem.postIdx}`}>
        <VideoImgDiv
          $flex="h_center_center"
          $width="100%"
          style={{ filter: style, borderRadius: borderRadius }}
        >
          <VideoImg
            $width="100%"
            src={
              elem.thumbnailImgPath
                ? `${apiUrl}${elem.thumbnailImgPath}`
                : dummyImgData
            }
            alt="영상 이미지"
          />
        </VideoImgDiv>
        <Div $flex="h_start_start" $margin="11px 0">
          <UserImg
            $width="36px"
            $height="36px"
            src={null}
            alt="사용자 프로필"
          />
          <Div $margin="0 0 0 16px">
            <H1 fontWeight="normal" fontSize="medium">
              {elem.createdAt}
            </H1>
            <VideoInfoData>
              {elem.profileImgPath ? (
                <Img src={elem.profileImgPath} alt="Some alt text" />
              ) : null}
              <P $margin="8px 0 3px 0" fontSize="normal">
                {elem.nickname}
              </P>
              <P fontSize="normal">{elem.metaData}</P>
            </VideoInfoData>
          </Div>
        </Div>
      </Link>
    </ArticleStyle>
  );
};

export default VideoArticle;
