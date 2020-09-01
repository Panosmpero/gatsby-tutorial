import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Contact" />
        <h1>Contact</h1>
        <p>
          Reach me via{" "}
          <a
            href="https://codepen.io/panosmpero"
            target="_blank"
            rel="noreferrer noopenner"
          >
            Codepen
          </a>
        </p>
      </Layout>
    </div>
  )
}

export default ContactPage
