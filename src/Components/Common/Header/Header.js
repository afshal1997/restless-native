import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from '../../../Assets/header/Logo.png';
import "./header.css"
import Scrollspy from 'react-scrollspy'
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";


function Header() {
  const [color, setColor] = useState('transparent')
  const [blur, setBlur] = useState('blur(0px)')
  const [transition, settransition] = useState('1s')
  const [height, setheight] = useState('85px')


  const listenScrollEvent = e => {
    if (window.scrollY > 100 && window.innerWidth > 992) {
      setColor("rgb(0, 0, 0, 0.4)")
      settransition("1s")
      setBlur("blur(8px)")
      setheight("65px")
    } else {
      document.getElementById("header-menu").style = null
      setColor("transparent")
      settransition("1s")
      setBlur("blur(0px)")
      setheight("85px")
    }
  }
  useEffect(()=>{
    listenScrollEvent()
  },[])
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
  }, [window.location])


  let history = useHistory();

  return (
    <>
      <Navbar
        collapseOnSelect expand="lg"
        fixed="top"
        variant="transparent"
        id="header-menu"
        style={{ background: color, backdropFilter: blur, transition: transition }}
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img className="w-100" src={Logo} alt="logo" style={{ height: height, transition: transition }} />
          </Navbar.Brand>
          <Nav className="m-auto w-100">
            <Scrollspy
              items={
                [
                  "homeSection02",
                  "homeSection03",
                  "homeSection04"
                ]
              }
              currentClassName="active-Link"
              className="d-flex align-itesm-center justify-content-center ps-0 mt-0 m-auto mobileView"
            >
              <Nav.Link href="/#homeSection02">inspiration</Nav.Link>
              <Nav.Link href="/#homeSection03">join</Nav.Link>
              <Nav.Link href="/#homeSection04">prizes</Nav.Link>
              <Nav.Link as={Link} to="/the-vessels">The Vessels</Nav.Link>
            </Scrollspy>
          </Nav>

          <div className="socilaLinks">
            <a className="me-3 text-light" target="blank" rel="nofollow" href="https://www.facebook.com/RestlessNativeCharters/">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a className="me-3 text-light" target="blank" rel="nofollow" href="http://instagram.com/restlessnativecharters">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className="me-3 text-light" target="blank" rel="nofollow" href="https://www.youtube.com/channel/UCOUHLFC0m8BbWRY4LfDGwMg">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a className="me-3 text-light" target="blank" rel="nofollow" href="https://vm.tiktok.com/ZSdLhFtpD/">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;