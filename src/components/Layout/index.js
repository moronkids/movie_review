import React, { useState, useContext } from "react";
import Header from "components/Layout/header";
import Body from "components/Layout/body";
import Footer from "components/Layout/footer";
import Main from "components/Homepage/index";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "components/Layout/theme";
import { GlobalStyles } from "components/Layout/global";
import { darkMode } from "provider/darkmode";

const Index = (props) => {
  const { theme, toggleTheme } = useContext(darkMode);
  return (
    <div>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <div
          className="sticky-top w-100 h-100
        "
        >
          <div className="none md-block position-absolute  sticky-top w-100 h-100 ">
            <div
              className={
                theme === "light"
                  ? "darkicon float-right m-3"
                  : "lighticon float-right m-3"
              }
              onClick={() => toggleTheme()}
            />
          </div>
        </div>
        <Header />
        <Body>
          {props.children}
        </Body>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default Index;
