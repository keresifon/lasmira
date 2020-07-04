import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Acheader from '../acheader';
import SEO from "../../components/seo"

const Type = () => {
    return (
      <>
        <Acheader />
        <SEO title="Home" />
        <div className="embed-responsive embed-responsive-21by9">
        <iframe 
        className="embed-responsive-item"
        src="https://reports.socketworks.ng/public/dashboard/3a6a0a56-01b8-484a-88df-fbab8c844718"
        allowtransparency = "true"
      >

      </iframe>
    </div>
   </>
      );
}
 
export default Type;