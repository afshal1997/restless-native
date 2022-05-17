import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdventuresToGetInspiredSection01 from '../../Components/HomeComponentSection01/AdventuresToGetInspiredSection01'
import AdventuresToGetInspired from '../../Components/HomeComponentSection02/AdventuresToGetInspired'
import { HomeSection01Content, HomeSection02Content } from './HomePageAllContent/HomePageContent'

const HomeSection02 = () => {
    return (
        <div className='homeSection02 pb-4' id='homeSection02'>
            <Container fluid>
                <Col lg="6" className='m-auto text-center home-section2 py-5 mb-3 col-lg-6'>
                    <h1 className='text-center AdventuresToGetYouInspired'>
                        <i>Adventures</i> to get you inspired
                    </h1>
                </Col>


                <Row className="p-4">
                    {
                        React.Children.toArray(
                            HomeSection01Content.map((data) => {
                                return (
                                    <AdventuresToGetInspiredSection01 {...data} />
                                )
                            })
                        )
                    }
                </Row>
                <h1 className='text-center AdventuresToGetYouInspired'>
                    Our <i>TV Show </i>
                </h1>

                <Row className="p-4">
                    {
                        React.Children.toArray(
                            HomeSection02Content.map((data) => {
                                return (
                                    <AdventuresToGetInspired {...data} />
                                )
                            })
                        )
                    }
                </Row>
            </Container>
        </div>
    )
}

export default HomeSection02