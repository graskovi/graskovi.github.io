import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import '../style/custom.css';

const styles = {
  astronaut: {
    maxWidth: '300px',
    marginBottom: '1.45rem',
  },
  gameWindow: {
    width: '960px',
    height: '640px',
    border: 0,
  },
  titleText: {
    fontSize: '70px',
  },
};

interface IState {
  score: number;
  health: number;
}

const FeedTheCatPage = () => (
  <Layout>
    <SEO title="RaCatball" />

    <h1 className="contrast" style={styles.titleText}>Feed the Cat!</h1>

    <iframe
      src="https://i.simmer.io/@graskovi/~0d29f209-9251-b05c-8d55-f4360a9b1160"
      title="RaCatball!"
      style={styles.gameWindow}
    />

    <Link to="/">Return home</Link>
    <br />
    <Link to="/games">Go to my games!</Link>
  </Layout>
);

export default FeedTheCatPage;
