const navSlideToggleAction = () => {
  const tmp = {
    type: "NAV_SLIDE_TOGGLE_ACTION",
  };
  return tmp;
};

const setPage = (data) => {
  const tmp = {
    type: "SET_PAGE",
    value: data,
  };
  return tmp;
};

const setData = (data) =>{
  const tmp = {
    type:"SET_DATA",
    payload:data,
  }
  return tmp
}

export { navSlideToggleAction, setPage, setData };
