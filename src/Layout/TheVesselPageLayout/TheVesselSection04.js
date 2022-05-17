import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import theVesselImg03 from '../../Assets/theVessel/theVesselImg03.jpg'

const TheVesselSection04 = () => {
    return (
        <div className='TheVesselSection04'>
            <Container>
                <Col lg={6} className="m-auto text-center mb-5 mt-5">
                    <div className="theVesselSection04MainHeading">
                        <h2>
                            The Experience
                        </h2>
                    </div>
                </Col>
                <Row>
                    <Col lg={5} className='m-auto'>
                        <div
                            className="TheVesselSection04Ul"
                            data-aos="fade-left"
                            data-aos-duration="1500"
                        >
                            <h6>
                                This gateway to the Gulf of Mexico and Atlantic ocean is one of the easiest ways to have a tropical vacation while still being in the United States. Families and vacationers are freqeuntly making the trip down for snorkeling and amazing sailing.
                            </h6>
                            <ul>
                                <li>
                                    Easy access to swimming
                                </li>
                                <li>
                                    Ready to go snorkeling
                                </li>
                                <li>
                                    Explore more with scuba diving
                                </li>
                                <li>
                                    Anchor near a reef and go for a swim
                                </li>
                                <li>
                                    Pull up to the beach and have a day on the sand
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <img
                            src={theVesselImg03}
                            alt="theVesselImg03"
                            className='w-100 shadow-lg'
                            data-aos="fade-right"
                            data-aos-duration="1500"
                        />
                    </Col>
                </Row>

                <a
                    href='https://fareharbor.com/embeds/book/restlessnative/items/?flow=93101&full-items=yes'
                    className='theVesselBookNow bg-primary m-auto mt-5 mb-5'>
                    Book Now
                </a>
            </Container>
        </div>
    )
}

export default TheVesselSection04