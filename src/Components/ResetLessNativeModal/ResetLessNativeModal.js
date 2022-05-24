import React from "react";
import { Button, Modal } from "react-bootstrap";
import Container from "./../MailChimp/Container";
const ResetLessNativeModal = ({ show, handleClose }) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose} centered className="shadow-lg">
        <Button className="modalCloseBtn" onClick={handleClose}>
          X
        </Button>
        <Modal.Body className="text-center text-light">
          <div className="modalEmail">
            <div className="successMessage d-none">
              <h6>
                Thank you for subscribing to our email, please check your inbox
              </h6>
            </div>
            <h1>
              <b>Join our tribe!</b>
            </h1>
            <p>
              Be the first to know about our new adventures, exclusive offers,
              special events and our MEDIA PROJECT!
            </p>
            <Container />
            <h6>
              We respect your privacy. We are NOT gonna spam you! WE hate that
              as much as YOU do!
            </h6>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ResetLessNativeModal;
