import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { Div } from "../style/LayoutStyle";
import { Input } from "../style/Input";
import { H1 } from "../style/H1";
import DataInputEntry from "../components/DataInputEntry";
import { useCookies } from "react-cookie";

const LoginContainer = () => {
  const navigate = useNavigate();
  const [cookie, setCookie] = useCookies(["token"]);

  const onLoginClickEvent = async () => {
    let formData = new FormData();
    formData.append("id", inputValues.id);
    formData.append("pw", inputValues.pw);
    if (!/^[a-z][a-z0-9]{6,16}$/i.test(inputValues.id)) {
      alert("아이디를 바르게 입력해주세요");
      return;
    } else if (
      !/^(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/.test(inputValues.pw)
    ) {
      alert("비밀번호를 바르게 입력해주세요");
      return;
    }
    const response = await fetch(`${process.env.REACT_APP_API_URL}/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: inputValues.id,
        pw: inputValues.pw,
      }),
    });
    const result = await response.json();

    if (result.status === 200) {
      console.log(result);
      setCookie("token", result.data.token);
      window.location.href = "/";
    } else {
      alert(result.message);
    }
  };
  const onSignUpClickEvent = () => {
    navigate("/signUp");
  };

  const [inputValues, setInputValues] = useState({
    id: "",
    pw: "",
  });
  const inputElem = [
    {
      key: "id",
      placeholder: "id",
      inputType: "text",
    },
    {
      key: "pw",
      placeholder: "pw",
      inputType: "text",
    },
  ];

  const titleText = "로그인";
  const btnElem = [
    {
      key: "login",
      titleText: "로그인",
      onClickEvent: onLoginClickEvent,
    },
    {
      key: "signUp",
      titleText: "회원가입",
      onClickEvent: onSignUpClickEvent,
    },
  ];

  return (
    <DataInputEntry
      {...{
        elem: inputElem,
        titleText,
        setInputValues,
        btnElem,
        inputValues,
      }}
    />
  );
};

export default LoginContainer;
