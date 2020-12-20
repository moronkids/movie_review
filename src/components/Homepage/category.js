import React, { useState, useEffect, useContext } from "react";
import { darkMode } from "provider/darkmode";
const Category = (props) => {
  // console.log()
  const { path, setPath } = useContext(darkMode);
  console.log(props, path, "tes");
  const [toggle, setToggle] = useState(0);
  const [location, setLocation] = useState(props.location);
  const addActive = (e) => {
    setToggle(e);
    if (e === 0) {
      setLocation("/overview");
      setPath("overview");
    }
    if (e === 1) {
      setLocation("/characters");
      setPath("characters");
    }
    if (e === 2) {
      setLocation("/review");
      setPath("reviews");
    }
    console.log("masuk", e, location);
  };
  const classn = "list-category";
  let cat;
  if (props.detect === "homepage") {
    cat = props.valueProps.map((val, i) => {
      console.log(toggle, location);
      const mix = `${val.spacing} ${classn}`;
      return (
        <span
          id={i}
          onClick={(e) => addActive(i)}
          className={mix + (toggle === i ? " active" : "")}
        >
          {val.name}
        </span>
      );
    });
  } else {
    cat = props.valueProps.map((val, i) => {
      const mix = `${val.spacing} ${classn}`;
      return (
        <span
          id={i}
          onClick={(e) => addActive(i)}
          className={mix + (location === val.page ? " active" : "")}
        >
          {val.name}
        </span>
      );
    });
  }
  return (
    <div>
      <div className="mt-3">
        <span className="text-category-main">Browse by Category</span>
      </div>
      <div className="">
        {cat}
        {/* <span
            id="1"
            onClick={(e) => addActive("1")}
            className={classn + (toggle === "1" ? " active" : "")}
          >
            all
          </span>
          <span
            id="2"
            onClick={(e) => addActive("2")}
            className={classn + (toggle === "2" ? " active" : "")}
          >
            sample
          </span>
          <span
            id="3"
            onClick={(e) => addActive("3")}
            className={classn + (toggle === "3" ? " active" : "")}
          >
            sample
          </span>
          <span
            id="4"
            onClick={(e) => addActive("4")}
            className={classn + (toggle === "4" ? " active" : "")}
          >
            sample
          </span> */}
      </div>
    </div>
  );
};

export default Category;
