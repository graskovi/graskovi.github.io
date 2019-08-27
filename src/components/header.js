import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Avatar } from '@material-ui/core'

import GlennImage from '../images/Glenn/Glenn_AtLNH.jpg'

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
            <Link to="/games/" style={{color: `white`, textDecoration: `none`}}>
              Games
            </Link>
          </td>
          <td>
            <Link to="/contact/" style={{color: `white`, textDecoration: `none`}}>
              Contact
            </Link>
          </td>
          <td><img src={GlennImage} style={{width: 100, height: 100, borderRadius: 100}}/></td>
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
