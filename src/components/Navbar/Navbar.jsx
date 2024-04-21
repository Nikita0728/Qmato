import React from 'react'
import './Navbar.css'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo2 from '../../assets/QMATO.png'
export const Navbars = () => {
  return (
    <div >
        <Navbar bg="light" data-bs-theme="light">
          <Navbar.Brand href="#home"><img src={logo2}></img> </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
      </Navbar>
    </div>
  )
}
