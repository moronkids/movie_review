import React from 'react';
import Reviewx from "components/Review/index"
const Review = (props) => {
    return (
        <div>
            <Reviewx dummy={props.dummy}></Reviewx>
        </div>
    );
};

export default Review;