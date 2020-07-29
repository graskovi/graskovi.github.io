import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';

import '../style/custom.css';

import GlennImage from '../images/Glenn/Glenn_AtLNH.jpg';

const ContactUrl = 'https://www.linkedin.com/in/glenn-raskovich';
const GitHubUrl = 'https://www.github.com/graskovi';

const styles = {
  // TODO use avatar somewhere
  // <img src={GlennImage} alt="Glenn" style={styles.avatar} />
  avatar: {
    width: '4em',
    height: '4em',
    borderRadius: 100,
    margin: 0,
    padding: 0,
  },
  header: {
    background: '#551A8B',
    position: 'fixed',
    width: '100%',
    opacity: 1,
    zIndex: 1,
  },
  icon: {
    width: '1.5em',
    height: '1.5em',
    margin: 0,
    padding: 0,
  },
  rowStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    verticalAlign: 'middle',
  },
  tabContent: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',

    color: 'white',
    border: 'solid',
    borderColor: 'white',
    borderLeftWidth: 0,
    borderRightWidth: 1,
    borderTopWidth: 0,
    borderBottomWidth: 0.5,
    textDecoration: 'none',
  },
  tabText: {
    margin: 0,
    padding: 0,
  },
};

const Header = ({ siteTitle }) => {
  const homeTab = (
    <Link to="/" style={styles.tabContent}>
      <h2 style={styles.tabText}>
        {siteTitle}
      </h2>
    </Link>
  );

  const gamesTab = (
    <Link to="/games" style={styles.tabContent}>
      <VideogameAssetIcon style={styles.icon} />
      <p style={styles.tabText}>Games</p>
    </Link>
  );

  const githubTab = (
    <a href={GitHubUrl} target="_blank" rel="noopener noreferrer" style={styles.tabContent}>
      <GitHubIcon style={styles.icon} />
      <p style={styles.tabText}>GitHub</p>
    </a>
  );

  const contactTab = (
    <a href={ContactUrl} target="_blank" rel="noopener noreferrer" style={styles.tabContent}>
      <LinkedInIcon style={styles.icon} />
      <p style={styles.tabText}>Contact</p>
    </a>
  );

  return (
    <header style={styles.header}>
      <nav style={styles.rowStyle}>
        {homeTab}
        {gamesTab}
        {githubTab}
        {contactTab}
      </nav>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
