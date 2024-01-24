import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      <Navbar style={{ backgroundColor: "#382c6b" }} data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <i className="fa-solid fa-fingerprint me-3"></i><b>COD<i style={{ color: "#fcb045" }} className="fa-brands fa-internet-explorer"></i>R.</b>
          </Navbar.Brand>
          <Nav className="justify-content-between">
            <Link
              to="/"
              className={`nav-link ${activeLink === '/' ? 'active' : ''}`}
              style={{ color: activeLink === '/' ? '#fcb045' : 'white' }}
              onClick={() => handleLinkClick('/')}
            ><b>Home</b></Link>
            <Link
              to="/about"
              className={`nav-link ${activeLink === '/about' ? 'active' : ''}`}
              style={{ color: activeLink === '/about' ? '#fcb045' : 'white' }}
              onClick={() => handleLinkClick('/about')}
            ><b>About</b></Link>
            <Link
              to="/service"
              className={`nav-link ${activeLink === '/service' ? 'active' : ''}`}
              style={{ color: activeLink === '/service' ? '#fcb045' : 'white' }}
              onClick={() => handleLinkClick('/service')}
            ><b>Services</b></Link>
            <Link
              to="/portfolio"
              className={`nav-link ${activeLink === '/portfolio' ? 'active' : ''}`}
              style={{ color: activeLink === '/portfolio' ? '#fcb045' : 'white' }}
              onClick={() => handleLinkClick('/portfolio')}
            ><b>Portfolio</b></Link>
            <Link
              to="/contactform"
              className={`nav-link ${activeLink === '/contactform' ? 'active' : ''}`}
              style={{ color: activeLink === '/contactform' ? '#fcb045' : 'white' }}
              onClick={() => handleLinkClick('/contactform')}
            ><b>Contact</b></Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
