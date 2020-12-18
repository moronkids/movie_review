import React from "react";
import Icon from "components/Layout/icon";
import IconSearch from "assets/images/search.svg";
import "assets/scss/styles.scss";
const header = () => {
  return (

      <div className="sticky-top container navbar navbar-expand-lg navbar-light mx-auto border-bottom bg-white">
        <Icon center={true} textColor="blue"></Icon>
        <input
          className="d-md-block d-none mx-auto"
          placeholder="Search Movie"
        ></input>
        <div className="d-flex">
          <span className="d-md-none d-block pr-2 align-middle my-auto mx-auto align-middle">
            <img width="20" height="auto" src={IconSearch}></img>
          </span>
          <span className="signin">Sign In</span>
        </div>
      </div>
  );
};

export default header;
