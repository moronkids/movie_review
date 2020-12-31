// combineReducers come from redux that used for combining reducers that we just made.
import { combineReducers } from "redux";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage"
// Reducers
import todo from "redux/reducers/auth-reducers";
import movie from "redux/reducers/detailMovie-reducers";
console.log(todo, "root reducers");
// const persistConfig = {
//   key : 'root',
//   storage,
//   whitelist:['movie']
// }
const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["movie"],
};

const moviePersistConfig = {
  key: "movie",
  storage: storage,
  blacklist: ["query", "category", "mywatchlist", "comment", "review"],
};
const rootReducer = combineReducers({
  todo: todo,
  movie: persistReducer(moviePersistConfig, movie),
  // Here you can registering another reducers.
});
export default persistReducer(persistConfig, rootReducer)
