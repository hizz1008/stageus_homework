import React from "react";
import useHover from "../hooks/useHover";

import { Link } from "react-router-dom";

const IconBtn = (props) => {
  const { elem, iconBtnUseHoverStyle } = props;

  const { style, mouseOver, mouseOut } = useHover(
    iconBtnUseHoverStyle.initialStyle,
    iconBtnUseHoverStyle.hoverStyle
  );

  const iconBtn = (
    <>
      {elem.iconClassName ? (
        <i className={elem.iconClassName} id={elem.iconId || null}></i>
      ) : (
        <img
          src={elem.imgSrc}
          className={elem.imgClassName}
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
        />
      )}
      {elem.textContent ? (
        <p className={elem.pTagClassName}>{elem.textContent}</p>
      ) : null}
      {elem.opacityText ? (
        <p className={elem.opacityTextClassName} style={{ style }}>
          {elem.opacityText}
        </p>
      ) : null}
    </>
  );
  return (
    <>
      {elem.linkClassName ? (
        <Link
          to={elem.LinkTo}
          className={`${elem.linkClassName}`}
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
        >
          {iconBtn}
        </Link>
      ) : (
        <div
          className={elem.divClassName}
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
          onClick={elem.onClick}
        >
          {iconBtn}
        </div>
      )}
    </>
  );
};

export default IconBtn;
