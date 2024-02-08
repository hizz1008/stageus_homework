import React from "react";
import IconBtn from "../components/IconBtn";
import { useState } from "react";
import { useEffect } from "react";

const VideoViewerController = (props) => {
  const { elem } = props;
  const iconBtnUseHoverStyle = {
    initialStyle: { opacity: "0" },
    hoverStyle: { opacity: "1" },
  };

  const [eventKey, setEventKey] = useState("");
  useEffect(() => {
    console.log(`${eventKey}가 눌렸습니다`);
  }, [eventKey]);
  const iconBtnClickEvent = (key) => {
    setEventKey(key);
  };
  return (
    <div className="controller">
      {elem.map((elem) => {
        return (
          <IconBtn
            key={elem.key}
            {...{ elem, iconBtnUseHoverStyle }}
            onClick={() => iconBtnClickEvent(elem.key)}
          />
        );
      })}
    </div>
  );
};

export default VideoViewerController;
