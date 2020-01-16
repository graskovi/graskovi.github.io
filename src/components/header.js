import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import GlennImage from '../images/Glenn/Glenn_AtLNH.jpg'

const ContactUrl = "https://www.linkedin.com/in/glenn-raskovich"
const GitHubUrl = "https://www.github.com/graskovi"

const styles = {
  header: {
    // 3700B3
    background: `#551A8B`,
    marginBottom: `1.45rem`,
  },
  tab: {
    color: "white",
    textDecoration: "none"
  },
  row: {
    margin: `0 auto`,
    maxWidth: 960,
    //padding: `1.45rem 1.0875rem`,
    alignContent: 'center',
  },
  text: {
    color: `white`,
    textDecoration: `none`,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
  }
}

const Header = ({ siteTitle }) => (
  <header
    style={styles.header}
  >
    <div
      style={styles.row}
    >
      <table cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td>
            <h1 style={{ margin: 0 }}>
              <Link to="/" style={styles.text}>
                {siteTitle}
              </Link>
            </h1>
          </td>
          <td>
            <Link to="/games/" style={styles.tab}>
              Games
            </Link>
          </td>
          <td>
            <a href={GitHubUrl} target="_blank" rel="noopener noreferrer">
            <div style={styles.tab}>
              GitHub
            </div>
            </a>
          </td>
          <td>
            <a href={ContactUrl} target="_blank" rel="noopener noreferrer">
            <div style={styles.tab}>
              Contact
            </div>
            </a>
          </td>
          <a href={ContactUrl} target="_blank" rel="noopener noreferrer">
          <td><img src={GlennImage} style={styles.avatar}/></td>
          </a>
        </tr>
      </table>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
