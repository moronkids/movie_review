import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import styled from "styled-components";
  const Imej = styled.div`
    background-image: url("https://randomuser.me/api/portraits/women/40.jpg");
    border-radius: 50%;
    width: 45px;
    height: 45px;
    background-repeat: no-repeat;
    background-size: contain;
  `;
const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="w-100 position-relative d-flex">
      <Collapse isOpen={isOpen} className="position-absolute w-100 mt-5">
        <Card>
          <CardBody className="p-2" style={{color: localStorage.darkmode === "dark" ? "white":"black"}}>
            <div className="text-dark border-bottom py-1" >Profile</div>
            <div className="text-dark border-bottom py-1" >Help</div>
            <div className="text-dark py-1" >Signout</div>

          </CardBody>
        </Card>
      </Collapse>
      <div className="ml-4 mr-4 d-flex">
        <div
          className="rounded-circle w-100 my-auto"
          onClick={toggle}
          style={{ marginBottom: "1rem" }}
        >
          {" "}
          <Imej />
        </div>
      </div>
    </div>
  );
};

export default Example;
