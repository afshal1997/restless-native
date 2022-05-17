import React from 'react'
import { Modal } from 'react-bootstrap'
const PopUp = ({ show, handleClose, bgColor }) => {
    return (
        <div>
            <Modal
                size="lg"
                show={show}
                onHide={handleClose}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Large Modal
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
            </Modal>
        </div>
    )
}

export default PopUp