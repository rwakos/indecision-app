import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) =>(
    <Modal
    isOpen={!!props.selectedOption}
    closeTimeoutMS={200}
    onRequestClose={props.handleCloseModal}
    contentLabel="Modal"
    className="modal"
  >
    <h3 className="modal__title">Modal Content</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleCloseModal}>Close Window</button>
  </Modal>

);

export default OptionModal;