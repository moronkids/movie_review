import React from "react";
import StarYellow from "assets/images/star-yellow.svg";
import StarWhite from "assets/images/star-white.svg";
import ButtonBanner from "components/Layout/buttonBanner"
import IconCarousel from "assets/images/carousel.svg";
import { Link } from "react-router-dom";
const Banner = (props) => {
  const star = props.dummy.data[0].star
  console.log(star, "bintang")
  return (
    <div>
      <div className="banner-movie position-relative">
        <div className="review-star position-absolute w-auto h-100">
          <div className="icon-text-banner">{props.dummy.data[0].Movie}</div>
          <div className="d-flex">
            {star.map((val, i) => {
              console.log("asu");
              return (
                <img
                  src={StarYellow}
                  alt=""
                  className=""
                  width="20px"
                  height="20px"
                />
              );
            })}

            <span className="ml-2 review-count">{star.length} Reviews</span>
          </div>
          <div className="desc-banner mt-3 mb-1 md-mb-4 mr-3">
            {props.dummy.data[0].Sinopsis}
          </div>
          <div className="d-flex mt-1 md-mt-3">
            <a target="_blank" href={props.dummy.data[0].Trailer}>
              <ButtonBanner colorButton="red">Watch Trailer</ButtonBanner>
            </a>
            {/* <a href="" className="" onClick={}> */}
            <ButtonBanner colorButton="white">Add to Watchlist</ButtonBanner>
            {/* </a> */}
          </div>
        </div>
        <div className="bg-dark cover transparency-dark position-absolute"></div>
        <img src={IconCarousel} alt="" className="cover" width="auto" />
      </div>
    </div>
  );
};

export default Banner;
