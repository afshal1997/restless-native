import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import theVesselImg04 from '../../Assets/theVessel/theVesselImg04.jpg'
import theVesselImg02 from '../../Assets/theVessel/theVesselImg02.jpg'
import ListMap from './TheVesselList/ListMap'
import theVesselImg03 from '../../Assets/theVessel/theVesselImg03.jpg'

const TheVesselSection03 = () => {
    return (
        <div className='TheVesselSection03'>
            <Container>
                <Row>
                    <Col lg={5} className='m-auto'>
                        <h2>The<i> Experience</i></h2>
                        <ListMap />
                    </Col>
                    <Col lg={6}>
                        <img
                            src={theVesselImg02}
                            alt="theVesselImg02"
                            className='w-100 shadow-lg'
                            data-aos="fade-left"
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
            <div className="SvZodiac">
                <Container>
                    <Col lg={6} className="m-auto text-center mb-5 mt-5">
                        <div className="theVesselSection02MainHeading">
                            <h2>
                                SV <i>Zodiac</i>
                            </h2>
                        </div>
                    </Col>
                    <Row>
                        <Col lg={6}>
                            <img
                                src={theVesselImg04}
                                alt="TheVesselImg01"
                                className='w-100 shadow-lg'
                                data-aos="fade-right"
                                data-aos-duration="1500"
                            />
                        </Col>
                        <Col lg={5} className='m-auto'>
                            <h2>The<i> Vessel</i></h2>
                            <h6
                                data-aos="fade-left"
                                data-aos-duration="1500"
                            >
                                Whether you want to enjoy mellow romantic vibes while sipping champagne as the sunsets over turquoise blue water, or a boat party with good friends and iced beverages, the zodiac can adapt to any experience you and your guests can imagine.
                            </h6>
                            <h6
                                data-aos="fade-left"
                                data-aos-duration="1500"
                            >
                                Zodiac is a 60 foot gorgeous catamaran with every amenity necessary for a multi day live-aboard ocean sailing adventure!
                            </h6>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={5} className='m-auto'>
                            <div
                                className="TheVesselSection04Ul"
                                data-aos="fade-left"
                                data-aos-duration="1500"
                            >
                                <h2>The<i> Experience</i></h2>
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

        </div>
    )
}

export default TheVesselSection03