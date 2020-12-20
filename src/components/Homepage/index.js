import React from 'react';
import Carousel from "components/Homepage/carousel";
import Category from "components/Homepage/category";
import Main from 'components/Homepage/category'
const index = (props) => {
    return (
        <div>
            <Carousel/>
            <Category/>
            {props.children}
        </div>
    );
};

export default index;