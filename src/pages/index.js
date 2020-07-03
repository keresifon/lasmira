import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="embed-responsive embed-responsive-21by9">
      <iframe 
        className="embed-responsive-item"
        src="http://162.13.59.154:3000/public/dashboard/196d4165-a6d6-47e3-b19f-5bc1d28c75ae"
        allowtransparency
      ></iframe>
    </div>
  </Layout>
)

export default IndexPage
