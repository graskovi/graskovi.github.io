import React from 'react';

import Layout from '../components/layout';
import Project from '../components/project';
import SEO from '../components/seo';

import ResumeData from '../data/resume.json';

import '../components/custom.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Glenn Raskovich" />
    {
      // Parse resume JSON data to fill out resume section
      // TODO add 3.61 major GPA and/or 3.69 GPA
      ResumeData.map((data) => (
        'section' in data
          ? <h1 className="contrast">{data.section}</h1>
          : (
            <Project
              name={data.name}
              dates={data.dates}
              linkUrl={data.linkUrl}
              description={data.description}
              position={data.position}
            />
          )
      ))
    }
  </Layout>
);

export default IndexPage;
