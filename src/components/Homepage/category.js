import React, { useState, useEffect, useContext } from "react";
import { darkMode } from "provider/darkmode";
import {connect} from "react-redux"
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
const Category = ({props, categoryMap}) => {
  // console.log()
  const { path, setPath, setActiveTab, activeTab, togglex, activeCategory, setActiveCategory, handleCategory } = useContext(darkMode);
  console.log(props, path, "tes");
  const [toggle, setToggle] = useState(0);
  const [location, setLocation] = useState(0);
  const addActive = (e) => {
    setToggle(e);
    if (e === 0) {
      setLocation(0);
      setPath("overview");
    }
    if (e === 1) {
      setLocation(1);
      setPath("characters");
    }
    if (e === 2) {
      setLocation(2);
      setPath("reviews");
    }
    console.log("masuk", props);
  };
  useEffect(() => {

  }, [setPath]);
  const classn = "list-category my-auto";
  let cat;
  if (props.detect === "homepage") {
    cat = categoryMap.map((val, i) => {
      console.log(toggle, location, val.id, "su");
      const mix = `${val.spacing} ${classn}`;
      return (
        <NavLink
          onClick={() => {setActiveTab(categoryMap.indexOf(val).toString()); handleCategory(val); }}
          className={classnames({ active: activeTab === val.id })}
        >
          <span
            id={i}
            className={
              mix +
              (toggle === i ? " active" : " ")
            }
            onClick={(e) => {
              addActive(i);
              // togglex(val.id);
            }}
          >
            {val}
          </span>
        </NavLink>
      );
    });
  } else {
    cat = props.valueProps.map((val, i) => {
      const mix = `${val.spacing} ${classn}`;
      console.log(location, "lokass")
      return (
        <span
          id={i}
          onClick={(e) => addActive(i)}
          className={mix + (location === i ? " active" : "")}
        >
          <span className="align-middle">{val.name}</span>
        </span>
      );
    });
  }
  return (
    <div>
      <div className="mt-3">
        <span className="text-category-main">Browse by Category</span>
      </div>
      <div className="d-flex flex-wrap mb-3">
        {cat}
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    categoryMap : state.movie.category,
    props: props
  }
}

export default connect(mapStateToProps)(Category);
