import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Project from "../components/project"

//import GlennImage from '../images/Glenn/Glenn_AtLNH.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Welcome to the Gatsby site of Glenn Raskovich!</p>
    {/*<img src={GlennImage} style={{height: 100, width: 100}}/>*/}
    <p>Time to build something great.</p>
    <h1>Portfolio</h1>
    <h2>Work</h2>
    <Project name="Mitchell International"
      linkUrl="https://www.mitchell.com"
      description="I wrote a C# .NET project to automate a PSI build process.
      Then, I configured a Docker image for it which I hosted on AWS ECS.
      This utility helped reduce the build time from ~3 days to ~3 hours."
    />
    <Project name="UCSD Computer Science Tutor"
      linkUrl="https://www.cse.ucsd.edu"
      description="I've used Java and C++ to help students learn how to design,
      write, and debug programs. I teach students the fundamentals of object-oriented
      programming and data structures. I've also led lab sections, done public
      speaking for discussion sections, and helped design and grade assignments."
    />
    {/*Use sites.google.com/a/eng.ucsd.edu/spis/ if link below breaks*/}
    <Project name="UCSD Program for Incoming Students Mentor"
      linkUrl="https://www.cse.ucsd.edu/undergraduate/spis-summer-program-incoming-students-2019"
    />
    <br />
    <h2>Volunteer Work</h2>
    <Project name="Triton Software Engineering"
      linkUrl="https://tritonse.github.io"
    />
    <Project name="Virtual Reality Medical Center"
      linkUrl="https://www.vrphobia.com"
    />
    <Project name="Boys & Girls Club of America"
      linkUrl="https://www.bgca.org"
    />
    <br />
    <h2>Virtual Reality</h2>
    <Project name="MechSuit VR" />
    <Project name="BendAR"
      imgSrc="/images/Projects/BendAR.jpg"
      linkUrl="https://www.devpost.com/software/bendar"
    />
    <Project name="Scavenging en-Nahas"
      linkUrl="https://www.devpost.com/software/scavenging-en-nahas"
    />
    <Link to="/games/">Go to my games!</Link>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
