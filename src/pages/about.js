import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <h1>About</h1>
        <p>
          <Link to="/contact">Reach out to me</Link>
        </p>
      </Layout>
    </div>
  )
}

export default AboutPage
