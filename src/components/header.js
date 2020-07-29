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
  avatar: {
    width: '4em',
    height: '4em',
    borderRadius: 100,
    margin: 0,
    padding: 0,
  },
  icon: {
    width: '1.5em',
    height: '1.5em',
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
  linkContent: {
    color: 'white',
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  tabElement: {
    border: 'solid',
    borderColor: 'white',
    borderLeftWidth: 0,
    borderRightWidth: 1,
    borderTopWidth: 0,
    borderBottomWidth: 0.5,
    textAlign: 'center',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    padding: 0,
  },
  tableStyle: {
    display: 'flex',
    alignContent: 'center',
    flexDirection: 'row',
    verticalAlign: 'middle',
  },
  linkText: {
    margin: 0,
    padding: 0,
  },
};

const Header = ({ siteTitle }) => {
  const homeTab = (
    <td style={styles.tabElement}>
      <Link to="/" style={styles.linkContent}>
        <h2 style={styles.linkText}>
          {siteTitle}
        </h2>
      </Link>
    </td>
  );

  const gamesTab = (
    <td style={styles.tabElement}>
      <Link to="/games" style={styles.linkContent}>
        <VideogameAssetIcon style={styles.icon} />
        <p style={styles.linkText}>Games</p>
      </Link>
    </td>
  );

  const githubTab = (
    <td style={styles.tabElement}>
      <a href={GitHubUrl} target="_blank" rel="noopener noreferrer" style={styles.linkContent}>
        <GitHubIcon style={styles.icon} />
        <p style={styles.linkText}>GitHub</p>
      </a>
    </td>
  );

  const contactTab = (
    <td style={styles.tabElement}>
      <a href={ContactUrl} target="_blank" rel="noopener noreferrer" style={styles.linkContent}>
        {/*
        <img src={GlennImage} alt="Glenn" style={styles.avatar} />
        */}
        <LinkedInIcon style={styles.icon} />
        <p style={styles.linkText}>Contact</p>
      </a>
    </td>
  );

  return (
    <header style={styles.header}>
      <nav style={styles.tableStyle}>
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
