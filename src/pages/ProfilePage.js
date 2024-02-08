import React from "react";
import HeaderContainer from "../container/HeaderContainer";
import ProfileContainer from "../container/ProfileContainer";

import useRedirectNoCookies from "../hooks/useRedirectNoCookie.js";
import { useCookies } from "react-cookie";


const ProfilePage = () => {
  const [cookie, setCookie] = useCookies(["token"]);
  useRedirectNoCookies(cookie.token);
  return (
    <>
      <HeaderContainer />
      <ProfileContainer />
    </>
  );
};

export default ProfilePage;
