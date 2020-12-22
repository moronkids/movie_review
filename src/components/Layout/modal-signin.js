/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState, useContext } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { darkMode } from "provider/darkmode";
import Icon from "components/Layout/icon"
const ModalExample = (props) => {
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
  } = useContext(darkMode);
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
          <Icon center={true} textColor={localStorage.darkmode === "light" ? "blue" : "blue"} />
        </ModalHeader>
        <ModalBody>
          <div class="form__group field">
            <input
              type="input"
              class="form__field"
              placeholder="Name"
              name="name"
              id="name"
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
              name="name"
              id="name"
              required
            />
            <label for="name" class="form__label">
              Password
            </label>
          </div>
        </ModalBody>
        <ModalFooter>
          <div className="d-flex button-modal w-100 mx-auto">
            <span className="mx-auto">Sign in</span>
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

export default ModalExample;
