import styled from "styled-components";
import { setFlex } from "./SetFlex";

export const Input = styled.input`
  ${(props) => {
    setFlex(props.$flex);
  }}
  box-sizing: ${(props) => props.$boxSizing || "border-box"};
  width: ${(props) => props.$width || "fit-content"};
  height: ${(props) => props.$height || "fit-content"};
  background-color: ${(props) => props.$bgColor || "initial"};
  padding: ${(props) => props.$padding || "0"};
  margin: ${(props) => props.$margin || "0"};
`;
