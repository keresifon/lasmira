
import React from 'react';

import {  Nav, Navbar, NavDropdown } from "react-bootstrap"

import { Link } from 'gatsby';

import { isAuthenticated, login , getProfile, logout} from '../utils/auth';

import Footer from '../components/footer';






const Acheader = () => {
    if (!isAuthenticated()){
        login()
        return <p>Redirecting to login...</p>
    }
const user = getProfile()
console.log(user.name)

    return (  
        <>
       <Navbar bg="light" variant="light">
    <Navbar.Brand as={Link} to="/">LASIMRA Reports</Navbar.Brand>
        <Nav >
      <Nav.Link as={Link} to="/account">Home</Nav.Link>
      
      <NavDropdown title="Reports" id="basic-nav-dropdown" >
      <NavDropdown.Item as={Link} to="/account/dashboard" activeClassName="active">Dashboard</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/account/mast" activeClassName="active">Mast/Tower</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/account/company" activeClassName="active">Company List</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/account/type" activeClassName="active">Intallation Type</NavDropdown.Item>
        
        
      </NavDropdown>
      <NavDropdown title="Download" id="basic-nav-dropdown" >
      
      <NavDropdown.Item as={Link} to="/account/download/mast" activeClassName="active">Mast/Tower Data</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/account/download/company" activeClassName="active">Company List</NavDropdown.Item>
        
        
      </NavDropdown>
      <Nav.Link  onClick={e => { logout()
      e.preventDefault()
    }}>Logout</Nav.Link>
      
    </Nav>
    </Navbar>
       
<Footer/>
        </>
    );
}
 
export default Acheader;