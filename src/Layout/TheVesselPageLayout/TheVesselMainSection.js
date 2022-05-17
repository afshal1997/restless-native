import React from 'react'
import { Col, Container } from 'react-bootstrap'
import Video from '../Videos/Video'
import * as VideoData from '../../utilities'

const TheVesselMainSection = () => {
    return (
        <div className='theVesselMain mb-5'>
            <div className='mainSection p-0'>
                <Container>
                    <Video {...VideoData.thevessel} />
                    <div className="mainBannerHeading m-auto">
                        <Col lg={5} className='text-center m-auto'>
                            <div className="theVesselMainBannerContent text-light">
                                <h2
                                    data-aos="fade-right"
                                    data-aos-duration="1500"
                                >
                                    <i>Explore KEY WEST</i>
                                </h2>
                                <h5>the ideal place to unwind.</h5>
                                <h6
                                    data-aos="fade-right"
                                    data-aos-duration="2000"
                                    className='text-light'
                                >
                                    Enjoy the most beautiful sunsets in the world!  Swim, snorkel, sunbathe and RELAX, all aboard our vessel in private luxury. We offer a customizable "CHOOSE YOUR OWN ADVENTURE" packages to suit whatever your imagination can conjure! There's no better way to celebrate a birthday, anniversary, honeymoon, or just have a quiet, romantic sail enjoying the beauty of Key West or your own customized EPIC Adventure!
                                </h6>
                                <a
                                    href='https://fareharbor.com/embeds/book/restlessnative/items/?flow=93101&full-items=yes'
                                    className='theVesselBookNow m-auto mt-4'
                                    data-aos="fade-right"
                                    data-aos-duration="2500"
                                >
                                    Book Now
                                </a>
                            </div>
                        </Col>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default TheVesselMainSection