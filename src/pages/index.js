import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Project from "../components/project"

const IndexPage = () => (
  <Layout>
    <SEO title="Glenn Raskovich" />
    <h1>Portfolio</h1>
    <Project name="Mitchell International"
      position="DevOps Software Development Intern"
      linkUrl="https://www.mitchell.com"
      description="I wrote a C# .NET project to automate a PSI build process:
      checkout remote changes from a Microsoft TFS repository, modify configuration
      files to reference frozen versions instead of latest versions, build a dependency
      graph of internal packages, and update the packages in topological order.
      Then, I configured a Docker image for it to be hosted on AWS ECS.
      This utility helped reduce build time from ~3 days to ~3 hours."
    />
    <Project name="UCSD Computer Science & Engineering Department"
      position="Computer Science Tutor"
      linkUrl="https://www.cse.ucsd.edu"
      description="I've used Java and C++ to help students design, write, and debug programs,
      and learn the fundamentals of object-oriented programming and data structures.
      I've led lab sections, done public speaking for discussion sections, and helped design and grade assignments."
    />
    <Project name="Triton Software Engineering"
      position="React Native Project Lead"
      linkUrl="https://tritonse.github.io"
      description="I lead a small team of React Native developers to design and develop iOS/Android
      apps in TypeScript for nonprofits. I interface with medical customers and design collaborators
      to finalize functionality and design, and work with my developers to determine the architecture,
      workflow, and implementation of the codebase."
    />
    <Project name="Virtual Reality Medical Center"
      position="Head Software Development Intern"
      linkUrl="https://www.vrphobia.com"
      description="I developed virtual reality projects in Unity3D to help patients cope with phobias
      in immersive environments. I wrote C# scripts, a custom shader in ShaderLab, and tweaked legacy
      animations for projects helping patients deal with a fear of heights, flying, and the outdoors."
    />
    {/*Use sites.google.com/a/eng.ucsd.edu/spis/ if link below breaks*/}
    <Project name="UCSD Summer Program for Incoming Students"
      position="Computer Science Mentor"
      linkUrl="https://www.cse.ucsd.edu/undergraduate/spis-summer-program-incoming-students-2019"
      description="As a student I wrote Python scripts to implement finite state machine logic on a
      Raspberry Pi and implement image manipulation and vector correlation for an optical character
      recognition (OCR) program. I returned the next Summer as a mentor when I used my knowledge of
      Python to teach students how to make Flask web applications, OpenCV robotics, and NumPy data science."
    />
    <Project name="MechSuit VR"
      position="Lead C# Programmer"
      description="Work in progress, coming soon to Oculus and Steam!"
    />
    <Project name="Boys & Girls Club of America"
      position="Volunteer STEM Instructor"
      linkUrl="https://www.bgca.org"
      description="I taught a beginner’s programming class using Scratch, helped teach students in a
      STEM workshop class, and tutored mathematics."
    />
    <Project name="BendAR"
      linkUrl="https://www.devpost.com/software/bendar"
    />
    <Project name="Scavenging en-Nahas"
      linkUrl="https://www.devpost.com/software/scavenging-en-nahas"
    />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
