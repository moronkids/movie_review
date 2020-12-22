import React from 'react';
import Carousel from "components/Homepage/carousel";
import Category from "components/Homepage/category";
import Main from 'components/Homepage/category'
import Card from "components/Homepage/card"
import { Homepage } from "data_dummy/homepage";
const index = (props) => {
  console.log(Homepage, "ini data");
    const valueCategory = [
      {
        name: "Anime",
        spacing: "mr-3",
        page: "/overview",
      },
      {
        name: "Thriller",
        spacing: "mr-3",
        page: "/characters",
      },
      {
        name: "Comedy",
        spacing: "mr-3",
        page: "/review",
      },
      {
        name: "Korea",
        spacing: "mr-3",
        page: "/overview",
      },
      {
        name: "Si-Fi",
        spacing: "mr-3",
        page: "/characters",
      },
      {
        name: "Action",
        spacing: "mr-3",
        page: "/review",
      },
    ];
    return (
      <div>
        <Carousel />
        <Category  valueProps={valueCategory} detect={"homepage"}/>
        {props.children}
        <Card/>
      </div>
    );
};

export default index;