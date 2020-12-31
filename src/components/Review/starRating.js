import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import StarRatingComponent from "react-star-rating-component";
import { darkMode } from "provider/darkmode";


const Rating = (props) => {

  // constructor(props) {
  //   console.log(props, "review");
  //   super();

  //   this.state = {
  //     rating: 1,
  //     user: props.dummy2.username,
  //     comment: props.dummy.rating,
  //     photo: props.dummy2.profilePic,
  //   };
  // }

  const { review, setReview } = useContext(darkMode);
  const [rating, setRating] = useState(1);
  const [user, setUser] = useState(props.dummy2.username);
  const [comment, setComment] = useState(props.dummy.rating);
  const [photo, setPhoto] = useState(props.dummy2.profilePic);
  const onStarClick = (e) => {
    console.log(e, "isinya")
    setReview({...review, rating : e});
  };
  return (
    <>
      {"token" in localStorage ? <div className="flex-container-rating">
      <div className="flex-rating">
        <img
          className="favourite-image"
          src={"http://13.212.6.137:3000" + photo}
        />
      </div>
      <div className=" h-auto ">
        <h2 className="teks-body">{user}</h2>
        <p className="teks-body">Rating from state: {rating}</p>
        <div style={{ fontSize: "35px" }}>
          <StarRatingComponent
            name="rate1"
            className="teks-body"
            starCount={5}
            value={review.rating}
            onStarClick={(e) => onStarClick(e)}
          />
        </div>
      </div>
    </div>: null}
    </>
  );
};

export default Rating;
