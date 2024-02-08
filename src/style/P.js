import styled from "styled-components";

const setSize = (value) => {
  if (value === "small") {
    return `
      var(--font-size-${value});
    `;
  } else if (value === "medium") {
    return `
      var(--font-size-${value});
    `;
  } else if (value === "large") {
    return `
      var(--font-size-${value});  
    `;
  } else if (value === "xLarge") {
    return `
      var(--font-size-${value});
    `;
  }
};

const setWeight = (value) => {
  if (value === "small") {
    return `
      var(--font-weight-${value});
    `;
  } else if (value === "medium") {
    return `
      var(--font-weight-${value});
    `;
  } else if (value === "large") {
    return `
      var(--font-weight-${value});
    `;
  }
};

export const P = styled.p`
  font-size: ${(props) => setSize(props.fontSize) || "var(--font-size-normal)"};
  font-weight: ${(props) =>
    setWeight(props.fontWeight) || "var(--font-weight-normal)"};
  margin: ${(props) => props.$margin || "0"};
`;
