import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Type = () => {
    return (
        <Layout>
        <SEO title="Home" />
        <div className="embed-responsive embed-responsive-21by9">
        <iframe 
        className="embed-responsive-item"
        src="http://162.13.59.154:3000/public/dashboard/3a6a0a56-01b8-484a-88df-fbab8c844718"
        allowtransparency
      >

      </iframe>
    </div>
    </Layout>
      );
}
 
export default Type;