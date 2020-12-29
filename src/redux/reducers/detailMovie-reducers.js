/* eslint-disable import/no-anonymous-default-export */
import {
  SET_LOADING_ID,
  DETAIL_MOVIE,
  PUT_DETAIL_MOVIE,
  PUT_MOVIE_CATEGORY,
  PUT_MOVIE_ID,
  PUT_MOVIE_SEARCH,
  REMOVE_MOVIE_SEARCH,
  MOVIE_CATEGORY_DATA,
  ADD_REVIEW,
  PUT_ADD_REVIEW,
  GET_REVIEW_MOVIE,
  PUT_REVIEW_MOVIE,
} from "redux/actions/detailMovie-actions";

// Define your state here
const initialState = {
  loading: false,
  id: null,
  data: {
    data : []
  },
  query: "",
  category: []
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
    case MOVIE_CATEGORY_DATA:
      return {
        ...state,
        category: payload.data,
        loading: false,
      };
    // Get todos
    case PUT_DETAIL_MOVIE:
      return {
        ...state, //spread operator copy all data fromn inital state
        id: payload,
        loading: false,
        query: "",
      };
    case PUT_MOVIE_CATEGORY:
      console.log(payload, PUT_MOVIE_CATEGORY);
      if(payload.data.length > 0) {
        return {
          ...state, //spread operator copy all data fromn inital state
          data: payload,
          loading: false,
          // query: "",
        };
      }
      else {
        return {
          ...state, //spread operator copy all data fromn inital state
          loading: false,
          // query: "",
        };
      }
    case PUT_MOVIE_ID:
      return {
        ...state, //spread operator copy all data fromn inital state
        data: payload,
        loading: false,
        query: "",
      };
    case PUT_MOVIE_SEARCH:
      // const datax = payload.data
      return {
        ...state, //spread operator copy all data fromn inital state
        // data: payload,
        loading: false,
        data: payload,
        query: payload.query,
      };
    case PUT_ADD_REVIEW:
      // const datax = payload.data
      return {
        ...state, //spread operator copy all data fromn inital state
        // data: payload,
        loading: false,
        review: payload.data,

      };
    case PUT_REVIEW_MOVIE:
      // const datax = payload.data
      return {
        ...state, //spread operator copy all data fromn inital state
        // data: payload,
        loading: false,
        comment: payload.data,

      };
    case REMOVE_MOVIE_SEARCH:
      return {
        ...state, //spread operator copy all data fromn inital state
        query: "",
        loading: false,
      };
    default:
      return state;
  }
};
