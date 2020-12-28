import React, { useState , useEffect,useContext} from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import styled from "styled-components";
import { connect } from "react-redux";
import { darkMode } from "provider/darkmode";
import { SIGN_OUT } from "redux/actions/auth-actions";
  const Imej = styled.div`
    background-image: url("https://randomuser.me/api/portraits/women/40.jpg");
    border-radius: 50%;
    width: 45px;
    height: 45px;
    background-repeat: no-repeat;
    background-size: contain;
  `;
const Example = ({props, signOut, loading}) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    theme,
    toggleTheme,
    modal,
    setModal,
    toggleModal,
    closeBtn,
    className,
    modalSignUp,
    toggleModalSignUp,
    setModalSignUp,
    toggleAll,
    count,
    setCount,
  } = useContext(darkMode);
  const toggle = () => setIsOpen(!isOpen);
  useEffect(() => {

  }, [loading]);
  return (
    <div className="w-100 position-relative d-flex">
      <Collapse isOpen={isOpen} className="position-absolute w-100 mt-5">
        <Card>
          <CardBody className="p-2" style={{color: localStorage.darkmode === "dark" ? "white":"black"}}>
            <div className="text-dark border-bottom py-1" >Profile</div>
            <div className="text-dark border-bottom py-1" >Help</div>
            <div className="text-dark py-1" onClick={() => {signOut();setCount(5)}}>Signout</div>

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
const mapStateToProps = (state) => {
  return {
    loading: state.todo.loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signOut: (data) => dispatch({ type: SIGN_OUT}),
});
export default connect(mapStateToProps, mapDispatchToProps)(Example);
