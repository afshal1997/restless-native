
import React from 'react'
import { Card, Col } from 'react-bootstrap'

const OurContest = ({ linkPage, subTitle, title, img, contestClass }) => {
  return (
    <>
      <Col className={`position-relative text-center px-1 ${contestClass}`} lg={3}>
        <a href={linkPage ?? 'javascript:void(0)'}>
          <Card className='text-dark card-reponsive-class position-relative'>
            <Card.Img variant="top" src={img} className="w-100" alt="section3img17" />
            <Card.Body style={{ bottom: "20px" }} className="position-absolute text-light w-100">
              <Card.Title>
                <h2 className='fw-bold'>{subTitle}</h2>
              </Card.Title>
              <Card.Text>
                {title}
              </Card.Text>

            </Card.Body>
          </Card>
        </a>

      </Col>
    </>
  )
}

export default OurContest
