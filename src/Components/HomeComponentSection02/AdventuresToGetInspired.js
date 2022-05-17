import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col } from 'react-bootstrap'

const AdventuresToGetInspired = ({ titleSpan01, titleSpan02, title01, title02, video01, video02, AdventuresToGetClass01, AdventuresToGetClass02 }) => {
    return (
        <>
            <Col lg={6}>
                <div className={`${AdventuresToGetClass01} position-relative`}>
                    {video01}
                    <h3 data-aos="zoom-in" data-aos-duration="1500"><span>{titleSpan01}</span> {title01}</h3>
                </div>
                <div className={`${AdventuresToGetClass02} position-relative`}>
                    {video02}
                    <h3 data-aos="zoom-in" data-aos-duration="1500"><span>{titleSpan02}</span> {title02}</h3>
                </div>
            </Col>
        </>
    )
}

export default AdventuresToGetInspired