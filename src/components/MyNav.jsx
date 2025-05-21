import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../styles/navbarstyle.css'




function MyNav() {
  return (
    <Navbar expand="lg " className="bg-body-tertiary animate__animated animate__fadeIn">
      <Container>
 <Navbar.Brand as={Link} to="/">
       
                
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav navbar-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto navlinks">
       
  <Nav.Link as={Link} to="/work" className='navlinks'>Arbetsliv</Nav.Link>
    <Nav.Link as={Link} to="/" className='navlinks'>Utbildning</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;