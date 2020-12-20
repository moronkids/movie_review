import React, { useContext } from "react";
import Icon from "components/Layout/icon";
import AppleStore from "assets/images/apple_store.svg";
import PlayStore from "assets/images/google_play.svg";
import IconFB from "assets/images/icon_facebook.png";
import { darkMode } from "provider/darkmode";
const Footer = () => {
  const { theme, toggleTheme } = useContext(darkMode);
  return (
    <div className="pt-2 footer pb-0 ">
      <div className="container border-bottom border-white pr-0 pb-md-4">
        <Icon center={false} textColor="white" position="absolute"></Icon>
        <div className="row text-white mx-auto mt-2 mb-2">
          <div className="col-sm md-col-sm pl-0 pt-5 ml-2 text-section1 mr-md-5 mb-3 md-mb-0">
            <span className="w-75">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
              eos natus id magnam quidem numquam deleniti ut ipsam nostrum eaque
              quos delectus ullam labore dignissimos at, saepe pariatur ea
              debitis.
            </span>
          </div>
          <div className="col-6 col-sm-2 pl-0 ml-0 ml-md-2 text-section2 mt-1">
            <ul className="pl-2 pl-md-4">Tentang Kami</ul>
            <ul className="pl-2 pl-md-4">Blog</ul>
            <ul className="pl-2 pl-md-4">Layanan</ul>
            <ul className="pl-2 pl-md-4">Kurir</ul>
            <ul className="pl-2 pl-md-4">Pusat Media</ul>
          </div>
          <div className="col-6 col-sm-3 pl-0 mb-4 md-mb-0">
            <div className="md-float-right">
              {" "}
              <div className="text-download ml-2">Download</div>
              <div className="d-sm-none d-md-block d-xl-flex col-sm-12 pl-0">
                <div className="sm-col-sm-12 pl-0">
                  <img src={PlayStore} width="auto" height="50" />
                </div>
                <div className="sm-col-sm-12 pl-1">
                  <img
                    src={AppleStore}
                    width="auto"
                    height="50"
                    className="mt-1"
                  />
                </div>
              </div>
              <div className="text-download ml-2">Social Media</div>
              <div className="d-flex">
                <div className="icon-fb ml-2 mr-2 mt-2" />
                <div className="icon-pinterest ml-2 mr-2 mt-2" />
                <div className="icon-instagram ml-2 mr-2 mt-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex text-center text-white p-3    ">
        <div className="mx-auto">
          <span className="vertical-align-middle my-auto">
            <b>Made with LOVE Frontend Team B</b>
          </span>
          <br />
          <span
            className={
              theme === "light"
                ? "d-block mx-auto d-md-none darkicon"
                : "d-block mx-auto d-md-none lighticon"
            }
            onClick={() => toggleTheme()}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
