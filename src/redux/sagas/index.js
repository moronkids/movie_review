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
} from "redux/actions/auth-actions";
import { PUT_DETAIL_MOVIE, DETAIL_MOVIE, SET_LOADING_ID, PUT_MOVIE_CATEGORY, MOVIE_CATEGORY } from "redux/actions/detailMovie-actions";

// Import all api's
import { signIn, signUp} from "redux/api/auth-api";
import { getByCategory } from "redux/api/movie-api";

// Here's the unique part, generator function*, function with asterisk(*)

// Get Todos
function* signInFunc({payload}) {
  yield put({ type: SET_LOADING });
  const todos = yield call(signIn, payload);
  yield put({ type: PUT_SIGN_IN, payload: todos });

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
function* getMovieByCategory({ payload }) {
  yield put({ type: SET_LOADING_ID });
   const todos = yield call(getByCategory, payload);
  yield put({ type: PUT_MOVIE_CATEGORY, payload: todos });
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
  // yield takeEvery(GET_TODOS_REQUESTED, getTodos); //ambil api dari firebase
  // yield takeEvery(SET_TODO_TITLE_REQUESTED, setTodoTitle);
  // yield takeLatest(CREATE_TODO_REQUESTED, createTodo);
  // yield takeEvery(DELETE_TODO_REQUESTED, deleteTodo);
}
