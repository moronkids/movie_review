import React, {useContext, useEffect} from 'react';
import Character from 'pages/detail_movie/character'
import Overview from 'pages/detail_movie/overview'
import Review from 'pages/detail_movie/review'
import Banner from "components/Layout/banner";
import Category from "components/Homepage/category";
import { darkMode } from "provider/darkmode";
import { Overviewx } from "data_dummy/overview";
import { connect } from 'react-redux';
import {
  MOVIE_ID
} from "redux/actions/detailMovie-actions";
const Index = ({props, getMovieById, id, data, loading}) => {
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
      getMovieById(id)
    }, []);
    return (
      <div>
        <Banner dummy={data} />
        <Category
          // location={props.location.pathname}
          valueProps={valueCategory}
        />
        {path === "overview" ? <Overview dummy={data} /> : null}
        {path === "characters" ? <Character dummy={data}></Character> : null}
        {path === "reviews" ? <Review dummy={data}></Review> : null}
      </div>
    );
};
const mapStateToProps = (state) => {
  console.log("state", state)
  return {
    id : state.movie.id,
    loading : state.movie.loading,
    data: state.movie.data
  }
}

const mapDispatchToProps = (dispatch) => ({
  // getIdMovie: (data) => dispatch({ type: DETAIL_MOVIE, payload: data }),
  getMovieById: (data) => dispatch({ type: MOVIE_ID, payload: data })
})
export default connect(mapStateToProps, mapDispatchToProps)(Index);