import React from 'react';
import Carousel from "components/Homepage/carousel";
import Category from "components/Homepage/category";
import Card from "components/Homepage/card";
import Page from "components/Homepage/page_nation";

const index = (props) => {

    return (
      <div>
        <Carousel />

        <Card/>
        <Page/>
      </div>
    );
};

export default index;