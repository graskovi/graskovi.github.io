import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GamesPage = () => (
  <Layout>
    <SEO title="Games" />
    <h1>Games by Glenn</h1>
    <p>WIP page, come back for links to games I develop!</p>
    <Link to="/">Go back to the homepage</Link>
    <br/>
    <Link to="/snake">Play the game Snake</Link>
  </Layout>
)

export default GamesPage
