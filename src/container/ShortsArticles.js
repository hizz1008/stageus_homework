import React from "react";
import ShortsArticle from "./ShortsArticle";

import shortsImg from "../image/shortsImg.jpeg";

const ShortsArticles = () =>{
  const ShortsData = [
    {
      divClass: "uploaderInfo",
      shortsImgSrc: shortsImg,
      uploaderImgClass: "uploaderImg",
      uploaderImgSrc:
        "https://yt3.ggpht.com/yti/AGOGRCqKQI9WPqH2JQ6d9UfO7H3qcrM7D4zTtLiizl8K=s88-c-k-c0x00ffffff-no-rj",
      uploaderNameClass: "uploaderName",
      uploaderName: "게시자 이름",
      subscriptionBtnClass: "subscriptionBtn",
      shortsTitle: "쇼츠제목",
      shortsText: "쇼츠내용입니다.",
    },
    {
      divClass: "uploaderInfo",
      shortsImgSrc: shortsImg,
      uploaderImgClass: "uploaderImg",
      uploaderImgSrc:
        "https://yt3.ggpht.com/yti/AGOGRCqKQI9WPqH2JQ6d9UfO7H3qcrM7D4zTtLiizl8K=s88-c-k-c0x00ffffff-no-rj",
      uploaderNameClass: "uploaderName",
      uploaderName: "게시자 이름",
      subscriptionBtnClass: "subscriptionBtn",
      shortsTitle: "쇼츠제목",
      shortsText: "쇼츠내용입니다.",
    },
    {
      divClass: "uploaderInfo",
      shortsImgSrc: shortsImg,
      uploaderImgClass: "uploaderImg",
      uploaderImgSrc:
        "https://yt3.ggpht.com/yti/AGOGRCqKQI9WPqH2JQ6d9UfO7H3qcrM7D4zTtLiizl8K=s88-c-k-c0x00ffffff-no-rj",
      uploaderNameClass: "uploaderName",
      uploaderName: "게시자 이름",
      subscriptionBtnClass: "subscriptionBtn",
      shortsTitle: "쇼츠제목",
      shortsText: "쇼츠내용입니다.",
    },
    {
      divClass: "uploaderInfo",
      shortsImgSrc: shortsImg,
      uploaderImgClass: "uploaderImg",
      uploaderImgSrc:
        "https://yt3.ggpht.com/yti/AGOGRCqKQI9WPqH2JQ6d9UfO7H3qcrM7D4zTtLiizl8K=s88-c-k-c0x00ffffff-no-rj",
      uploaderNameClass: "uploaderName",
      uploaderName: "게시자 이름",
      subscriptionBtnClass: "subscriptionBtn",
      shortsTitle: "쇼츠제목",
      shortsText: "쇼츠내용입니다.",
    },
    {
      divClass: "uploaderInfo",
      shortsImgSrc: shortsImg,
      uploaderImgClass: "uploaderImg",
      uploaderImgSrc:
        "https://yt3.ggpht.com/yti/AGOGRCqKQI9WPqH2JQ6d9UfO7H3qcrM7D4zTtLiizl8K=s88-c-k-c0x00ffffff-no-rj",
      uploaderNameClass: "uploaderName",
      uploaderName: "게시자 이름",
      subscriptionBtnClass: "subscriptionBtn",
      shortsTitle: "쇼츠제목",
      shortsText: "쇼츠내용입니다.",
    },
  ];

  return(
    <>
      {ShortsData.map((elem, index) => (
        <ShortsArticle key={index} {...{ elem }} />
      ))}
    </>
  )
}
export default ShortsArticles