import React, {useContext} from "react";
import Icon from "components/Layout/icon";
import IconSearch from "assets/images/search.svg";
import "assets/scss/styles.scss";
import { darkMode } from "provider/darkmode";
const Header = (props) => {
    const { theme, toggleTheme } = useContext(darkMode);
  return (
    // <div className={"sticky-top container navbar navbar-expand-lg navbar-light mx-auto"+ localStorage.getItem("darkmode") === true ? }>

        <div
          className={
            "sticky-top container navbar navbar-expand-lg navbar-light mx-auto mode"
          }
        >

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

export default Header;
