import React, { useState } from "react";

const useHover = (initialStyle, hoverStyle) => {
  const [style, setStyle] = useState(initialStyle);
  const mouseOver = () => {
    setStyle(hoverStyle);
  };
  const mouseOut = () => {
    setStyle(initialStyle);
  };
  return { style, mouseOver, mouseOut };
};

export default useHover;
