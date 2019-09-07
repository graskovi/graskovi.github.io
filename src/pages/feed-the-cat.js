import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import PaperBackground from '../images/FeedTheCat/Paper_Background.jpg'
import CharlInert from '../images/FeedTheCat/Charlotte_Inert.png'
import CharlHappy from '../images/FeedTheCat/Charlotte_Happy.png'
import CharlAngry from '../images/FeedTheCat/Charlotte_Angry.png'
import GlennInert from '../images/FeedTheCat/Glenn_Inert.png'
import GlennHappy from '../images/FeedTheCat/Glenn_Happy.png'
import GlennAngry from '../images/FeedTheCat/Glenn_Angry.png'

const styles = {
  agent: {
    width: `75px`,
    height: `100px`,
  },
  agentStatus: {
    width: `150px`,
    height: `200px`,
  },
  astronaut: {
    maxWidth: `300px`,
    marginBottom: `1.45rem`,
  },
  canvas: {
    backgroundImage: `url(${PaperBackground})`,
    width: `1000px`,
    height: `600px`,
  },
  gameStatus: {
    margin: 0,
    padding: 0,
  },
  gameText: {
    fontSize: `60px`,
  },
  titleText: {
    fontSize: `70px`,
  }
}

const AgentState = Object.freeze({
  "Inert": 1,
  "Happy": 2,
  "Angry": 3
})

const maxHealth = 100
const damage = 10

const FeedTheCatPage = () => {
  // Game state
  const [sleep, SetSleep] = React.useState(true);
  const [score, setScore] = React.useState(0);
  const [health, setHealth] = React.useState(maxHealth);

  // Agent state
  const [charlState, setCharlState] = React.useState(AgentState.Inert);
  const [glennState, setGlennState] = React.useState(AgentState.Inert);

  let charlSrc = charlState == AgentState.Inert ? CharlInert
                 : charlState == AgentState.Angry ? CharlAngry
                 : CharlHappy;
  let glennSrc = glennState == AgentState.Inert ? GlennInert
                 : glennState == AgentState.Angry ? GlennAngry
                 : GlennHappy;

  return (
  <Layout>
    <SEO title="Feed-the-Cat" />
    <h1 style={styles.titleText}>Feed the Cat!</h1>
    <table style={styles.gameStatus}>
      <tr>
        <td><div style={styles.agentStatus}><img src={charlSrc} /></div></td>
        <td><div style={styles.agentStatus}><img src={glennSrc} /></div></td>
        {/*<td></td>
        <td></td>*/}
      </tr>
    </table>
    <div style={styles.canvas}>
      <br />
      <p style={styles.gameText}>Score: {score}</p>
      <div style={styles.agent}><img src={CharlInert} /></div>
      <div style={styles.agent}><img src={GlennInert} /></div>
    </div>
    <div style={styles.astronaut}>
      <Image />
    </div>
    <Link to="/">Return home</Link>
    <br/>
    <Link to="/games">Go to my games!</Link>
  </Layout>
  );
}

export default FeedTheCatPage
