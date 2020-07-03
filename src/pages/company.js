import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Company = () => {
    return (
        <Layout>
        <SEO title="Home" />
        <div className="embed-responsive embed-responsive-21by9">
        <iframe 
        className="embed-responsive-item"
        src="http://162.13.59.154:3000/public/dashboard/5f552992-427d-4419-b302-7a94593d97bb"
        allowtransparency
      >

      </iframe>
    </div>
    </Layout>
      );
}
 
export default Company;