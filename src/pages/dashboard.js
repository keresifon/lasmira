import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Dashboard = () => {
    return (
        <Layout>
        <SEO title="Home" />
        <div className="embed-responsive embed-responsive-21by9">
        <iframe 
        className="embed-responsive-item"
        src="https://reports.socketworks.ng/public/dashboard/a84b84fa-4bd5-4978-a0c6-bb2578fec845"
        allowtransparency
      >

      </iframe>
    </div>
    </Layout>
      );
}
 
export default Dashboard;