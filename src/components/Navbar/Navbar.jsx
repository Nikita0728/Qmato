import React from 'react'
import './Navbar.css'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo2 from '../../assets/QMATO.png'
import search_icon from '../../assets/search_icon.png'
export const Navbars = () => {
  return (
    <div >
        <Navbar expand='lg' bg="light" data-bs-theme="light">
            <Container>
          <Navbar.Brand href="#home"><img src={logo2} className='logo'></img> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center' >
          <Nav  >
            <Nav.Link href="#home" className='nav-link'>Home</Nav.Link>
            <Nav.Link href="#features">Menu</Nav.Link>
            <Nav.Link href="#pricing">Mobile-app</Nav.Link>
            <Nav.Link href="#pricing">Contact-us</Nav.Link>
            <div className="search">
            <div className="search-box">
            <input type='text' placeholder='Search anything'></input>
            </div>
            <img src={search_icon}></img>
            <button>Sign In</button>
            </div>
          </Nav>
            </Navbar.Collapse>
            
          </Container>
        
      </Navbar>
    </div>
  )
}
