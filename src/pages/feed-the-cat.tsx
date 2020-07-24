import React from 'react';
import { Link } from 'gatsby';
import { LinearProgress } from '@material-ui/core';
import { lighten, withStyles } from '@material-ui/core/styles';

import Layout from '../components/layout';
// import Image from '../components/image';
import SEO from '../components/seo';

const PaperBackground = require('../images/FeedTheCat/Paper_Background.jpg');

const GlennInertImg = require('../images/FeedTheCat/Glenn_Inert.png');
const GlennHappyImg = require('../images/FeedTheCat/Glenn_Happy.png');
const GlennAngryImg = require('../images/FeedTheCat/Glenn_Angry.png');

const CharlInertImg = require('../images/FeedTheCat/Charl_Inert.png');
const CharlHappyImg = require('../images/FeedTheCat/Charl_Happy.png');
const CharlAngryImg = require('../images/FeedTheCat/Charl_Angry.png');

const styles = {
  agent: {
    width: '75px',
    height: '100px',
  },
  agentStatus: {
    width: '150px',
    height: '200px',
  },
  astronaut: {
    maxWidth: '300px',
    marginBottom: '1.45rem',
  },
  canvas: {
    backgroundImage: `url(${PaperBackground})`,
    width: '100%',
    height: 0,
    paddingBottom: '70%',
  },
  gameStatus: {
    display: 'inline',
    margin: 0,
    padding: 0,
  },
  gameText: {
    fontSize: '30px',
  },
  titleText: {
    fontSize: '70px',
  },
};

enum AgentState {
  Inert = 'INERT',
  Happy = 'HAPPY',
  Angry = 'ANGRY',
}

interface NPCImages {
  Inert: HTMLImageElement;
  Happy: HTMLImageElement;
  Angry: HTMLImageElement;
}

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
  },
})(LinearProgress);

const MAX_HEALTH = 100;
const DAMAGE = 10;

interface IState {
  score: number;
  health: number;
}

class FeedTheCatPage extends React.Component<object, IState> {
  private canvas: HTMLCanvasElement;

  private ctx: CanvasRenderingContext2D;

  private canvasRef: React.RefObject<HTMLCanvasElement> = React.createRef();

  private ctxRef: React.RefObject<CanvasRenderingContext2D | null> = React.createRef();

  private CharlImages: NPCImages;

  private GlennImages: NPCImages;

  public constructor(props: object) {
    super(props);

    this.state = {
      health: MAX_HEALTH,
      score: 0,
    };

    this.CharlImages = {
      Inert: new Image(),
      Happy: new Image(),
      Angry: new Image(),
    };
    this.CharlImages.Inert.src = CharlInertImg;
    this.CharlImages.Happy.src = CharlHappyImg;
    this.CharlImages.Angry.src = CharlAngryImg;

    console.log(this.CharlImages.Inert);
    // this.CharlImages.Inert.onload = () => <img src={CharlInertImg} alt="CharlInert" />;

    this.GlennImages = {
      Inert: new Image(),
      Happy: new Image(),
      Angry: new Image(),
    };
    this.GlennImages.Inert.src = GlennInertImg;
    this.GlennImages.Happy.src = GlennHappyImg;
    this.GlennImages.Angry.src = GlennAngryImg;
  }

  componentDidMount() {
    const ctx = this.canvasRef.current?.getContext('2d');
    ctx.fillStyle = '#ba0b0b';
    ctx.lineWidth = 10;
    ctx.strokeRect(75, 140, 150, 110);
    ctx.fill();
    console.log(ctx);
  }

  componentDidUpdate() {
    // this.ctx.fillRect(20, 20, 100, 100);
  }

  /*
  private setCanvasRef = (c: HTMLCanvasElement) => {
    this.canvas = c;
    this.ctx = c.getContext('2d');
  }
  */

  /*
  // Game state
  const [frameIntervalId, setFrameIntervalId] = useState(0);
  const [sleep, setSleep] = useState(true);

  // Agent state
  const [charlState, setCharlState] = useState(AgentState.Inert);
  const [glennState, setGlennState] = useState(AgentState.Inert);
  */

  // componentDidMount
  // useEffect(() => {
  // canvas =
  // ctx = canvas.getContext('2d');
  // frameIntervalId = setInterval(update, 1000);
  // clearInterval(frameIntervalId);
  // }, []);

  render() {
    const { health, score } = this.state;

    return (
      <Layout>
        <SEO title="Feed the Cat Game" />

        <h1 style={styles.titleText}>Feed the Cat!</h1>

        <div style={styles.gameStatus}>
          <p style={styles.gameText}>
          Score:
            {score}
          </p>
          <HealthBar
            variant="determinate"
            color="secondary"
            value={health}
          />
        </div>

        <canvas
          id="gameBoard"
          style={styles.canvas}
          onClick={() => {
            this.setState((ps) => ({ score: (ps.score + 10) }));
            // console.log(`score: ${score}`);
          }}
          onMouseDown={(e) => {
            /*
            const rect = this.canvasRef.current.getBoundingClientRect();
            console.log(e.clientX - rect.left);
            console.log(e.clientY - rect.top);

            this.ctx.fillStyle = '#ba0b0b';
            this.ctx.fillText(`${e.clientX - rect.left}, ${e.clientY - rect.top}`, 0, 200);
            this.ctx.fillRect(20, 20, 100, 100);
            this.ctx.drawImage(this.CharlImages.Inert, 10, 10);
            */
          }}
          ref={this.canvasRef}
        />

        <Link to="/">Return home</Link>
        <br />
        <Link to="/games">Go to my games!</Link>
      </Layout>
    );
  }
}

export default FeedTheCatPage;
