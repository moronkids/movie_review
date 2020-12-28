/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState, useContext, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { darkMode } from "provider/darkmode";
import Icon from "components/Layout/icon";
import { connect } from "react-redux";
import Spinner from "components/Layout/spinner";
import { SIGN_UP, UPDATE_STATUS } from "redux/actions/auth-actions";
const ModalExample = ({ todos, loading, signUpFunc, falseLogged, logged }) => {
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
  } = useContext(darkMode);

  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_, setPassword_] = useState("");
  const [validationx, setValidationx] = useState(false);
  const [count, setCount] = useState(5);
  const validateFormFields = () => {
    console.log(validationx, "tes bro")
    if (validationx) {
      const data = {
        email: email,
        password: password,
        username: username,
        passwordConfirmation: password_,
        fullName: fullName,
      };
      console.log("masuk", "click");
      signUpFunc(data);

    }
  };
  console.log(count, "diawal");
  useEffect(() => {
    console.log(count, "hitungcount")
    if (todos.todos.logged) {
      // toggleModalSignUp(false);
      count > 0 && setTimeout(() => setCount(count - 1), 1000);

    }
    if(count === 0) {
      console.log("masuksini ga?")
      toggleAll();
      falseLogged();
    }
  }, [count,logged]);

  return (
    <div>
      <Modal
        isOpen={modalSignUp}
        toggle={toggleModalSignUp}
        className={className}
      >
        <ModalHeader toggle={toggleModalSignUp} close={closeBtn}>
          <Icon center={true} textColor={"black"} />
        </ModalHeader>
        <ModalBody>
          {loading ? <Spinner /> : null}
          {loading === false ? (
            <div clasName="d-flex">
              <div className="mx-auto">
                <p className="text-danger text-center">
                  {console.log(todos, "ini cel")}
                  {todos.todos.logged ? (`Signup Success, this modal will automaticlly close in ${count}`) : todos.todos.data }
                </p>
              </div>
            </div>
          ) : null}
          <div class="form__group field">
            <input
              type="input"
              class="form__field"
              placeholder="Name"
              name="username"
              id="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setValidationx(
                  email.length > 0 &&
                    password.length > 0 &&
                    password_.length > 0 &&
                    username.length > 0 &&
                    fullName.length > 0
                );
              }}
              required
            />
            <label for="name" class="form__label">
              Username
            </label>
          </div>
          <div class="form__group field">
            <input
              type="input"
              class="form__field"
              placeholder="Name"
              name="fullName"
              id="fullName"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                setValidationx(
                  email.length > 0 &&
                    password.length > 0 &&
                    password_.length > 0 &&
                    username.length > 0 &&
                    fullName.length > 0
                );
              }}
              required
            />
            <label for="name" class="form__label">
              Fullname
            </label>
          </div>
          <div class="form__group field">
            <input
              type="input"
              class="form__field"
              placeholder="Name"
              name="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setValidationx(
                  email.length > 0 &&
                    password.length > 0 &&
                    password_.length > 0 &&
                    username.length > 0 &&
                    fullName.length > 0
                );
              }}
              required
            />
            <label for="name" class="form__label">
              Email
            </label>
          </div>
          <div class="form__group field">
            <input
              type="input"
              class="form__field"
              placeholder="Name"
              name="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setValidationx(
                  email.length > 0 &&
                    password.length > 0 &&
                    password_.length > 0 &&
                    username.length > 0 &&
                    fullName.length > 0
                );
              }}
              required
            />
            <label for="name" class="form__label">
              Password
            </label>
          </div>
          <div class="form__group field">
            <input
              type="input"
              class="form__field"
              placeholder="Name"
              name="password"
              id="password_"
              value={password_}
              onChange={(e) => {
                setPassword_(e.target.value);
                setValidationx(
                  email.length > 0 &&
                    password.length > 0 &&
                    password_.length > 0 &&
                    username.length > 0 &&
                    fullName.length > 0
                );
              }}
              required
            />
            <label for="name" class="form__label">
              Password Confirmation
            </label>
          </div>
        </ModalBody>
        <ModalFooter>
          <div
            className="d-flex button-modal w-100 mx-auto"
            onClick={validateFormFields}
          >
            <span className="mx-auto">Sign Up</span>
          </div>
          {/* <Button color="primary" onClick={toggleModal}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button> */}
        </ModalFooter>
        <div className="d-flex">
          <div className="mx-auto modal-validation-access m-3">
            Do you have an account?
            <span className="text-pink" onClick={toggleModal}>
              Sign In
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
    logged: state.todo.todos.logged,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signUpFunc: (data) => dispatch({ type: SIGN_UP, payload: data }),
  falseLogged: (data) => dispatch({ type: UPDATE_STATUS, payload: false }),
});
export default connect(mapStateToProps, mapDispatchToProps)(ModalExample);
