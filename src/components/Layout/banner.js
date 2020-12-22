import React from "react";
import StarYellow from "assets/images/star-yellow.svg";
import StarWhite from "assets/images/star-white.svg";
import ButtonBanner from "components/Layout/buttonBanner"
const Banner = (props) => {
  return (
    <div>
      <div className="banner-movie position-relative">
        <div className="review-star position-absolute w-auto h-100">
          <div className="icon-text-banner">{props.dummy.title}</div>
          <div className="d-flex">
            <img
              src={StarYellow}
              alt=""
              className=""
              width="20px"
              height="20px"
            />
            <img
              src={StarYellow}
              alt=""
              className=""
              width="20px"
              height="20px"
            />
            <img
              src={StarYellow}
              alt=""
              className=""
              width="20px"
              height="20px"
            />
            <img
              src={StarYellow}
              alt=""
              className=""
              width="20px"
              height="20px"
            />
            <img
              src={StarYellow}
              alt=""
              className=""
              width="20px"
              height="20px"
            />
            <span className="ml-2 review-count">
              {props.dummy.review_count} Reviews
            </span>
          </div>
          <div className="desc-banner mt-3 mb-1 md-mb-4 mr-3">
            {props.dummy.desc}
          </div>
          <div className="d-flex mt-1 md-mt-3">
            <ButtonBanner colorButton="red">Watch Trailer</ButtonBanner>
            <ButtonBanner colorButton="white">Add to Watchlist</ButtonBanner>
          </div>
        </div>
        <div className="bg-dark cover transparency-dark position-absolute"></div>
        <img src={props.dummy.banner} alt="" className="cover" width="auto" />
      </div>
    </div>
  );
};

export default Banner;
