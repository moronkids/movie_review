import React, {useState, useContext, useEffect} from "react";
import { Homepage } from "data_dummy/homepage";
import Category from "components/Homepage/category";
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
import {darkMode} from "provider/darkmode"
import { act } from "@testing-library/react";
const Cardx = (props) => {

    const {
      activeTab,
      setActiveTab,
      toggle,
    } = useContext(darkMode);
    console.log(activeTab, "akitp")
  const valueCategory = [
    {
      name: "Thriller",
      spacing: "mr-3",
      page: "/characters",
      id: 1
    },
    {
      name: "Comedy",
      spacing: "mr-3",
      page: "/review",
      id: 2
    },
    {
      name: "Korea",
      spacing: "mr-3",
      page: "/overview",
      id: 3
    },
    {
      name: "Si-Fi",
      spacing: "mr-3",
      page: "/characters",
      id: 4
    },
    {
      name: "Action",
      spacing: "mr-3",
      page: "/review",
      id: 5
    },
  ];
  const [pell, setPell] = useState("1")
  useEffect(() => {
    // if(pell !== activeTab) {
    //   setPell(activeTab);
    // }
    setPell(activeTab)
  }, [activeTab]);
  console.log(pell, activeTab, "banding");
  return (
    <>
      <Category valueProps={valueCategory} detect={"homepage"} />
    {console.log(pell, activeTab, "active tab")}
      <TabContent activeTab={pell}>
        <TabPane tabId="1">
          <div className="d-flex flex-wrap mx-auto">
            {Homepage.map((val) => {
              //map, foreach, while, do while, for
              return (
                <>
                  <div className="col-auto m-md-0 mx-auto ">
                    <img className="cardx" src={val.image} />
                    <p style={({ color: "white" }, { fontSize: "20px" })}>
                      {val.title}
                    </p>
                    <p style={{ marginTop: "-25px" }}>{val.category}</p>
                  </div>
                </>
              );
            })}
          </div>
        </TabPane>
        <TabPane tabId="2">
          <div className="d-flex flex-wrap mx-auto">
            "2"
          </div>
        </TabPane>
        <TabPane tabId="3">
          <div className="d-flex flex-wrap mx-auto">
            "3"
          </div>
        </TabPane>
        <TabPane tabId="4">
          <div className="d-flex flex-wrap mx-auto">
            "4"
          </div>
        </TabPane>
        <TabPane tabId="5">
          <div className="d-flex flex-wrap mx-auto">
            "5"
          </div>
        </TabPane>
      </TabContent>
    </>
  );
};

export default Cardx;
