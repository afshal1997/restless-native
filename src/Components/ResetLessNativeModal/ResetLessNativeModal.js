import React from 'react'
import { Button, FormControl, InputGroup, Modal } from 'react-bootstrap'

const ResetLessNativeModal = ({ show, handleClose }) => {
    return (
        <div>
            <Modal show={show} onHide={handleClose} centered className='shadow-lg'>
                <Button className='modalCloseBtn' onClick={handleClose}>X</Button>
                <Modal.Body className='text-center text-light'>
                    <div className="modalEmail">
                        <h1>
                            <b>Join our tribe!</b>
                        </h1>
                        <p>Be the first to know about our new adventures, exclusive offers, special events and our MEDIA PROJECT!</p>
                        <form action="">
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Email Address"
                                    aria-label="Email Address"
                                    aria-describedby="Email"
                                    type='email'
                                />
                                {/* <InputGroup.Text id="Email" className='btn-primary'>Subscribe</InputGroup.Text> */}
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Phone Number"
                                    aria-label="Number"
                                    aria-describedby="Number"
                                    type='number'
                                    required
                                />
                                {/* <InputGroup.Text id="Email" className='btn-primary'>Subscribe</InputGroup.Text> */}
                            </InputGroup>
                            <Button type='sumbit' className='mb-4' variant="primary">Subscribe</Button>
                        </form>

                        <h6>We respect your privacy. We are NOT gonna spam you! WE hate that as much as YOU do!</h6>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ResetLessNativeModal