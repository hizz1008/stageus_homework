import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Div } from "../style/LayoutStyle";
import { Input } from "../style/Input";
import { H1 } from "../style/H1";
import { useEffect } from "react";

const InputStyle = styled(Input)`
  border: 1px solid var(--color-paleGray);
`;
const Btn = styled.button`
  width: 200px;
  height: 40px;
  margin-top: 10px;
`;

const DataInputEntry = (props) => {
  const { elem, titleText, inputValues, setInputValues, btnElem } = props;

  const onChangeEvnet = (e, key) => {
    const value = e.target.type === "file" ? e.target.files[0] : e.target.value;

    setInputValues({ ...inputValues, [key]: value });
  };
  // useEffect(() => {
  //   console.log(inputValues);
  // }, [inputValues.File]);

  return (
    <Div $flex="v_center_center">
      <H1 $margin="0 0 10px 0">{titleText}</H1>
      {elem.map((item) => {
        return (
          <InputStyle
            type={item.inputType}
            accept={item.inputType === "file" ? "image/*" : null}
            name={item.name}
            $width="200px"
            $height="40px"
            $margin="10px 0 0 0"
            $padding="10px"
            placeholder={item.placeholder}
            key={item.key}
            onChange={(e) => onChangeEvnet(e, item.key)}
          />
        );
      })}
      {btnElem.map((item) => {
        return (
          <Btn key={item.key} onClick={item.onClickEvent}>
            {item.titleText}
          </Btn>
        );
      })}
    </Div>
  );
};

export default DataInputEntry;
