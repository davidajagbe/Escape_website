import React from 'react';
import {Container} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import './NavBar.css'
const NavBar = () => {
  return (
    <div className='head'>
        <Navbar expand='lg' className='navbar'>    
            <Container>
                <Navbar.Brand  href='#home' id='navbar-brand'>Escape.</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
                <Navbar.Collapse id="basic-navbar-nav"/>
                <Nav className='navlist me-right ' >
                    <Nav.Link href='#home' className='mx-3'>HOME</Nav.Link>
                    <Nav.Link href='#categories' className='mx-3'>CATEGORIES</Nav.Link>
                    <Nav.Link href='#about' className='mx-3'>ABOUT</Nav.Link>
                    <Nav.Link href='#contact' className='mx-3'>CONTACT</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavBar;
