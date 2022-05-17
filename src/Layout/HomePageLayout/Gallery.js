import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { importAll } from '../../utilities/functions'
import GalleryLayout from '../Gallery/GalleryLayout'
const Gallery = () => {
    const colNumbers = [5, 4, 3, 3, 5, 4, 5, 4, 3, 3, 5, 4, 5, 4, 3, 3, 5, 4,]
    return (
        <div className='gallery'>
            <Col lg="6" className='m-auto text-center home-section2 py-5 mb-3 col-lg-6'>
                <h1 className='text-center AdventuresToGetYouInspired'>
                    The <i> Gallery</i>
                </h1>
            </Col>
            <Container fluid className='p-0'>
                <Row>
                    {
                        React.Children.toArray(
                            Object.entries(importAll(require.context('../../Assets/gallery_images', false, /\.(png|jpe?g|svg)$/))).map((data, id) => {

                                return (
                                    <GalleryLayout GalleryImg={data[1]} colNumber={colNumbers[id]} />
                                )
                            })
                        )
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Gallery