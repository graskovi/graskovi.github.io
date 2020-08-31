import React from 'react';

import Layout from '../components/layout';
import Project from '../components/project';
import SEO from '../components/seo';

import ResumeData from '../data/resume.json';

import '../style/custom.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Glenn Raskovich" />
    {
      // TODO add 3.61 major GPA and/or 3.69 GPA
      // Parse resume JSON data to fill out resume section
      ResumeData.map((data) => (
        'section' in data
          ? (
            <h1
              className="contrast"
              id={data.section}
            >
              {data.section}
            </h1>
          )
          : (
            <div>
              <Project
                name={data.name}
                dates={data.dates}
                linkUrl={data.linkUrl}
                description={data.description}
                position={data.position}
              />
              <br />
            </div>
          )
      ))
    }
  </Layout>
);

export default IndexPage;
