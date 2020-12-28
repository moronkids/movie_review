import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  MOVIE_SEARCH,
  REMOVE_MOVIE_SEARCH,
} from "redux/actions/detailMovie-actions";
import { useHistory } from "react-router-dom";
const Search = ({
  searchresult,
  removeQuery,
  getMovieByQuery,
  loading,
  props,
  query,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [timeout, setTimeoutz] = useState(null);
  const [searchRedux, setSearchRedux] = useState("")
  console.log(props, searchValue, "dari sarch");
  const path = "/searchx/";
  const history = useHistory();
  const nextPath = (path) => {
    history.push(path);
  };
const handleInput =(e) => {
  clearTimeout(timeout);

  setSearchValue(e)
  setTimeoutz(setTimeout(function () {
    setSearchRedux(searchValue)

  }, 1000))
}
useEffect(() => {
  if (searchRedux !== "") {
    getMovieByQuery({
      query: searchValue,
      page: 1,
    });
// removeQuery();

    // setTimeout(function () {
    // }, 2000);

    // localStorage.removeItem("persist:root");
    // nextPath(path + searchValue);
  }
  // setSearchValue(query);
}, [searchRedux, loading]);
  let classx;
  if (props.show === "mobile") classx = "d-block d-md-none mx-auto mt-2";
  if (props.show === "web") classx = " d-md-block d-none mx-auto mt-2";
  return (
    //       <div className="col col-sm-4">
    //           <input
    //               className="form-control"
    //               value={props.value}
    //               onChange={(event) => props.setSearchValue(event.target.value)}
    //               placeholder='Type to search...'
    //           ></input>
    //       </div>
    //   )
    // return (
    <>
      <input
        className={classx}
        placeholder="Search Movie"
        value={searchValue}
        // onChange={(event) => setSearchValue(event.target.value)}
        onChange={(event) =>  handleInput(event.target.value)}
      ></input>
    </>
  );
};

const mapStateToProps = (state, props) => {
  // console.log(state, "ere")
  return {
    // searchresult: state.movie.data.data,
    loading: state.movie.loading,
    props: props,
    query: state.movie.query,
  };
};
const mapDispatchToProps = (dispatch) => ({
  getMovieByQuery: (data) => dispatch({ type: MOVIE_SEARCH, payload: data }),
  removeQuery: () => dispatch({ type: REMOVE_MOVIE_SEARCH }),
});
export default connect(mapStateToProps, mapDispatchToProps)(Search);
