import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Mast = () => {
    return (
        <Layout>
        <SEO title="Home" />
        <div className="embed-responsive embed-responsive-21by9">
        <iframe 
        className="embed-responsive-item"
        src="https://reports.socketworks.ng/public/dashboard/2084997c-89c6-41fb-9252-984c6f903d0c"
        allowtransparency
      >

      </iframe>
    </div>
    </Layout>
      );
}
 
export default Mast;