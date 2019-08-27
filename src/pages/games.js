import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"

const GamesPage = () => (
  <Layout>
    <SEO title="Games" />
    <h1>Games</h1>
    <Project name="Snake (WIP)" linkUrl="/snake" />
    <Project name="Tetris (WIP)" linkUrl="/tetris" />
    <Project name="Scratch games" linkUrl="https://scratch.mit.edu/users/graskovich"/>
    <Link to="/">Go back to the homepage</Link>
    <br/>
  </Layout>
)

export default GamesPage
