import React from 'react';
import styled from "styled-components"
import Pencil from "assets/images/pencil.svg"
import {connect} from "react-redux";
const Photo = ({photo}) => {
  const Imej = styled.div`
    background-image: url(http://13.212.6.137:3000/${photo.profilePic});
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
const mapPropsToState = (state) => {
  return {
    photo : state.todo.user
  }
}
export default connect(mapPropsToState)(Photo);