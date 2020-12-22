import React from "react";
import Carousel from "components/Homepage/carousel";
import Category from "components/Homepage/category";
import Main from "components/Overview/parts/main";

const Overview = (props) => {
  console.log(props,"testx")
  return (
    <div>
      <Main dummy={props.dummy} ></Main>
    </div>
  );
};

export default Overview;
