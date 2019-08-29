import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import CharlotteNeutral from '../images/FeedTheCat/Charlotte_Neutral.png'
import CharlottePleased from '../images/FeedTheCat/Charlotte_Pleased.png'
import CharlotteAngry from '../images/FeedTheCat/Charlotte_Angry.png'
import GlennNeutral from '../images/FeedTheCat/Glenn_Neutral.png'
import GlennPleased from '../images/FeedTheCat/Glenn_Pleased.png'
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
  }
}

const AgentState = Object.freeze({
  "Neutral": 1,
  "Pleased": 2,
  "Angry": 3
})

const FeedTheCatPage = () => {
  const [charlState, setCharlState] = React.useState(AgentState.Neutral);
  const [glennState, setGlennState] = React.useState(AgentState.Neutral);

  return (
  <Layout>
    <SEO title="Feed-the-Cat" />
    <h1>Hi people</h1>
    <p>Welcome to the game Feed the Cat!, written by Glenn Raskovich!</p>
    <p>WIP, come back for a simple but fun game!</p>
    {/*<div style={styles.agent}><img src={GlennPleased} /></div>*/}
    <div style={styles.agentStatus}><img src={CharlotteAngry} /></div>
    <div style={styles.agentStatus}><img src={GlennPleased} /></div>
    <div style={styles.agent}><img src={CharlotteNeutral} /></div>
    <div style={styles.agent}><img src={GlennNeutral} /></div>
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
