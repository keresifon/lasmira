import React from "react"
import { Link } from "gatsby"
import Layout from "../../../components/layout"

import SEO from "../../../components/seo"

import Acheader from '../../acheader';


const Company = () => {
    return (
      <>
        <Acheader/>
        <SEO title="Home" />
        <div className="embed-responsive embed-responsive-21by9">
        <iframe 
        className="embed-responsive-item"
        src="https://reports.socketworks.ng/public/question/ccb42eaa-0502-4aba-99c0-a5674ae5a172"
        allowtransparency = "true"
      >

      </iframe>
    </div>
    </>
      );
}
 
export default Company;