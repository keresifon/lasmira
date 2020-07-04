
import React from 'react';
import Layout from "../components/layout"
import {  Nav, Navbar, NavDropdown } from "react-bootstrap"
import SEO from "../components/seo"
import { Link } from 'gatsby';
import { Router } from '@reach/router'
import { isAuthenticated, login , getProfile, logout} from '../utils/auth';

import Dashboard from './dashboard';

const Home = ({user}) => {
   
  return <p> { user ? user:""  }</p>
}


const Account = () => {
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
      <Nav.Link as={Link} to="/account/settings">Settings</Nav.Link>
      <Nav.Link as={Link} to="/account/billing">Billing</Nav.Link>
      <NavDropdown title="Reports" id="basic-nav-dropdown" >
      <NavDropdown.Item as={Link} to="/account/dashboard" activeClassName="active">Dashboard</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/mast" activeClassName="active">Mast/Tower</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/company" activeClassName="active">Company List</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/type" activeClassName="active">Intallation Type</NavDropdown.Item>
        
      </NavDropdown>
      <NavDropdown title="Download" id="basic-nav-dropdown" >
      
        <NavDropdown.Item as={Link} to="/download/mast" activeClassName="active">Mast/Tower Data</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/download/company" activeClassName="active">Company List</NavDropdown.Item>
        
        
      </NavDropdown>
      <Nav.Link  onClick={e => { logout()
      e.preventDefault()
    }}>Logout</Nav.Link>
      
    </Nav>
    </Navbar>
       <Router>
           <Home  path="/account"/>
           
           <Dashboard path="/account/dashboard"/>
       </Router>
<div className="container"><p>Hi, {user.name ? user.name: "friend"}!</p></div>
        </>
    );
}
 
export default Account;