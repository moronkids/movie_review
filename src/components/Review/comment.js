import React, { useState, useContext, useEffect } from "react";
// import "../App.css"
import { darkMode } from "provider/darkmode";
import {
  ADD_REVIEW,
  GET_REVIEW_MOVIE,
} from "redux/actions/detailMovie-actions";
import {connect} from "react-redux"

// function useForceUpdate() {
//   const [value, setValue] = useState(0); // integer state
//   return () => setValue((value) => ++value); // update the state to force render
// }
const CreateComment = ({ props, id, addReview, getReviewById }) => {
  // const forceUpdate = useForceUpdate();
  const { review, setReview } = useContext(darkMode);
  console.log(review, "hooks atas");
  const [note, setNote] = useState({
    review: review.review,
    rating: review.rating,
  });
  console.log(review, "ini hooks");

  function handleChange(event) {
    setReview({ ...review, review: event.target.value, id: id });
  }
  const [render, setRender] = useState(false);
  console.log(props.loading, "awal")
  const submitNote = async (event) => {
    event.preventDefault();
    await addReview(review);
    console.log(props.loading, "akhir")

    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    getReviewById(id);
    setReview({ id: null, review: null, rating: null });
  };
  // useEffect(() => {
  //   if (render) {
  //     getReviewById();
  //   }
  // }, [getReviewById]);


  const handleKeypress = (e) => {
    if (e.keycode === 13) {
      submitNote();
    }
  };

  return (
    <div className="teks-area reviews-form">
      <form className="">
        <input
          name="review"
          onChange={handleChange}
          value={review.review}
          placeholder="add a review..."
          rows="3"
          oneKeyPress={handleKeypress}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
};
const mapStateToProps = (state, props) => {
  return {
    id: state.movie.id,
    props: props,

    // loading: state.todo.loading,
    // logged: state.todo.logged,
  };
};

const mapDispatchToProps = (dispatch) => ({
  // signInFunc: (data) => dispatch({ type: SIGN_IN, payload: data }),
  addReview: (data) => dispatch({ type: ADD_REVIEW, payload: data }),
  getReviewById: (id) => dispatch({ type: GET_REVIEW_MOVIE, payload: id }),
  // falseLogged: () => dispatch({ type: UPDATE_STATUS, payload: false }),
});
export default connect(mapStateToProps, mapDispatchToProps)(CreateComment);
