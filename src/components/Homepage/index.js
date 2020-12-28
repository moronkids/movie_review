import React, {useState, useEffect} from 'react';
import Carousel from "components/Homepage/carousel";
import Category from "components/Homepage/category";
import Card from "components/Homepage/card";
import Page from "components/Homepage/page_nation";
import {connect} from "react-redux"
const Index = ({query}) => {
  console.log("isi query", query)
  const [que, setQue] =useState("")
  useEffect(() => {
    setQue(query)
  }, [query])
    return (
      <div>
        {query !== ""? (
          <Card />
        ) : (
          <>
            <Carousel />

            <Card />
          </>
        )}
        <Page />
      </div>
    );
};
const mapStateToProps = (state) => {
  console.log(state, "awal")
  return {
    query : state.movie.query
  }
}
export default connect(mapStateToProps)(Index);