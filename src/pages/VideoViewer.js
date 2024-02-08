import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/videoViewer.css";
import VideoViewerController from "../container/VideoViewerController";
import UserInteractionPanel from "../components/UserInteractionPanel";
import VideoViewerComment from "../container/VideoViewerComment";

import styled from "styled-components";
import { Section, Div } from "../style/LayoutStyle";

import { P } from "../style/P";
import { Img } from "../style/Img";
import { Input } from "../style/Input";

const VideoContainer = styled(Section)`
  position: relative;
`;

const Video = styled(Img)`
  object-fit: contain;
`;

const VideoController = styled(Div)`
  opacity: 0;
  position: absolute;
  bottom: 0;

  color: white;

  font-size: 23px;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

const UserImg = styled(Img)`
  border-radius: 50%;
`;
const CommentInput = styled(Input)`
  border-bottom: 2px solid var(--color-veryPaleGray);
  transition: all 0.3s ease-in-out;
  &:focus {
    border: none;
    outline: none;

    border-bottom: 2px solid black;
  }
`;

const VideoViewer = () => {
  //controller Data
  const leftControllerData = [
    {
      key: "pause",
      divClassName: "controllerDiv",
      iconClassName: "fa-solid fa-pause",
      opacityTextClassName: "controllerText",
      opacityText: "일시정지",
    },
    {
      key: "step",
      divClassName: "controllerDiv",
      iconClassName: "fa-solid fa-forward-step",
      opacityTextClassName: "controllerText",
      opacityText: "다음영상",
    },
    {
      key: "volume",
      divClassName: "controllerDiv",
      iconClassName: "fa-solid fa-volume-high",
      opacityTextClassName: "controllerText",
      opacityText: "음소거",
    },
  ];

  const rightControllerData = [
    {
      key: "subtitles",
      divClassName: "controllerDiv",
      iconClassName: "fa-solid fa-closed-captioning",
      opacityTextClassName: "controllerText",
      opacityText: "자막",
    },
    {
      key: "setting",
      divClassName: "controllerDiv",
      iconClassName: "fa-solid fa-gear",
      opacityTextClassName: "controllerText",
      opacityText: "설정",
    },
    {
      key: "expand",
      divClassName: "controllerDiv",
      iconClassName: "fa-solid fa-expand",
      opacityTextClassName: "controllerText",
      opacityText: "전체화면",
    },
  ];
  // /controller Data

  //데이터
  const { id } = useParams();

  const [videoData, setVideoData] = useState([]);
  const [currentUserData, setCurrentUerData] = useState([]);

  useEffect(() => {
    const dummyVideoData = [
      {
        id: 1,
        title: "Playlist | 겨울을 담은, 재즈",
        uploaderName: "기분Jazz네 | Mood is Jazz",
        uploaderImgSrc:
          "https://yt3.ggpht.com/7C7gf_M2SLHMxYY74vn7QPRJuGrc9Ul2ehvf6LXmHDeAVi4-dBiSOGB8bXhMeLz0GYvqzwbk=s68-c-k-c0x00ffffff-no-rj",
        subscriptionNum: "구독자 10만",
        videoImg:
          "https://i.ytimg.com/vi/Yu_X5ZS8HRo/hq720_live.jpg?sqp=CJiH1KwG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLARSydSuWdSNMYZQmWg0t28i1eF_A",
      },
      {
        id: 2,
        title:
          "[Playlist] 언제 들어도 좋지만 겨울에 들으면 더 좋은 팝송들 첫소절부터 너무 좋아서 호불호 안 갈리는 팝송들",
        uploaderName: "Deep Mood",
        uploaderImgSrc:
          "https://yt3.ggpht.com/XuKC1kmWGrTiPmFIon1kEZf8t54TCqi-uYXqBYQ1NFq0BKDZycvAFtriYtjC3gNqjISpTWYa=s68-c-k-c0x00ffffff-no-rj",
        subscriptionNum: "구독자 11만",
        videoImg:
          "https://i.ytimg.com/vi/7ucNTZa6erM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC8Anlapo9ZxImhNCoS2N-PZQTvzg",
      },
      {
        id: 3,
        title:
          "[뉴스 '꾹'] '5,400명 당원 가입' 고무된 이준석, '이삭줍기 아니냐'는 지적엔..(2024.01.03/MBC뉴스)",
        uploaderName: "MBCNEWS",
        uploaderImgSrc:
          "https://yt3.ggpht.com/ytc/AIf8zZSV9mOz05LJ8ZASnsVwQnTxckiWDS1NwH-GF2nUtQ=s68-c-k-c0x00ffffff-no-rj",
        subscriptionNum: "구독자 12만",
        videoImg:
          "https://i.ytimg.com/vi/RIEJ22hybWE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC44G69RxtM3H1oQeKv54i6ROp0VQ",
      },
      {
        id: 4,
        title:
          "[Playlist] 아니, 이런 노래는 어떻게 아는거야?? 너무 좋자나... | 언제 들어도 좋지만 겨울에 들으면 더 좋은 팝송들",
        uploaderName: "사랑 𝑇𝘩𝑒 𝑀𝘰𝑜𝘯 𝘢𝑛𝘥 𝘛ℎ𝘦 𝘎𝑖𝘳𝑙",
        uploaderImgSrc:
          "https://yt3.ggpht.com/umr8FcGbIRGOY0qMYau4mpSf_q3og-MpCD3e0YbOejGVkmmzfMSuNYI_dg9rxI__ol6SJsm-krU=s68-c-k-c0x00ffffff-no-rj",
        subscriptionNum: "구독자 12만",
        videoImg:
          "https://i.ytimg.com/vi/uQb-4LDXupw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBRhc_c29OnsUiIkxne0ZnANIMi0A",
      },
      {
        id: 5,
        title: "Playlist | 겨울을 담은, 재즈",
        uploaderName: "기분Jazz네 | Mood is Jazz",

        uploaderImgSrc:
          "https://yt3.ggpht.com/7C7gf_M2SLHMxYY74vn7QPRJuGrc9Ul2ehvf6LXmHDeAVi4-dBiSOGB8bXhMeLz0GYvqzwbk=s68-c-k-c0x00ffffff-no-rj",
        subscriptionNum: "구독자 12만",
        videoImg:
          "https://i.ytimg.com/vi/Yu_X5ZS8HRo/hq720_live.jpg?sqp=CJiH1KwG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLARSydSuWdSNMYZQmWg0t28i1eF_A",
      },
      {
        id: 6,
        title:
          "[Playlist] 언제 들어도 좋지만 겨울에 들으면 더 좋은 팝송들 첫소절부터 너무 좋아서 호불호 안 갈리는 팝송들",
        uploaderName: "Deep Mood",
        uploaderImgSrc:
          "https://yt3.ggpht.com/XuKC1kmWGrTiPmFIon1kEZf8t54TCqi-uYXqBYQ1NFq0BKDZycvAFtriYtjC3gNqjISpTWYa=s68-c-k-c0x00ffffff-no-rj",
        subscriptionNum: "구독자 12만",
        videoImg:
          "https://i.ytimg.com/vi/7ucNTZa6erM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC8Anlapo9ZxImhNCoS2N-PZQTvzg",
      },
      {
        id: 7,
        title:
          "[뉴스 '꾹'] '5,400명 당원 가입' 고무된 이준석, '이삭줍기 아니냐'는 지적엔..(2024.01.03/MBC뉴스)",
        uploaderName: "MBCNEWS",
        uploaderImgSrc:
          "https://yt3.ggpht.com/ytc/AIf8zZSV9mOz05LJ8ZASnsVwQnTxckiWDS1NwH-GF2nUtQ=s68-c-k-c0x00ffffff-no-rj",
        subscriptionNum: "구독자 12만",
        videoImg:
          "https://i.ytimg.com/vi/RIEJ22hybWE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC44G69RxtM3H1oQeKv54i6ROp0VQ",
      },
      {
        id: 8,
        title:
          "[Playlist] 아니, 이런 노래는 어떻게 아는거야?? 너무 좋자나... | 언제 들어도 좋지만 겨울에 들으면 더 좋은 팝송들",
        uploaderName: "사랑 𝑇𝘩𝑒 𝑀𝘰𝑜𝘯 𝘢𝑛𝘥 𝘛ℎ𝘦 𝘎𝑖𝘳𝑙",
        uploaderImgSrc:
          "https://yt3.ggpht.com/umr8FcGbIRGOY0qMYau4mpSf_q3og-MpCD3e0YbOejGVkmmzfMSuNYI_dg9rxI__ol6SJsm-krU=s68-c-k-c0x00ffffff-no-rj",
        subscriptionNum: "구독자 12만",
        videoImg:
          "https://i.ytimg.com/vi/uQb-4LDXupw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBRhc_c29OnsUiIkxne0ZnANIMi0A",
      },
      {
        id: 9,
        title: "Playlist | 겨울을 담은, 재즈",
        uploaderName: "기분Jazz네 | Mood is Jazz",
        uploaderImgSrc:
          "https://yt3.ggpht.com/7C7gf_M2SLHMxYY74vn7QPRJuGrc9Ul2ehvf6LXmHDeAVi4-dBiSOGB8bXhMeLz0GYvqzwbk=s68-c-k-c0x00ffffff-no-rj",
        subscriptionNum: "구독자 12만",
        videoImg:
          "https://i.ytimg.com/vi/Yu_X5ZS8HRo/hq720_live.jpg?sqp=CJiH1KwG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLARSydSuWdSNMYZQmWg0t28i1eF_A",
      },
      {
        id: 10,
        title:
          "[Playlist] 언제 들어도 좋지만 겨울에 들으면 더 좋은 팝송들 첫소절부터 너무 좋아서 호불호 안 갈리는 팝송들",
        uploaderName: "Deep Mood",
        uploaderImgSrc:
          "https://yt3.ggpht.com/XuKC1kmWGrTiPmFIon1kEZf8t54TCqi-uYXqBYQ1NFq0BKDZycvAFtriYtjC3gNqjISpTWYa=s68-c-k-c0x00ffffff-no-rj",
        subscriptionNum: "구독자 12만",
        videoImg:
          "https://i.ytimg.com/vi/7ucNTZa6erM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC8Anlapo9ZxImhNCoS2N-PZQTvzg",
      },
      {
        id: 11,
        title:
          "[뉴스 '꾹'] '5,400명 당원 가입' 고무된 이준석, '이삭줍기 아니냐'는 지적엔..(2024.01.03/MBC뉴스)",
        uploaderName: "MBCNEWS",
        uploaderImgSrc:
          "https://yt3.ggpht.com/ytc/AIf8zZSV9mOz05LJ8ZASnsVwQnTxckiWDS1NwH-GF2nUtQ=s68-c-k-c0x00ffffff-no-rj",
        subscriptionNum: "구독자 12만",
        videoImg:
          "https://i.ytimg.com/vi/RIEJ22hybWE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC44G69RxtM3H1oQeKv54i6ROp0VQ",
      },
      {
        id: 12,
        title:
          "[Playlist] 아니, 이런 노래는 어떻게 아는거야?? 너무 좋자나... | 언제 들어도 좋지만 겨울에 들으면 더 좋은 팝송들",
        uploaderName: "사랑 𝑇𝘩𝑒 𝑀𝘰𝑜𝘯 𝘢𝑛𝘥 𝘛ℎ𝘦 𝘎𝑖𝘳𝑙",
        uploaderImgSrc:
          "https://yt3.ggpht.com/umr8FcGbIRGOY0qMYau4mpSf_q3og-MpCD3e0YbOejGVkmmzfMSuNYI_dg9rxI__ol6SJsm-krU=s68-c-k-c0x00ffffff-no-rj",
        subscriptionNum: "구독자 12만",
        videoImg:
          "https://i.ytimg.com/vi/uQb-4LDXupw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBRhc_c29OnsUiIkxne0ZnANIMi0A",
      },
    ];
    const dummyCurrentUserData = {
      img: "https://yt3.ggpht.com/yti/AGOGRCqKQI9WPqH2JQ6d9UfO7H3qcrM7D4zTtLiizl8K=s88-c-k-c0x00ffffff-no-rj",
    };

    const selectVideo = dummyVideoData.find(
      (video) => video.id === parseInt(id, 10)
    );
    if (selectVideo) {
      setVideoData(selectVideo);
    }
    setCurrentUerData(dummyCurrentUserData);
  }, [id]);
  // /데이터

  const [commentCount, setCommentCount] = useState(0);

  const updateCommentCount = (count) => {
    setCommentCount(count);
  };

  return (
    <>
      <VideoContainer
        $flex="h_center_center"
        $width="100%"
        $margin="60px 0 0 0"
        $bgColor="black"
        className="videoContainer"
      >
        <Video $flex="h_start_start" $width="80%" src={videoData.videoImg} />
        <VideoController
          $width="100%"
          $flex="h_between_start"
          $padding="0 15px"
        >
          <VideoViewerController {...{ elem: leftControllerData }} />
          <VideoViewerController {...{ elem: rightControllerData }} />
        </VideoController>
      </VideoContainer>
      <Section $padding="0 20px">
        <h1 className="videoViewerTitle">{videoData.title}</h1>
            <UserInteractionPanel {...{ elem: videoData }} />
      </Section>
      <Section $width="100%" $padding="0 20px">
        <P fontSize="xLarge" fontWeight="large" $margin="20px 0">
          댓글 {commentCount}개
        </P>
        <Div $margin="0 0 15px 0" $flex="h_start_center" $width="100%">
          <UserImg $width="40px" $height="40px" src={currentUserData.img} />
          <CommentInput
            $width="100%"
            $margin="0 0 0 15px"
            $padding="0 0 5px 0"
            className="currentUserCommentInput"
            type="text"
            placeholder="댓글 추가..."
          />
        </Div>
        <VideoViewerComment {...{ updateCommentCount }} />
      </Section>
    </>
  );
};

export default VideoViewer;
