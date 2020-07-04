
import React from 'react';
import {  Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link } from 'gatsby';
import { Router } from '@reach/router'
import { isAuthenticated, login , getProfile, logout} from '../utils/auth';
import Dashboard from './account/dashboard';
import Company from './account/company';
import Mast from './account/mast';
import Type from './account/type';
import DwnCompany from './account/download/company'
import DwnMast from './account/download/mast'
import {  Card, CardDeck , Image} from "react-bootstrap"
import Footer from '../components/footer';


const Home = ({user}) => {
   
  return <p> </p>
}



const Account = () => {
    if (!isAuthenticated()){
        login()
        return <p>Redirecting to login...</p>
    }
const user = getProfile()
console.log(user)

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
       <Router>
           <Home  path="/account"/>
           
           <Dashboard path="/account/dashboard"/>
           <Company path="/account/company"/>
           <Mast path="/account/mast"/>
           <Type path="/account/type"/>
           <DwnCompany path="/account/download/company"/>
           <DwnMast path="/account/download/mast"/>

       </Router>
<div className="container">
<div><div>Welcome, {user.name ? user.name: "friend"}!</div></div>
    <div className="py-3"></div>
    <div className= "container display-1">learn from data</div>
    <div className="py-3"></div>
    <div className="container bg-light">
      <CardDeck>
        <Card>
          <Card.Img
            variant="top"
            src="https://res.cloudinary.com/kwesiblack/image/upload/v1593794306/lasimra/Screenshot_2020-07-03_at_5.13.29_PM_ysqv63.png"
          />
          <Card.Body>
            <Card.Title>Unlock</Card.Title>
            <Card.Text>
              Make sense of your data
            </Card.Text>
          </Card.Body>
          
        </Card>
        <Card>
          <Card.Img variant="top" src="https://res.cloudinary.com/kwesiblack/image/upload/v1593797305/lasimra/people-2564463_640_ocxhx8.jpg" />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              Understand your data 
            </Card.Text>
          </Card.Body>
          
        </Card>
        <Card>
          
          <Card.Body>
            <Card.Title className= "display-3">LASIMRA</Card.Title>
            <Card.Text className= "display-4 text-info">
             MAST AND TOWER
            </Card.Text>
          </Card.Body>
          
        </Card>
      </CardDeck>
    </div>
    <div className="py-3"></div>
  
  <div></div>
  </div>
  <Footer/>
        </>
    );
}
 
export default Account;