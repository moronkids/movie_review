import React, { useState, useContext, useEffect } from "react";
import { Homepage } from "data_dummy/homepage";
import Category from "components/Homepage/category";
import AOS from "aos";
import "aos/dist/aos.css";


import { Link } from "react-router-dom";
import { connect } from "react-redux";
  import { 
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} 
from "reactstrap";
import classnames from "classnames";
import Styled from "styled-components";
import { darkMode } from "provider/darkmode";
import { act } from "@testing-library/react";
import {
  DETAIL_MOVIE,
  MOVIE_CATEGORY,
} from "redux/actions/detailMovie-actions";
const Cardx = ({ getIdMovie, getMovieByCategory, query,data, loading }) => {
  AOS.init();
  const location = useLocation();
  let loc = location.pathname.split("/");
  console.log(loc, "lokasi")
  const { activeTab, setActiveTab, toggle, activeCategory } = useContext(darkMode);
  console.log(activeTab, "akitp");
  const valueCategory = [
    {
      name: "Thriller",
      spacing: "mr-3",
      page: "/characters",
      id: 1,
    },
    {
      name: "Comedy",
      spacing: "mr-3",
      page: "/review",
      id: 2,
    },
    {
      name: "Korea",
      spacing: "mr-3",
      page: "/overview",
      id: 3,
    },
    {
      name: "Si-Fi",
      spacing: "mr-3",
      page: "/characters",
      id: 4,
    },
    {
      name: "Action",
      spacing: "mr-3",
      page: "/review",
      id: 5,
    },
  ];
  const [pell, setPell] = useState("1");
  const [delay, setDelay] = useState(2000);
  const [result, setResult] = useState("");
  const intoDetail = (e) => {
    console.log(e, "ini id");
    getIdMovie(e);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  console.log(query,"just once")
  useEffect(async () => {
    if (query === "" && activeCategory === "All") {
      getMovieByCategory({
        genre: "all",
        page: 1,
      });
    }
    else {
      getMovieByCategory({
        genre: activeCategory,
        page: 1,
      });
    }
  if (data.length === 0) {
    setResult("Sorry Data Not Found");
  }else {
    setResult("")
  }
    // setPell(activeTab);
  }, [query, activeCategory, data]);
  console.log(data, "banding");

  let z = 300;
  const Loopx = data.map((val, i) => {
    if (i !== 0 && z <= 1500) {
      z += 300;
    } else {
      z = 300;
    }

    //map, foreach, while, do while, for
    return (
      <>
        <div className="col-auto m-md-0 mx-auto pb-2">
          <Link
            onClick={() => intoDetail(val._id)}
            to={"/detail_movie/" + val._id}
            className="text-inherit"
          >
            {/* <Slide bottom duration={z}> */}
            <img
              className="cardx"
              src={val.image}
              data-aos="fade-up"
              data-aos-delay={(300 + z).toString()}
              data-aos-duration={(300 + z).toString()}
            />
            <b>
              <p
                className="text-break m-0 text pt-2"
                style={
                  ({ color: "white" }, { fontSize: "20px" }, { width: "8rem" })
                }
              >
                {val.Movie}
              </p>
            </b>
            <p
              className="text-break text"
              style={({ marginTop: "-25px" }, { width: "8rem" })}
            >
              {val.Genre}
            </p>
          </Link>
        </div>
      </>
    );
  });
  return (
    <>
      <Category valueProps={valueCategory} detect={"homepage"} />
      {console.log(pell, activeTab, "active tab")}
      <TabContent activeTab={pell}>
        <TabPane tabId="1">
          <div className="d-flex flex-wrap mx-auto">
            {Loopx}
            <h1 className="mx-auto">{result}</h1>
          </div>
        </TabPane>
        {/* <TabPane tabId="2">
          <div className="d-flex flex-wrap mx-auto">"2"</div>
        </TabPane>
        <TabPane tabId="3">
          <div className="d-flex flex-wrap mx-auto">"3"</div>
        </TabPane>
        <TabPane tabId="4">
          <div className="d-flex flex-wrap mx-auto">"4"</div>
        </TabPane>
        <TabPane tabId="5">
          <div className="d-flex flex-wrap mx-auto">"5"</div>
        </TabPane> */}
      </TabContent>
    </>
  );
};
const mapStateToProps = (state) => {
  console.log(state, "state to props");
  return {
    data: state.movie.data.data,
    loading: state.movie.loading,
    query: state.movie.query,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getIdMovie: (data) => dispatch({ type: DETAIL_MOVIE, payload: data }),
  getMovieByCategory: (data) =>
    dispatch({ type: MOVIE_CATEGORY, payload: data }),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cardx);
