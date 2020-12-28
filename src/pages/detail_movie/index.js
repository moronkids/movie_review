import React, {useContext, useEffect} from 'react';
import Character from 'pages/detail_movie/character'
import Overview from 'pages/detail_movie/overview'
import Review from 'pages/detail_movie/review'
import Banner from "components/Layout/banner";
import Category from "components/Homepage/category";
import { darkMode } from "provider/darkmode";
import { Overviewx } from "data_dummy/overview";
import { connect } from 'react-redux';
import Card from "components/Homepage/card";
import Page from "components/Homepage/page_nation";
import {
  MOVIE_ID
} from "redux/actions/detailMovie-actions";
const Index = ({props, getMovieById, id, data, loading, query}) => {
    console.log(props,data, "bedah")
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
    useEffect(() => {
      console.log("sekali")
      if(query === "") {
        getMovieById(id);
      }
    }, [query]);
    return (
      <>
        {query !== "" ? (
          <><Card /><Page/></>
        ) : (
          <>
            <Banner dummy={data} />
            <Category
              // location={props.location.pathname}
              valueProps={valueCategory}
            />
            {path === "overview" ? <Overview dummy={data} /> : null}
            {path === "characters" ? (
              <Character dummy={data}></Character>
            ) : null}
            {path === "reviews" ? <Review dummy={data}></Review> : null}
          </>
        )}
      </>
    );
};
const mapStateToProps = (state) => {
  console.log("state", state)
  return {
    id : state.movie.id,
    loading : state.movie.loading,
    data: state.movie.data,
    // searchResult : state.movie.data,
    query: state.movie.query
  }
}

const mapDispatchToProps = (dispatch) => ({
  // getIdMovie: (data) => dispatch({ type: DETAIL_MOVIE, payload: data }),
  getMovieById: (data) => dispatch({ type: MOVIE_ID, payload: data })
})
export default connect(mapStateToProps, mapDispatchToProps)(Index);