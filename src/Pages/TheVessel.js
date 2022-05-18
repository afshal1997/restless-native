import React from 'react'
import TheVesselMainSection from '../Layout/TheVesselPageLayout/TheVesselMainSection'
import TheVesselSection02 from '../Layout/TheVesselPageLayout/TheVesselSection02'
import TheVesselSection03 from '../Layout/TheVesselPageLayout/TheVesselSection03'
import Header from '../Components/Common/Header/Header'
import Footer from '../Components/Common/Footer/Footer'
import '../Layout/TheVesselPageLayout/thevesselcss.css'
const TheVessel = () => {
  return (
    <>
      <Header />
      <TheVesselMainSection />
      <TheVesselSection02 />
      <TheVesselSection03 />
      <Footer />
    </>
  )
}

export default TheVessel