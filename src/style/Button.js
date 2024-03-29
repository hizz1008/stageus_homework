import styled from "styled-components";

export const Button = styled.button`
  width: ${(props) => props.$width || "100%"};
  height: ${(props) => props.$height || "100%"};
  margin: ${(props) => props.$margin || "0"};
  padding: ${(props) => props.$padding || "0"};
`