import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col } from 'react-bootstrap'

const AdventuresToGetInspiredSection01 = ({ linkPage01, linkPage02, titleSpan01, titleSpan02, title01, title02, img01, img02, AdventuresToGetClass01, AdventuresToGetClass02 }) => {
    return (
        <>
            <Col lg={6}>
                <div className={`${AdventuresToGetClass01} position-relative`}>
                    <a href={linkPage01 ?? 'javascript:void(0)'}>
                        <img className='w-100' src={img01} />
                        <h3 data-aos="zoom-in" data-aos-duration="1500"><span>{titleSpan01}</span> {title01}</h3>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                </div>
                <div className={`${AdventuresToGetClass02} position-relative`}>
                    <a href={linkPage02 ?? 'javascript:void(0)'}>
                        <img className='w-100' src={img02}/>
                        <h3 data-aos="zoom-in" data-aos-duration="1500"><span>{titleSpan02}</span> {title02}</h3>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                </div>
            </Col>
        </>
    )
}

export default AdventuresToGetInspiredSection01