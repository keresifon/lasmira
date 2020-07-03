import React from 'react';
import { Navbar, Nav, NavDropdown } from "react-bootstrap"

function Footer(props) {
    return (
        <div>
             <Navbar bg="light" variant="light" fixed="bottom">
    <Navbar.Brand href="#home">© {new Date().getFullYear()} Socketworks Limited</Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      
    </Nav>
    
  </Navbar>
           
        </div>
    );
}

export default Footer;