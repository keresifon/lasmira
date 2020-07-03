import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import SEO from "../components/seo"
import { Navbar, Nav, NavDropdown, Card, CardDeck , Image} from "react-bootstrap"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div><Image src="https://res.cloudinary.com/kwesiblack/image/upload/v1593796055/lasimra/analysis-1841158_1920_nrcbsu.jpg" fluid  className="w-100 border-bottom border-top"/></div>
    <div className="py-3"></div>
    <div className= "container display-1">learn from data</div>
    <div className="py-3"></div>
    <div className="container">
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
              
            </Card.Text>
          </Card.Body>
          
        </Card>
        <Card>
          
          <Card.Body>
            <Card.Title className= "display-3">LASIMRA</Card.Title>
            <Card.Text>
             MAST AND TOWER
            </Card.Text>
          </Card.Body>
          
        </Card>
      </CardDeck>
    </div>
  </Layout>
)

export default IndexPage
