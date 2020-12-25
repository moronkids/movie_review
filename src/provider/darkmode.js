import React, { useState, useEffect } from "react";
export const darkMode = React.createContext();
const Darkmode = (props) => {
  const [theme, setTheme] = useState(localStorage.getItem("darkmode"));
  const [path, setPath] = useState("overview");
  const [modal, setModal] = useState(false);
  const [modalSignUp, setModalSignUp] = useState(false);
  const [activeTab, setActiveTab] = useState("1");

  // const togglex = (tab) => {
  //   console.log(tab,"initab")
  //   if (activeTab !== tab) setActiveTab(tab);
  // };
  const toggleModal = () => {
    toggleAll();
    setModal(!modal);
    // setModalSignUp(!modalSignUp);
  };
  const toggleModalSignUp = () => {
    toggleAll();
    setModalSignUp(!modalSignUp);
  };
  const toggleAll = () => {
    setModalSignUp(false);
    setModal(false);
  };

  const closeBtn = (
    <button className="close" onClick={toggleAll}>
      &times;
    </button>
  );
  const toggleTheme = () => {
    if (theme === "light") {
      localStorage.setItem("darkmode", theme === "dark" ? "light" : "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("darkmode", theme === "dark" ? "light" : "dark");
      setTheme("light");
    }
  };
  return (
    <darkMode.Provider
      value={{
        toggleTheme,
        theme,
        setTheme,
        path,
        setPath,
        modal,
        setModal,
        toggleModal,
        closeBtn,
        modalSignUp,
        setModalSignUp,
        toggleModalSignUp,
        activeTab,
        setActiveTab
      }}
    >
      {props.children}
    </darkMode.Provider>
  );
};

export default Darkmode;
