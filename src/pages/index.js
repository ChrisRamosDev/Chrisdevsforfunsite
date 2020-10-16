import React from "react"

import Layout from "../components/layout"
import Video from "../components/video"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="text-center">Welcome!</h1>
    <Video />
    <p className="[ text-center text-xl ]">
      <span role="img" aria-label="construction-sign">
        🚧
      </span>{" "}
      Apologies for the mess, this site is under construction.{" "}
      <span role="img" aria-label="construction-sign">
        🚧
      </span>
    </p>
    <p className="[ text-center text-lg ]">Please check back again soon!</p>
  </Layout>
)

export default IndexPage
