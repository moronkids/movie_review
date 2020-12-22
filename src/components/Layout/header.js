import React, { useContext, useState } from "react";
import Icon from "components/Layout/icon";
import IconSearchBlack from "assets/images/search.svg";
import IconSearchWhite from "assets/images/search-white.svg";
import IconCloseBlack from "assets/images/close.svg";
import IconCloseWhite from "assets/images/close-white.svg";
import "assets/scss/styles.scss";
import { darkMode } from "provider/darkmode";
import ModalSignIn from "components/Layout/modal-signin";
import ModalSignUp from "components/Layout/modal-signup";
import Search from "components/Layout/search";
const Header = (props) => {
  const {
    theme,
    toggleTheme,
    modal,
    setModal,
    toggleModal,
    setModalSignUp,
    toggleModalSignUp,
    modalSignUp,
  } = useContext(darkMode);
  const [search, setSearch] = useState(false);
  const toggleSearchBox = () => {
    setSearch(!search);
    console.log(search)
  };
  return (
    // <div className={"sticky-top container navbar navbar-expand-lg navbar-light mx-auto"+ localStorage.getItem("darkmode") === true ? }>

    <div>
      <div
        className={
          "sticky-top container navbar navbar-expand-lg navbar-light mx-auto mode"
        }
      >
        <Icon center={false} textColor="blue"></Icon>
        <Search show="web" />
        <div className="d-flex">
          <span
            onClick={toggleSearchBox}
            className="d-md-none d-block pr-2 align-middle my-auto mx-auto align-middle"
          >
            {search ? (
              <img
                width="20"
                height="auto"
                src={
                  localStorage.darkmode === "light"
                    ? IconCloseBlack
                    : IconCloseWhite
                }
              />
            ) : (
              <img
                width="20"
                height="auto"
                src={
                  localStorage.darkmode === "light"
                    ? IconSearchBlack
                    : IconSearchWhite
                }
              />
            )}
          </span>
          <span className="signin" onClick={toggleModal}>
            Sign In
          </span>
        </div>
        <div className="d-block d-md-none d-flex position-relative w-100">
          {search ? (
            <>
              <Search show="mobile" />
              <span className="d-block d-sm-none">
                <img
                  width="20"
                  height="auto"
                  src={IconSearchBlack}
                  alt=""
                  className="md-d-none position-absolute"
                  style={{ right: "15px", top: "10px" }}
                />
              </span>
            </>
          ) : null}
        </div>
      </div>
      <ModalSignIn />
      <ModalSignUp />
    </div>
  );
};

export default Header;
