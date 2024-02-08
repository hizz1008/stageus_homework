import styled from "styled-components";

const setSize = (value) => {
  return `
    var(--font-size-${value});
  `;
};

const setWeight = (value) => {
  return `
    var(--font-weight-${value});
  `;
};

export const H1 = styled.h1`
  margin: ${(props) => props.$margin || "0"};
  font-size: ${(props) => setSize(props.fontSize) || "var(--font-size-normal)"};
  font-weight: ${(props) => setWeight(props.fontWeight)};
`;

// div(틀), p(text) Input의 역할을 분담해서
