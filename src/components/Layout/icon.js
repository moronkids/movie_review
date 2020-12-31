import React, { useEffect } from "react";
import IconPlay from "assets/images/play.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  DETAIL_MOVIE,
  MOVIE_CATEGORY,
} from "redux/actions/detailMovie-actions";
import { handler } from "provider/darkmode copy";
const Icon = ({ props, getMovieByCategory }) => {
  let root = ["d-flex pl-2 pl-md-0"];
  if (props.position === "absolute") root.push("position-absolute");
  let iconProps = ["d-flex icon-red align-middle my-auto"];
  if (props.center) iconProps.push("mx-auto");
  let textProps = ["my-auto pl-2"];
  if (props.textColor === "white") textProps.push("icon-text-white");
  if (props.textColor === "blue") textProps.push("icon-text-blue");
  if (props.textColor === "black") textProps.push("icon-text-black");
  root = root.join(" ");
  iconProps = iconProps.join(" ");
  textProps = textProps.join(" ");
  // useEffect(() => {
  //   getMovieByCategory({
  //     genre: "all",
  //     page: 1,
  //   });
  // }, []);
  const handler = () => {
    console.log("hitting")
    getMovieByCategory({
      genre: "all",
      page: 1,
    });
  }
  return (
    <Link
      to="/"
      onClick={(e) =>
        handler()
      }
    >
      <div className={`${root}`}>
        <div className={`${iconProps}`}>
          <img width="20px" height="auto" className="mx-auto" src={IconPlay} />
        </div>
        <span className={`${textProps}`}>MilanTV</span>
      </div>
    </Link>
  );
};
const mapStateToProps = (state, props) => {
  console.log(state, "state to props");
  return {
    // data: state.movie.data.data,
    // loading: state.movie.loading,
    // query: state.movie.query,
    props: props,
  };
};
const mapDispatchToProps = (dispatch) => ({
  getIdMovie: (data) => dispatch({ type: DETAIL_MOVIE, payload: data }),
  getMovieByCategory: (data) =>
    dispatch({ type: MOVIE_CATEGORY, payload: data }),
});
export default connect(mapStateToProps, mapDispatchToProps)(Icon);
