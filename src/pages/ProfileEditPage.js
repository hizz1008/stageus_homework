import React from "react";
import HeaderContainer from "../container/HeaderContainer.js";
import ProfileEditContainer from "../container/ProfileEditContainer";
import { Div } from "../style/LayoutStyle.js";

const ProfileEditPage = () => {
  return (
    <Div $flex="h_center_center" $width="100%" $height="100vh">
      <HeaderContainer />
      <ProfileEditContainer />
    </Div>
  );
};

export default ProfileEditPage;
