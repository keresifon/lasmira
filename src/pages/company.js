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
        src="https://reports.socketworks.ng/public/dashboard/0c938e8e-41df-44e0-b093-f16067598ac0"
        allowtransparency
      >

      </iframe>
    </div>
    </Layout>
      );
}
 
export default Company;