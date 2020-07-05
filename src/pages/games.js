import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Project from '../components/project';

const GamesPage = () => (
  <Layout>
    <SEO title="Games" />
    <h1>Games</h1>
    <Project
      name="Scratch games"
      linkUrl="https://scratch.mit.edu/users/graskovich"
      position="Where I got started with programming!"
      description="Scratch is a visual programming language developed by the MIT
      Media Lab. Its intuitive interface helped me get into programming in Middle
      school, and it has held a special place in my heart ever since."
    />
    <Project name="Feed the Cat! (WIP)" linkUrl="/feed-the-cat" />
    <Project name="Snake (WIP)" linkUrl="/snake" />
    <Project name="Tetris (WIP)" linkUrl="/tetris" />
    <Link to="/">Go back to the homepage</Link>
    <br />
  </Layout>
);

export default GamesPage;
