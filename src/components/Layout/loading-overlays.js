import React from 'react';
import { SET_LOADING } from "redux/actions/auth-actions";
import LoadingOverlay from "react-loading-overlay";
import { connect } from "react-redux";
import styled from "styled-components";
const StyledLoader = styled(LoadingOverlay)`
    height:100vh;
  overflow: scroll;

  .MyLoader_overlay {


    }
    &.MyLoader_wrapper--active {

    overflow: hidden;
  }
`;
const LoadingOverlays = (props, {loading}) => {
    console.log(loading, "login bro")
    return (
      <>

          <StyledLoader active={false} spinner classNamePrefix="MyLoader_">
            {props.children}
          </StyledLoader>

      </>
    );
};

const mapStateToProps = (state) => {
    console.log(state, "test")
  return {
    loading: state.todo.loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  // signInFunc: () => dispatch({ type:SET_LOADING}),
});
export default connect(mapStateToProps, mapDispatchToProps)(LoadingOverlays);