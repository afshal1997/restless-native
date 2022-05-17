import React from 'react'
import { Col } from 'react-bootstrap'

const GalleryLayout = (props) => {
    return (
        <>
            <Col lg={`${props.colNumber}`} className='p-0'>
                <img className='w-100 h-100 lazy-loaded-image lazy' src={props.GalleryImg} alt={props.GalleryImg} loading='lazy' />
            </Col>
        </>
    )
}

export default GalleryLayout