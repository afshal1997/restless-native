import React from 'react'
import { Col, Container } from 'react-bootstrap';
import Video from '../Videos/Video';
import * as VideoData from '../../utilities'

function MainSection() {
    return (
        <div className='mainSection p-0'>
            <Container fluid>
                <Video {...VideoData.home} />
                <div className="mainBannerHeading">
                    <Col lg={11} className='m-auto'>
                        <h2 className='ps-5 ms-5' data-aos="fade-right" data-aos-duration="1000">come sail</h2>
                        <h2 data-aos="fade-right" data-aos-duration="2000">with us!</h2>
                    </Col>
                    <Col lg={4} className='m-auto me-0 mt-5'>
                        <h5 data-aos="fade-right" data-aos-duration="1000">
                            PRIVATE sailing charters to adventurous locations aboard the luxurious ARIA and/or ZODIAC.
                        </h5>
                    </Col>
                </div>
            </Container>
        </div>
    )
}

export default MainSection
