/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState, useEffect, useContext } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { darkMode } from "provider/darkmode";
import Icon from "components/Layout/icon";
import Spinner from "components/Layout/spinner";
import { connect } from "react-redux";

import { SIGN_IN } from "redux/actions/auth-actions";
const ModalExample = ({
  email,
  setEmail,
  password,
  signInFunc,
  setPassword,
  validation,
  setValidation,
  loginResult,
  loading,
  todos
}) => {
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
    t
  } = useContext(darkMode);
  // console.log(loading,todos.todos.length,  "inid loading");
  const [emailx, setEmailx] = useState("");
  const [passwordx, setPasswordx] = useState("");
  const [validationx, setValidationx] = useState(false);
  function validateFormFields() {
    console.log("masuk");

    setValidationx(emailx.length > 0 && passwordx.length > 0);
    if (validationx) {
      const data = {
        email: emailx,
        password: passwordx,
      };
      console.log(emailx, passwordx, "click");
      signInFunc(data)
    }
    // return email.length > 0 && password.length > 0;
  }
  function loginData(event) {
    event.preventDefault();
    setValidationx(emailx.length > 0 && passwordx.length > 0);
  }

  const onChangeEmail = (e) => {
    setEmailx(e.target.value);
  };
  const onChangePassword = (e) => {
    setPasswordx(e.target.value);
    setValidationx(emailx.length > 0 && passwordx.length > 0);
  };
  console.log(emailx, passwordx, "cek aja");
  //   const { buttonLabel, className } = props;

  //   const [modal, setModal] = useState(false);

  //   const toggle = () => setModal(!modal);

  //   const closeBtn = (
  //     <button className="close" onClick={toggle}>
  //       &times;
  //     </button>
  //   );

  return (
    <div>
      {/* <Button color="danger" onClick={toggle}>
        {buttonLabel}
      </Button> */}
      <Modal isOpen={modal} toggle={toggleModal} className={className}>
        <ModalHeader toggle={toggleModal} close={closeBtn}>
          <Icon center={true} textColor={"black"} />
        </ModalHeader>
        <form onSubmit={loginData} className="">
          <ModalBody>
            {loading ? <Spinner /> : null}
            {loading === false ?
            <div clasName="d-flex">
              <div className="mx-auto"><p className="text-danger text-center">{todos.todos.data}</p></div>
            </div>: null}
            <div class="form__group field">
              <input
                type="input"
                class="form__field"
                placeholder="Name"
                name="name"
                id="name"
                value={emailx}
                // onChange={(e) => setEmail(e.target.value)}
                onChange={(e) => onChangeEmail(e)}
                required
              />
              <label for="name" class="form__label">
                Email
              </label>
            </div>
            <div class="form__group field">
              <input
                type="password"
                class="form__field"
                placeholder="Name"
                name="name"
                id="name"
                value={passwordx}
                // onChange={(e) => setPassword(e.target.value)}
                onChange={(e) => onChangePassword(e)}
                required
              />
              <label for="name" class="form__label">
                Password
              </label>
            </div>
          </ModalBody>
          <ModalFooter>
            <div
              className={`d-flex w-100 mx-auto ${
                validationx ? `button-modal` : `button-modal-disabled`
              }`}
              onClick={validateFormFields}
            >
              <span className="mx-auto">Sign in</span>
            </div>
            {/* <Button color="primary" onClick={toggleModal}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button> */}
          </ModalFooter>
        </form>
        <div className="d-flex">
          <div className="mx-auto modal-validation-access m-3">
            Doesn't have an account?
            <span className="text-pink" onClick={toggleModalSignUp}>
              Sign Up
            </span>
          </div>
        </div>
      </Modal>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    todos: state.todo,
    loading: state.todo.loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signInFunc: (data) => dispatch({ type: SIGN_IN, payload: data }),
});
export default connect(mapStateToProps, mapDispatchToProps)(ModalExample);
