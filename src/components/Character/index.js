import React from "react";
import Carousel from "components/Homepage/carousel";
import Category from "components/Homepage/category";
import Main from "components/Overview/parts/main";
import Character from "components/Character/cardchar";

const Overview = (props) => {
  console.log(props,"testx")
  return (
    <div>
      <Character passingData={props.dummy}/>
    </div>
  );
};

export default Overview;