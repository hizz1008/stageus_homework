import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataInputEntry from "../components/DataInputEntry";
import { useCookies } from "react-cookie";

const ProfileEditContainer = () => {
  const navigate = useNavigate();
  const [cookie, setCookie] = useCookies(["token"]);
  const [file, setFile] = useState(null);

  const onClickEvent = async () => {
    const formData = new FormData();
    formData.append("img", file);

    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/user/profile-img`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "multipart/formdata",
          Authorization: cookie.token,
        },
        body: formData,
      }
    );
    const result = await response.json();

    if (result.status === 200) {
      console.log(result);
      navigate("/profile");
    } else {
      alert(result.message);
    }
  };

  const inputElem = [
    {
      key: "img",
      inputType: "file",
      name: "img",
    },
  ];
  const btnElem = [
    {
      key: "editBtn",
      titleText: "내 정보 수정",
      onClickEvent: onClickEvent,
    },
  ];
  const titleText = "내 정보 수정";

  React.useEffect(() => {
    console.log(file);
  }, [file]);

  return (
    <>
      <DataInputEntry
        {...{
          elem: inputElem,
          titleText,
          inputValues: file,
          setInputValues: setFile,
          btnElem,
        }}
      />
    </>
  );
};
export default ProfileEditContainer;
