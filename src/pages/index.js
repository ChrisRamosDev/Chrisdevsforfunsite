import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Video from "../components/video"
import SEO from "../components/seo"

const Home = () => {
  return (
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
      <p className="[ text-center text-lg ]">
        Please check back again soon!
        <Link to="/page-2">&nbsp;But heres a Link to my blog</Link>
      </p>
    </Layout>
  )
}

export default Home
