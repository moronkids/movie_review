// Import the redux-saga/effects
import { put, call, takeLatest, takeEvery } from "redux-saga/effects";

// Import all actions and api's
import {
  SET_LOADING,
  SIGN_IN,
  PUT_SIGN_IN,
  SIGN_OUT,
  PUT_SIGN_OUT,
  SIGN_UP,
  PUT_SIGN_UP,
  MY_REVIEW,
  PUT_MY_REVIEW,
  PUT_SAVED_MOVIE,
  MY_MOVIE
} from "redux/actions/auth-actions";
import {
  MOVIE_ID,
  PUT_MOVIE_ID,
  PUT_DETAIL_MOVIE,
  DETAIL_MOVIE,
  SET_LOADING_ID,
  PUT_MOVIE_CATEGORY,
  MOVIE_CATEGORY,
  PUT_MOVIE_SEARCH,
  MOVIE_SEARCH,
  REMOVE_MOVIE_SEARCH,
  MOVIE_CATEGORY_DATA,
} from "redux/actions/detailMovie-actions";

// Import all api's
import { signIn, signUp, getReview, savedMovie } from "redux/api/auth-api";
import {
  getByCategory,
  getById,
  getByQuery,
  getAllCategory,
} from "redux/api/movie-api";

// Here's the unique part, generator function*, function with asterisk(*)

// Get Todos
function* signInFunc({payload}) {
  yield put({ type: SET_LOADING });
  const todos = yield call(signIn, payload);
  yield put({ type: PUT_SIGN_IN, payload: todos });

}
function* myReview() {
  yield put({ type: SET_LOADING });
  yield call(getReview);
  yield put({ type: PUT_MY_REVIEW});
}
function* myMovie() {
  yield put({ type: SET_LOADING });
  yield call(savedMovie);
  yield put({ type: PUT_SAVED_MOVIE});
}
function* signUpFunc({ payload }) {
  yield put({ type: SET_LOADING });
  const todos = yield call(signUp, payload);
  yield put({ type: PUT_SIGN_UP, payload: todos });
}
function* getIdMovie({ payload }) {
  yield put({ type: SET_LOADING_ID });
  yield put({ type: PUT_DETAIL_MOVIE, payload: payload });
}
function* removeQuery({ payload }) {
    yield put({ type: SET_LOADING_ID });
  yield put({ type: REMOVE_MOVIE_SEARCH });

}
function* getMovieByCategory({ payload }) {
  yield put({ type: SET_LOADING_ID });
  const all = yield call(getAllCategory, payload);
  yield put({ type: MOVIE_CATEGORY_DATA , payload:all});
  const todos = yield call(getByCategory, payload);
  yield put({ type: PUT_MOVIE_CATEGORY, payload: todos });
}
function* getMovieById({ payload }) {
  console.log("sagas", payload)
  yield put({ type: SET_LOADING_ID });
   const todos = yield call(getById, payload);
  yield put({ type: PUT_MOVIE_ID, payload: todos });
}
function* getMovieByQuery({ payload }) {
  console.log("sagas query cuyy", payload)
  yield put({ type: SET_LOADING_ID });
   const todos = yield call(getByQuery, payload);
  yield put({ type: PUT_MOVIE_SEARCH, payload: todos });
}
function* signOut() {
  yield put({ type: SET_LOADING });
  yield put({ type: PUT_SIGN_OUT });
}


// function* getTodos() {
//   yield put({ type: SET_LOADING });

//   const todos = yield call(getAllTodos);
//   console.log(todos, "saga");
//   yield put({ type: GET_TODOS, payload: todos });
// }

// // Set the title of todo
// function* setTodoTitle({ payload }) {
//   yield put({ type: SET_TODO_TITLE, payload });
// }

// // Create Todo
// function* createTodo({ payload }) {
//   yield put({ type: SET_LOADING });

//   const newTodo = yield call(createNewTodo, payload);

//   yield put({ type: CREATE_TODO, payload: newTodo });

//   // Clear todo after creating
//   yield put({ type: CLEAR_TODO_TITLE });
// }

// // Delete todo
// function* deleteTodo({ payload }) {
//   yield put({ type: SET_LOADING });

//   const todo = yield call(deleteExistedTodo, payload);

//   yield put({ type: DELETE_TODO, payload: todo });
// }

// Export the saga (todo-saga)
export default function* todoSaga() {
  yield takeEvery(SIGN_IN, signInFunc); //ambil api dari firebase
  yield takeEvery(SIGN_OUT, signOut); //ambil api dari firebase
  yield takeEvery(SIGN_UP, signUpFunc); //ambil api dari firebase
  yield takeLatest(DETAIL_MOVIE, getIdMovie); //ambil api dari firebase
  yield takeEvery(MOVIE_CATEGORY, getMovieByCategory); //ambil api dari firebase
  yield takeEvery(MOVIE_ID, getMovieById); //ambil api dari firebase
  yield takeEvery(MOVIE_SEARCH, getMovieByQuery); //ambil api dari firebase
  yield takeLatest(REMOVE_MOVIE_SEARCH, removeQuery); //ambil api dari firebase
  yield takeLatest(MY_REVIEW, myReview); //ambil api dari firebase
  yield takeLatest(MY_MOVIE, myMovie); //ambil api dari firebase

}
