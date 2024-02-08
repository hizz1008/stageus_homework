import { createStore } from "redux";

const initState = {
  toggleModal: "false",
  page: "정보",
  data:[],
  videoData: [],
  commentData:[],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "NAV_SLIDE_TOGGLE_ACTION":
      return {
        ...state,
        toggleModal: !state.toggleModal
      };
    case "SET_PAGE":
      return {
        ...state,
        page: action.value,
      };
    case "SET_DATA":
      return{
        ...state,
        data:action.payload,
      }
    case "SET_ICON_DATA":
      return{
        ...state,
        data:action.payload,
      }
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
