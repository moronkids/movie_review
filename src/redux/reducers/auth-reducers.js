/* eslint-disable import/no-anonymous-default-export */
import {
  SET_LOADING,
  PUT_SIGN_IN,
  // GET_TODOS,
  // SET_TODO_TITLE,
  // CREATE_TODO,
  // DELETE_TODO,
  // CLEAR_TODO_TITLE,
  SIGN_IN
} from "redux/actions/auth-actions";

// Define your state here
const initialState = {
  loading: false,
  todos:"",
  title: "",
  // modal: false
};

// This export default will control your state for your application
export default (state = initialState, { type, payload }) => {
  console.log(type, payload, "reducers");
  switch (type) {
    // Set loading
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    // Get todos
    case PUT_SIGN_IN:
      return {
        ...state, //spread operator copy all data fromn inital state
        todos: payload,
        loading: false,
      };
    // case GET_TODOS:
    //   return {
    //     ...state,
    //     todos: payload,
    //     loading: false,
    //   };
    // // Set todo title from user that gonna input a title in form
    // case SET_TODO_TITLE:
    //   return {
    //     ...state,
    //     title: payload,
    //   };
    // // Create new todo
    // case CREATE_TODO:
    //   return {
    //     ...state,
    //     todos: { ...state.todos, ...payload },
    //     loading: false,
    //   };
    // // Clear todo title in form after creating a new one
    // case CLEAR_TODO_TITLE:
    //   return {
    //     ...state,
    //     title: "",
    //   };
    // // Delete existed todo
    // case DELETE_TODO:
    //   console.log(state.todos, payload, "sel");
    //   return {
    //     ...state,
    //     loading: false,
    //   };
    // Return default state if you didn't match any case
    default:
      return state;
  }
};
