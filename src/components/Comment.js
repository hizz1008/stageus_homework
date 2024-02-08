import React from "react";

import styled from "styled-components";
import { Div } from "../style/LayoutStyle.js";
import { P } from "../style/P";
import { Img } from "../style/Img.js";

const UserImg = styled(Img)`
  border-radius: 50%;
`;

const Comment = (props) => {
  const { commentData } = props;
  return (
    <Div $flex="h_start_start" $width="100%" $margin="0 0 15px 0">
      <UserImg $width="40px" $height="40px" src={commentData.userImg} />
      <Div $margin="0 0 0 15px">
        <P $fontWeight="bold" size="medium">
          {commentData.userName}
        </P>
        <P $fontWeight="bold" size="medium">
          {commentData.text}
        </P>
      </Div>
    </Div>
  );
};

export default Comment;
