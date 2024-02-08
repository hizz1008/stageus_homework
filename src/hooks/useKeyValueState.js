import React, { useState } from "react";

const useKeyValueState = (initialState) => {
  const [value, setValue] = useState(initialState);
  const changeValue = (key, value) => {
    setValue((prevValue) => ({
      ...prevValue,
      [key]: value,
    }));
  };
  return { value, changeValue };
};

export default useKeyValueState;
