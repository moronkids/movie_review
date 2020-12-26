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
} from "reactstrap";
import classnames from "classnames";
import Styled from "styled-components";
import { darkMode } from "provider/darkmode";
import { act } from "@testing-library/react";
import { DETAIL_MOVIE } from "redux/actions/detailMovie-actions";
const Cardx = ({ getIdMovie }) => {
  AOS.init();
  const { activeTab, setActiveTab, toggle } = useContext(darkMode);
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
  const intoDetail = (e) => {
    console.log(e, "ini id");
    getIdMovie(e);
  };
  useEffect(() => {
    // if(pell !== activeTab) {
    //   setPell(activeTab);
    // }
    setPell(activeTab);
  }, [activeTab]);
  console.log(pell, activeTab, "banding");
  let z = 300;
  const Loopx = Homepage.map((val, i) => {
    if (i !== 0 && z <= 1500) {
      z += 300;
    } else {
      z = 300;
    }

    //map, foreach, while, do while, for
    return (
      <>
        <div className="col-auto m-md-0 mx-auto ">
          <Link
            onClick={() => intoDetail(val.id)}
            to={"/detail_movie/" + val.id}
            className=""
          >
            {/* <Slide bottom duration={z}> */}
            <img
              className="cardx"
              src={val.image}
              data-aos="fade-up"
              data-aos-delay={(300 + z).toString()}
              data-aos-duration={(300 + z).toString()}
            />
            <p style={({ color: "white" }, { fontSize: "20px" })}>
              {val.title}
            </p>
            <p style={{ marginTop: "-25px" }}>{val.category}</p>
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
          <div className="d-flex flex-wrap mx-auto">{Loopx}</div>
        </TabPane>
        <TabPane tabId="2">
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
        </TabPane>
      </TabContent>
    </>
  );
};
const mapStateToProps = (state) => {
  console.log(state, "state to props");
  // return {
  //   todos: state.todo,
  //   loading: state.todo.loading,
  // };
};

const mapDispatchToProps = (dispatch) => ({
  getIdMovie: (data) => dispatch({ type: DETAIL_MOVIE, payload: data }),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cardx);
