import React from 'react';
import styled from "styled-components"
import Pencil from "assets/images/pencil.svg"
const Photo = () => {
  const Imej = styled.div`
    background-image: url("https://randomuser.me/api/portraits/women/40.jpg");
    border-radius: 50%;
    width: 170px;
    height: 170px;
    background-repeat: no-repeat;
    background-size: contain;
  `;

  const Imejx = styled.div`
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    bottom: 0;
    /* border: 1px solid blue; */
    margin: 3p;
    padding: -5px;
    margin: 10px;
    background: white;
    display: flex;
  `;
    return (
      <>
        <div className="d-flex">
          <div className="mx-auto position-relative">
            <div className="mr-3 rounded-circle">
              <Imejx>
                <img className="mx-auto" width="25px"  src={Pencil} alt="" />
              </Imejx>
            </div>
            <Imej />
          </div>
        </div>
      </>
    );
};

export default Photo;