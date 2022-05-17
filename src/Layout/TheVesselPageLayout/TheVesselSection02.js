import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TheVesselImg01 from '../../Assets/theVessel/theVesselImg01.jpg'

const TheVesselSection02 = () => {
    return (
        <div className='TheVesselSection02 mt-5 pt-3'>
            <Container>
                <Col lg={6} className="m-auto text-center mb-5">
                    <div className="theVesselSection02MainHeading">
                        <h2>
                            SV <i>Aria</i>
                        </h2>
                    </div>
                </Col>
                <Row>
                    <Col lg={6}>
                        <img
                            src={TheVesselImg01}
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
                            Enjoy the most beautiful sunsets in the world, scuba, snorkel, fine dining, all aboard our vessel in private luxury. We offer an all-inclusive Sunset Sail package or you can customize your sail to whatever your heart desires. There's no better way to celebrate a birthday, anniversary, honeymoon, or just have a quiet, romantic sail enjoying the beauty of Key West or your own customized epic adventure!
                        </h6>
                    </Col>
                </Row>
            </Container>
        </div>
        
    )
}

export default TheVesselSection02