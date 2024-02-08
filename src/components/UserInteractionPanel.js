import React from "react";

import styled from "styled-components";
import { Div } from "../style/LayoutStyle";

import { Img } from "../style/Img";
import { Input } from "../style/Input";
import { P } from "../style/P";
import "../css/userInteractionPanel.css";

const BorderImg = styled(Img)`
  border-radius: 50%;
  cursor: pointer;
`;

const PTagCursor = styled(P)`
  cursor: pointer;
`;

const InputBtn = styled(Input)`
  border-radius: 20px;
  cursor: pointer;
`;
const UserInteractionPanel = (props) => {
  const { elem } = props;

  return (
    <Div $flex="h_start_center">
      <BorderImg $width="36px" $height="36px" src={elem.uploaderImgSrc} />
      <Div $flex="v_start_center">
        <PTagCursor fontWeight="large" $margin="0 10px">
          {elem.uploaderName}
        </PTagCursor>
        {elem.subscriptionNum ? (
          <P $margin="0 10px" fontSize="small">
            {elem.subscriptionNum}
          </P>
        ) : null}
      </Div>
      <InputBtn
        type="button"
        value="구독"
        $width="48px"
        $height="32px"
        $bgColor="lightGray"
      />
    </Div>
  );
};

export default UserInteractionPanel;
