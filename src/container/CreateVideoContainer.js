import React, { useState } from "react";
import DataInputEntry from "../components/DataInputEntry";
import { useCookies } from "react-cookie";

const CreateVideoContainer = () => {
  const [cookie, setCookie] = useCookies(["token"]);
  const [inputValues, setInputValues] = useState({
    title: "",
    img: "",
  });
  const onClickEvent = async () => {
    let formData = new FormData();
    formData.append("title", inputValues.title);
    formData.append("img", inputValues.img);

    const response = await fetch(`${process.env.REACT_APP_API_URL}/post`, {
      method: "POST",
      headers: {
        "Content-Type": "mulipart/formdata",
        Authorization: cookie.token,
      },
      body: formData,
    });
    const result = await response.json();

    if (result.status === 200) {
      console.log(result);
    } else {
      alert(result.message);
    }
  };
  const inputElem = [
    {
      key: "img",
      inputType: "file",
    },
    {
      key: "title",
      placeholder: "제목",
      inputType: "text",
    },
  ];
  const titleText = "만들기";
  const btnElem = [
    {
      key: "post",
      titleText: "만들기",
      onClickEvent: onClickEvent,
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

export default CreateVideoContainer;
