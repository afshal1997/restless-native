import React from 'react'
import { Col } from 'react-bootstrap'
import Video from '../../../Layout/Videos/Video'
import * as VideoData from '../../../utilities'

const Loader = ({ setLoader, setModal }) => {
  if (window.location.pathname !== "/") return null
  return (
    null
    // <div className='preLoader bg-dark position-relative'>
    //   <Video {...VideoData.loaderVideo} />
    //   <Col lg={2} className='m-auto'>
    //     <button className={"skipBtn"} onClick={() => {
    //       setLoader(false)
    //       setTimeout(() => {
    //         setModal(true)
    //       }, 20000);
    //     }}>
    //       Skip
    //     </button>
    //   </Col>
    // </div>
  )
}

export default Loader