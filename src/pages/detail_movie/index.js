import React, {useContext} from 'react';
import Character from 'pages/detail_movie/character'
import Overview from 'pages/detail_movie/overview'
import Review from 'pages/detail_movie/review'
import Banner from "components/Layout/banner";
import Category from "components/Homepage/category";
import { darkMode } from "provider/darkmode";
import { Overviewx } from "data_dummy/overview";
const Index = (props) => {
    console.log(props, "bedah")
    const {path, setPath} = useContext(darkMode)
    console.log(path, "ini context")
    const valueCategory = [
      {
        name: "Overview",
        spacing: "mr-5",
        page: "/overview",
      },
      {
        name: "Characters",
        spacing: "mr-5",
        page: "/characters",
      },
      {
        name: "Review",
        spacing: "mr-5",
        page: "/review",
      },
    ];
    return (
      <div>
        <Banner dummy={Overviewx} />
        <Category
          location={props.location.pathname}
          valueProps={valueCategory}
        />
        {path === "overview" ? <Overview dummy={Overviewx} /> : null}
        {path === "characters" ? <Character></Character> : null}
        {path === "reviews" ? <Review></Review> : null}
      </div>
    );
};

export default Index;