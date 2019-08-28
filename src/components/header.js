import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import GlennImage from '../images/Glenn/Glenn_AtLNH.jpg'

const ContactUrl = "https://www.linkedin.com/in/glenn-raskovich"
const GitHubUrl = "https://www.github.com/graskovi"

const styles = {
  tab: {
    color: "white",
    textDecoration: "none"
  }
}

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        //padding: `1.45rem 1.0875rem`,
        alignContent: 'center',
      }}
    >
      <table cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td>
            <h1 style={{ margin: 0 }}>
              <Link to="/" style={{ color: `white`, textDecoration: `none`}}>
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
          <td><img src={GlennImage} style={{width: 100, height: 100, borderRadius: 100}}/></td>
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
