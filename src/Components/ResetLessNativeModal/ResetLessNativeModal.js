import axios from 'axios'
import React, { useState } from 'react'
import { Button, FormControl, InputGroup, Modal } from 'react-bootstrap'
const ResetLessNativeModal = ({ show, handleClose }) => {
    const url = 'https://api.restlessnative.com/public/api/'
    const [data, setData] = useState({
        email: '',
        phoneNumber: ''
    })

    function submit(e) {
        e.preventDefault();
        axios.get(url + data.phoneNumber + '/' + data.email)
            .then(res => {
                console.log(res.data)
            })
    }

    function handle(e) {
        const newData = { ...data }
        newData[e.target.id] = e.target.value
        setData(newData)
    }
    return (
        <div>
            <Modal show={show} onHide={handleClose} centered className='shadow-lg'>
                <Button className='modalCloseBtn' onClick={handleClose}>X</Button>
                <Modal.Body className='text-center text-light'>
                    <div className="modalEmail">
                        <div className="successMessage d-none">
                            <h6>Thank you for subscribing to our email, please check your inbox</h6>
                        </div>
                        <h1>
                            <b>Join our tribe!</b>
                        </h1>
                        <p>
                            Be the first to know about our new adventures, exclusive offers, special events and our MEDIA PROJECT!
                        </p>
                        <form onSubmit={(e) => submit(e)}>
                            <InputGroup className="mb-3">
                                <FormControl
                                    onChange={(e) => handle(e)} id='email'
                                    value={data.email}
                                    placeholder="Email Address"
                                    name='email'
                                    aria-label="Email Address"
                                    aria-describedby="Email"
                                    type='email'
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <FormControl
                                    onChange={(e) => handle(e)} id='phoneNumber'
                                    value={data.phoneNumber}
                                    placeholder="Phone Number"
                                    name='phoneNumber'
                                    aria-label="Number"
                                    aria-describedby="Number"
                                    type='number'
                                    required
                                />
                            </InputGroup>
                            <Button className='mb-4' type='sumbit' variant="primary">Subscribe</Button>
                        </form>
                        <h6>We respect your privacy. We are NOT gonna spam you! WE hate that as much as YOU do!</h6>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ResetLessNativeModal