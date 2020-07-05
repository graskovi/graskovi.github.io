import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { LinearProgress } from "@material-ui/core"
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles"

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
    width: `100%`,
    height: 0,
    paddingBottom: '70%',
  },
  gameStatus: {
    display: 'inline',
    margin: 0,
    padding: 0,
  },
  gameText: {
    fontSize: `30px`,
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

const HealthBar = withStyles({
  root: {
    height: 20,
    backgroundColor: lighten('#b8b8b8', 0.5),
    margin: 10,
  },
  bar: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#b80000',
  }
})(LinearProgress);

const maxHealth = 100;
const damage = 10;

const update = () => {
  console.log(`new frame at time ${performance.now()}`);
}

const FeedTheCatPage = () => {
  // Canvas elements
  const [init, setInit] = useState(false);
  const [canvas, setCanvas] = useState(null);
  const [ctx, setCtx] = useState(null);
  const [frameIntervalId, setFrameIntervalId] = useState(0);

  // Game state
  const [sleep, setSleep] = useState(true);
  const [score, setScore] = useState(0);
  const [health, setHealth] = useState(maxHealth);

  // Agent state
  const [charlState, setCharlState] = useState(AgentState.Inert);
  const [glennState, setGlennState] = useState(AgentState.Inert);

  let charlSrc = charlState == AgentState.Inert ? CharlInert
                 : charlState == AgentState.Angry ? CharlAngry
                 : CharlHappy;
  let glennSrc = glennState == AgentState.Inert ? GlennInert
                 : glennState == AgentState.Angry ? GlennAngry
                 : GlennHappy;
  

  // componentDidMount
  //useEffect(() => {
    //canvas = 
    //ctx = canvas.getContext('2d');
    //frameIntervalId = setInterval(update, 1000);
    //clearInterval(frameIntervalId);
  //}, []);

  return (
  <Layout>
    <SEO title="Feed the Cat Game" />

    <h1 style={styles.titleText}>Feed the Cat!</h1>

    <div style={styles.gameStatus}>
      <p style={styles.gameText}>Score: {score}</p>
      <HealthBar
        variant="determinate"
        color="secondary"
        value={health}
      />
    </div>

    <canvas
      id="gameBoard"
      style={styles.canvas}
      onClick={e => {setScore(score + 10)}}
      onMouseDown={e => {
        let rect = canvas.getBoundingClientRect();
        console.log(e.clientX - rect.left);
        console.log(e.clientY - rect.top);
        ctx.fillStyle = '#434343';
        ctx.fillText(`${e.clientX - rect.left}, ${e.clientY - rect.top}`, 0, 200);
        ctx.fillRect(20, 20, 100, 100);
        ctx.drawImage(CharlInert, 10, 10);
      }}
      ref={c => {
        if (init) return;
        if (!c) {
          console.log('canvas ref null');
          return;
        }
        
        console.log('canvas ref called');
        setInit(true);
        setCanvas(c);
        setCtx(c.getContext('2d'));
      }}
    ></canvas>

    <div style={styles.astronaut}>
      <Image />
    </div>
    <Link to="/">Return home</Link>
    <br/>
    <Link to="/games">Go to my games!</Link>
  </Layout>
  );
}

export default FeedTheCatPage;
