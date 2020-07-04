
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
      <Nav.Link as={Link} to="/account">Login</Nav.Link>
      
      
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
