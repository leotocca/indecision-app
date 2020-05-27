import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    onRequestClose={props.handleCloseModal}
    closeTimeoutMS={200}
    className="modal"
  >
    <h2 className="modal__title">Selected Option</h2>
    <p className="modal__body">{props.selectedOption}</p>
    <button className="button" onClick={props.handleCloseModal}>
      Okay
    </button>
  </Modal>
);

export default OptionModal;
