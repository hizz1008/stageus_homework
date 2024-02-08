import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import VideoArticle from "./VideoArticle";

const VideoArticles = () => {
  const [cookie, setCookie, removeCookie] = useCookies(["token"]);
  const [pageIdx, setPageIdx] = useState(1);
  const [videoData, setVideoData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(cookie.token);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/post/all?page=${pageIdx}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: cookie.token,
            },
          }
        );
        const result = await response.json();

        if (result.status === 200) {
          setVideoData(result.data.postArray);
        } else if (result.status === 401) {
          removeCookie("token");
          navigate("/login");
        } else {
          alert(result.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [pageIdx, cookie.token]);
  // useEffect(() => {
  //   console.log(videoData);
  // }, [videoData]);

  return (
    <>
      {videoData?.map((elem) => (
        <VideoArticle key={elem.postIdx} {...{ elem }} />
      ))}
    </>
  );
};

export default VideoArticles;
