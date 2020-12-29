import React, {useEffect, useState} from 'react';
import Photo from "components/Profile/parts/photo"
import Bar from "components/Profile/parts/bar"
import Data from "components/Profile/parts/data"
import {connect} from "react-redux"
import { MY_REVIEW, MY_MOVIE, PUT_MY_REVIEW } from "redux/actions/auth-actions";
import Card from "components/Homepage/card";
const Index = ({ user, myReview, myMovie, query, review }) => {
  const [que, setQue] = useState("");

  useEffect(() => {
    myReview();
    myMovie();
    setQue(query);
  }, [setQue]);
  return (
    <>
      {query !== "" ? (
        <Card />
      ) : (
        <>
          <Photo user={user} />

          <Data user={user} review={review}/>
        </>
      )}
    </>
  );
};
const mapStateToProps = (state) => {
  console.log("review", state.todo)
    return {
      user: state.todo.user,
      query: state.movie.query,
      review: state.todo.review,
    };
}
const mapDispatchToProps = (dispatch) => ({
  myReview: (data) => dispatch({ type: MY_REVIEW }),
  myMovie: (data) => dispatch({ type: MY_MOVIE }),
});



export default connect(mapStateToProps, mapDispatchToProps)(Index);


// const mapStateToProps = (state) => {
//   console.log(state, "awal");
//   return {
//     query: state.movie.query,
//   };
// };
// export default connect(mapStateToProps)(Index);