import React from 'react';
import Reviewx from "components/Review/index"
const Review = (props) => {
    console.log(props, "review bro")
    return (
      <div>
        <Reviewx
          loading={props.loading}
           dummy={props.dummy}
          dummy2={props.dummy2}
          comment={props.comment}
        ></Reviewx>
      </div>
    );
};

export default Review;