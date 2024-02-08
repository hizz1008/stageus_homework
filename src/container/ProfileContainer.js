import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

import styled from "styled-components";
import { Div } from "../style/LayoutStyle";
import { P } from "../style/P";
import { Img } from "../style/Img";

const LinkStyle = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  margin: 10px 0 0 0;
  border-radius: 10px;

  background-color: var(--color-paleGray);
`;

const ProfileContainer = () => {
  const [cookie] = useCookies(["token"]);
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/user`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: cookie.token,
          },
        });
        const result = await response.json();

        if (result.status === 200) {
          setProfileData(result.data);
        } else {
          alert(result.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [cookie.token]);

  // useEffect(() => {
  //   console.log(profileData);
  // }, [profileData]);

  return (
    <>
      <Div $flex="v_center_center" $width="100%" $height="30vh">
        <Img
          $width="50px"
          src={profileData.profileImgPath}
          alt="프로필 이미지"
        />
        <P>아이디 : {profileData.id}</P>
        <P>닉네임 : {profileData.nickname}</P>
        <LinkStyle to="/profileEdit">내 정보 수정</LinkStyle>
      </Div>
    </>
  );
};

export default ProfileContainer;
