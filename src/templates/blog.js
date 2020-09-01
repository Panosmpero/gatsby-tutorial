import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

// export const query = graphql`
//   query($slug: String) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

export const query = graphql`
  query($slug: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "Do MMMM YYYY")
      body {
        json
      }
    }
  }
`

const Blog = ({ data }) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const src = node.data.target.fields.file["en-US"].url
        const alt = node.data.target.fields.title["en-US"]
        return <img src={src} alt={alt}/>
      }
    }
  }
  return (
    <Layout>
      <h1>{data.contentfulBlogPost.title}</h1>
      <p>{data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(data.contentfulBlogPost.body.json, options)}
    </Layout>
  )
}

export default Blog
