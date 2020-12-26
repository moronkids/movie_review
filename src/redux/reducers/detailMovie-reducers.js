/* eslint-disable import/no-anonymous-default-export */
import {
  SET_LOADING_ID,
  DETAIL_MOVIE,
  PUT_DETAIL_MOVIE
} from "redux/actions/detailMovie-actions";

// Define your state here
const initialState = {
  loading: false,
  id: null,
};

// This export default will control your state for your application
export default (state = initialState, { type, payload }) => {
  console.log(type, payload, "reducers");
  switch (type) {
    // Set loading
    case SET_LOADING_ID:
      return {
        ...state,
        loading: true,
      };
    // Get todos
    case PUT_DETAIL_MOVIE:
      return {
        ...state, //spread operator copy all data fromn inital state
        id: payload,
        loading: false,
      };
    default:
      return state;
  }
};
