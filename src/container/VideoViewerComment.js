import React, { useEffect, useState } from "react";
import Comment from "../components/Comment";

import styled from "styled-components";
import { Div } from "../style/LayoutStyle";
import IIconBtn from "../components/IIconBtn";

const VideoViewerComment = (props) => {
  const { updateCommentCount } = props;
  const [commentData, setCommentData] = useState([]);

  useEffect(() => {
    const dummyCommentData = [
      {
        key: "1",
        userImg:
          "https://yt3.ggpht.com/ytc/AIf8zZTn9-3DkImqcLH077qKznDVvQYEHTXbWMUyCw=s48-c-k-c0x00ffffff-no-rj",
        userName: "사용자1",
        text: "댓글 내용입니다 1",
      },
      {
        key: "2",
        userImg:
          "https://yt3.ggpht.com/dxUhQc8exDJA-XwQ-gzU-CjdJ8qVZFmgQibe7mT4yK1CRxSOX9DHiuoVhocqH8C_Qp-THR_JiQ=s48-c-k-c0x00ffffff-no-rj",
        userName: "사용자2",
        text: "댓글 내용입니다 2",
      },
      {
        key: "3",
        userImg:
          "https://yt3.ggpht.com/M90gL8-vd__Zbe19c-ul-8h39dNnfYUSyPum-giSvNsibDxEjaVf2pBNJqfwTOGzhms6AyY9wA=s48-c-k-c0x00ffffff-no-rj",
        userName: "사용자3",
        text: "댓글 내용입니다 3",
      },
      {
        key: "4",
        userImg:
          "https://yt3.ggpht.com/dxUhQc8exDJA-XwQ-gzU-CjdJ8qVZFmgQibe7mT4yK1CRxSOX9DHiuoVhocqH8C_Qp-THR_JiQ=s48-c-k-c0x00ffffff-no-rj",
        userName: "사용자4",
        text: "댓글 내용입니다 4",
      },
      {
        key: "5",
        userImg:
          "https://yt3.ggpht.com/ytc/AIf8zZTn9-3DkImqcLH077qKznDVvQYEHTXbWMUyCw=s48-c-k-c0x00ffffff-no-rj",
        userName: "사용자5",
        text: "댓글 내용입니다 5",
      },
    ];

    setCommentData(dummyCommentData);
    updateCommentCount(commentData.length);
  }, [commentData.length, updateCommentCount]);
  const iconData = [
    {
      key: "thumbsUp",
      iconStyle: `position:relative; cursor: pointer;`,
      flex: "h_center_center",
      iconClassName: "fa-regular fa-thumbs-up",
      opacityTextClassName: "socialText",
      opacityText: "좋아요",
    },
    {
      key: "thumbsDown",
      iconStyle: `position:relative; cursor: pointer;`,
      flex: "h_center_center",
      iconClassName: "fa-regular fa-thumbs-down",
      opacityTextClassName: "socialText",
      opacityText: "싫어요",
    },
  ];
  const iconBtnUseHoverStyle = {
    initialStyle: { display: "none" },
    hoverStyle: { display: "block" },
  };

  return (
    <Div $margin="40px 0 0 0">
      {commentData.map((commentData) => (
        <Div key={commentData.key}>
          <Comment {...{ commentData }} />
          <Div $flex="h_start_start">
            {iconData.map((elem) => (
              <IIconBtn key={elem.key} {...{ elem, iconBtnUseHoverStyle }} />
            ))}
          </Div>
        </Div>
      ))}
    </Div>
  );
};
export default VideoViewerComment;
