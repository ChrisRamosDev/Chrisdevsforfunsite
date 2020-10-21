import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <h1>Blog</h1>
    <div className="blog">
      <h3>Posts</h3>
      {data.allWpPost.nodes.map(node => (
        <div key={node.slug} className="blog-post flow-sm">
          {/* highlight-start */}
          <Link to={node.slug}>
            <p className="blog-title">{node.title}</p>
          </Link>
          {/* highlight-end */}
          <div
            dangerouslySetInnerHTML={{ __html: node.excerpt }}
            className="blog-content"
          />
        </div>
      ))}
    </div>
    <div>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)
export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: date }) {
      nodes {
        title
        excerpt
        slug
      }
    }
  }
`

export default SecondPage
