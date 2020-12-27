// combineReducers come from redux that used for combining reducers that we just made.
import { combineReducers } from "redux";

// Reducers
import todo from "redux/reducers/auth-reducers";
console.log(todo, "root reducers");
export default combineReducers({
  todo,
  // Here you can registering another reducers.
});
