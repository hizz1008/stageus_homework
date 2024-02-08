import React, { useState } from "react";
import { Div } from "../style/LayoutStyle";

import DataInputEntry from "../components/DataInputEntry";

const SignUpContainer = () => {
  const [inputValues, setInputValues] = useState({
    id: "",
    pw: "",
    nickname: "",
  });
  const onClickEvent = async () => {
    let formData = new FormData();
    formData.append("id", inputValues.id);
    formData.append("pw", inputValues.pw);
    formData.append("nickname", inputValues.nickname);
    if (!/^[a-z][a-z0-9]{6,16}$/i.test(inputValues.id)) {
      alert("아이디를 바르게 입력해주세요");
      return;
    } else if (
      !/^(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/.test(inputValues.pw)
    ) {
      alert("비밀번호를 바르게 입력해주세요");
      return;
    } else if (!/^[가-힣a-zA-Z]{2,6}$/.test(inputValues.nickname)) {
      alert("닉네임을 바르게 입력해주세요");
      return;
    }
    const response = await fetch(`${process.env.REACT_APP_API_URL}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formData,
    });
    const result = await response.json();

    if (result.success) {
      window.location.href = "/login";
    } else {
      alert(result.message);
    }
  };
  const inputElem = [
    {
      key: "id",
      placeholder: "ID",
      inputType: "text",
    },
    {
      key: "pw",
      placeholder: "PW",
      inputType: "text",
    },
    {
      key: "nickname",
      placeholder: "nickname",
      inputType: "text",
    },
  ];
  const titleText = "회원가입";
  const btnElem = [
    {
      key: "signUp",
      titleText: "회원가입",
      onClickEvent: onClickEvent,
    },
  ];


  return (
    <Div $flex="v_center_center">
      <DataInputEntry
        {...{
          elem: inputElem,
          titleText,
          onClickEvent,
          setInputValues,
          btnElem,
          inputValues,
        }}
      />
    </Div>
  );
};

export default SignUpContainer;
