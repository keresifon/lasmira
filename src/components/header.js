
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import {Helmet} from "react-helmet"
import { Link } from 'gatsby';

const Header = ({ siteTitle }) => {
  return (
  <Navbar bg="light" variant="light">
    <Navbar.Brand as={Link} to="/">LASIMRA Reports</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      
      <NavDropdown title="Reports" id="basic-nav-dropdown" >
      <NavDropdown.Item as={Link} to="/dashboard" activeClassName="active">Dashboard</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/mast" activeClassName="active">Mast/Tower</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/company" activeClassName="active">Company List</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/type" activeClassName="active">Intallation Type</NavDropdown.Item>
        
      </NavDropdown>
      <NavDropdown title="Download" id="basic-nav-dropdown" >
      
        <NavDropdown.Item as={Link} to="/download/mast" activeClassName="active">Mast/Tower Data</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/download/company" activeClassName="active">Company List</NavDropdown.Item>
        
        
      </NavDropdown>
    </Nav>
    
  </Navbar>
)
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
