import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Project from "../components/project"

const styles = {
  astronaut: {
    maxWidth: `300px`,
    marginBottom: `1.45rem`
  }
}

const IndexPage = () => (
  <Layout>
    <SEO title="Glenn Raskovich" />
    <Project name="About me"
      dates="UC San Diego Class of 2020, Revelle College, B.S. Computer Science"
      description="I started programming in Middle school with Scratch (see 'Games'),
      and since then I've been improving my ability to use programming to solve problems.
      From computer science tutoring & courses in AI, Machine Learning, Computer Vision
      & Computer Security at UC San Diego to frontend & backend app development to virtual
      reality to DevOps; I'm always looking to expand my skillset and do interesting
      work along the way!"
    />
    <h1>Portfolio</h1>
    <Project name="Mitchell International"
      dates="Summer 2019"
      position="DevOps Software Development Intern"
      linkUrl="https://www.mitchell.com"
      description="I wrote a C# .NET project to automate a PSI build process:
      the logic interfaces a Microsoft TFS repository with the local file system,
      builds a dependency graph of internal packages, and updates the files in
      topological order. Then, I configured a Docker image and hosted it on AWS ECS.
      This utility helped reduce build time from ~3 days to ~3 hours."
    />
    <Project name="Triton Software Engineering"
      dates="October 2018 - Present"
      position="React Native Project Lead"
      linkUrl="https://tritonse.github.io"
      description="I lead a small team of React Native developers to design and develop iOS/Android
      apps in TypeScript for nonprofits. I interface with medical customers and design collaborators
      to finalize functionality and design, and work with my developers to determine the architecture,
      workflow, and implementation of the codebase."
    />
    <Project name="UCSD Computer Science & Engineering Department"
      dates="September 2017 - Present"
      position="Computer Science Tutor"
      linkUrl="https://www.cse.ucsd.edu"
      description="I've used Java and C++ to help students design, write, and debug programs,
      and learn the fundamentals of object-oriented programming and data structures.
      I've led lab sections, done public speaking for discussion sections, and helped design and grade assignments."
    />
    <Project name="MechSuit VR"
      dates="2018 - Present"
      position="Lead C# Programmer"
      description="Work in progress, coming soon to Oculus and Steam!"
    />
    <Project name="Virtual Reality Medical Center"
      dates="March 2017 - October 2018"
      position="Head Software Development Intern"
      linkUrl="https://www.vrphobia.com"
      description="I developed virtual reality projects in Unity3D to help patients cope with phobias
      in immersive environments. I wrote C# scripts, a custom shader in ShaderLab, and tweaked legacy
      animations for projects helping patients deal with a fear of heights, flying, and the outdoors."
    />
    <Project name="BendAR"
      dates="February 2018"
      linkUrl="https://www.devpost.com/software/bendar"
    />
    <Project name="UCSD Summer Program for Incoming Students"
      dates="Summer 2016 & 2017"
      position="Computer Science Mentor"
      linkUrl="https://sites.google.com/a/eng.ucsd.edu/spis/"
      description="As a student I wrote Python scripts to implement finite state machine logic on a
      Raspberry Pi and implement image manipulation and vector correlation for an optical character
      recognition (OCR) program. I returned the next Summer as a mentor when I used my knowledge of
      Python to teach students how to make Flask web applications, OpenCV robotics, and NumPy data science."
    />
    <Project name="Scavenging en-Nahas"
      dates="April 2017"
      linkUrl="https://www.devpost.com/software/scavenging-en-nahas"
    />
    <Project name="Boys & Girls Club of America"
      dates="September 2012 - June 2016"
      position="Volunteer STEM Instructor"
      linkUrl="https://www.bgca.org"
      description="I taught a beginner’s programming class using Scratch, helped teach students in a
      STEM workshop class, and tutored mathematics."
    />
    <div style={styles.astronaut}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
