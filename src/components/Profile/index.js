import React, {useEffect} from 'react';
import Photo from "components/Profile/parts/photo"
import Bar from "components/Profile/parts/bar"
import Data from "components/Profile/parts/data"
import {connect} from "react-redux"
import { MY_REVIEW, MY_MOVIE } from "redux/actions/auth-actions";
const Index = ({user, myReview, myMovie}) => {
    useEffect(() => {
       myReview()
       myMovie()
    }, [])
    return (
      <>
        <Photo user={user} />
        {/* <Bar/> */}
        <Data user={user} />
      </>
    );
};
const mapStateToProps = (state) => {
    return {
        user : state.todo.user
    }
}
const mapDispatchToProps = (dispatch) => ({
  myReview: (data) => dispatch({ type: MY_REVIEW }),
  myMovie: (data) => dispatch({ type: MY_MOVIE }),
});



export default connect(mapStateToProps, mapDispatchToProps)(Index);