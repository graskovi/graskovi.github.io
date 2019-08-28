import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const FeedTheCatPage = () => (
  <Layout>
    <SEO title="Feed-the-Cat" />
    <h1>Hi people</h1>
    <p>Welcome to the game Feed the Cat!, written by Glenn Raskovich!</p>
    <p>WIP, come back for a simple but fun game!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/">Return home</Link>
    <br/>
    <Link to="/games">Go to my games!</Link>
  </Layout>
)

export default FeedTheCatPage
