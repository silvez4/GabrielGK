import * as React from "react"
import SEO from "../components/seo"
import Layout from "../components/Layout"

import Hero from "../components/Hero"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
    </Layout>
  )
}

export default IndexPage
