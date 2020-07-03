import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"

import SEO from "../../components/seo"

const Mast = () => {
    return (
        <Layout>
        <SEO title="Home" />
        <div className="embed-responsive embed-responsive-21by9">
        <iframe 
        className="embed-responsive-item"
        src="https://reports.socketworks.ng/public/question/05fdd65e-47ff-4466-a007-5c853dbaa7a2"
        allowtransparency
      >

      </iframe>
    </div>
    </Layout>
      );
}
 
export default Mast;