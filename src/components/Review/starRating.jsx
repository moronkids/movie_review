import React from "react";
import ReactDOM from "react-dom";
import StarRatingComponent from "react-star-rating-component";

class Rating extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 1,
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  render() {
    const { rating } = this.state;

    return (
      <div className="flex-container-rating">
        <div className="flex-rating">
          <img
            className="favourite-image"
            src="https://akcdn.detik.net.id/customthumb/2007/10/22/73/Kaka-ko.jpg?w=700&q=80"
          />
        </div>
        <div className=" h-auto ">
          <h2 className="teks-body">Rating from state: {rating}</h2>
          <div style={{ fontSize: "35px" }}>
            <StarRatingComponent
              name="rate1"
              className="teks-body"
              starCount={5}
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Rating;
