import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Project from '../components/project';

import '../style/custom.css';

const GamesPage = () => (
  <Layout>
    <SEO title="Games" />
    <h1 className="contrast">Games</h1>
    <Project
      name="Scratch games"
      linkUrl="https://scratch.mit.edu/users/graskovich"
      position="Where I got started with programming!"
      description="Scratch is a visual programming language developed by the MIT
      Media Lab. Its intuitive interface helped me start programming games in Middle
      school, and I've been programming ever since."
    />
    <Project name="RaCatball" linkUrl="/feed-the-cat" />
  </Layout>
);

export default GamesPage;
