import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import GlennImage from '../images/Glenn/Glenn_AtLNH.jpg';

const ContactUrl = 'https://www.linkedin.com/in/glenn-raskovich';
const GitHubUrl = 'https://www.github.com/graskovi';

const styles = {
  avatar: {
    width: '4em',
    height: '4em',
    borderRadius: 100,
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
    justifyContent: 'space-around',
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
};

const Header = ({ siteTitle }) => {
  const homeTab = (
    <td style={styles.tabElement}>
      <Link to="/" style={styles.linkContent}>
        <h2 style={{ margin: 0 }}>
          {siteTitle}
        </h2>
      </Link>
    </td>
  );

  const gamesTab = (
    <td style={styles.tabElement}>
      <Link to="/games" style={styles.linkContent}>
        Games
      </Link>
    </td>
  );

  const githubTab = (
    <td style={styles.tabElement}>
      <a href={GitHubUrl} target="_blank" rel="noopener noreferrer" style={styles.linkContent}>
        GitHub
      </a>
    </td>
  );

  const contactTab = (
    <td style={styles.tabElement}>
      <a href={ContactUrl} target="_blank" rel="noopener noreferrer" style={styles.linkContent}>
        <img src={GlennImage} alt="Glenn" style={styles.avatar} />
        Contact
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
