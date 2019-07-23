import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You hit a route that does not exist...yet. Maybe check back later?.</p>
  </Layout>
)

export default NotFoundPage
