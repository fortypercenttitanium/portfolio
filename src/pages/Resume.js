import { Helmet } from 'react-helmet';
import React, { useState, useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode } from 'react-icons/fa';
import { IoLogoElectron, IoLogoFirebase } from 'react-icons/io5';
import { DiMongodb } from 'react-icons/di';
import axios from 'axios';
import Sectiontitle from '../components/Sectiontitle';
import Smalltitle from '../components/Smalltitle';
import Layout from '../components/Layout';
import Resume from '../components/Resume';

function Resumes() {
  const [workingExperience, setWorkingExperience] = useState([]);
  const [educationExperience, setEducationExperience] = useState([]);

  useEffect(() => {
    axios.get('/api/experience').then((response) => {
      setWorkingExperience(response.data.workingExperience);
      setEducationExperience(response.data.educationExperience);
    });
  }, []);

  const skills = [
    {
      title: 'HTML5',
      icon: FaHtml5,
    },
    {
      title: 'CSS3',
      icon: FaCss3Alt,
    },
    {
      title: 'Javascript',
      icon: FaJs,
    },
    {
      title: 'React',
      icon: FaReact,
    },
    {
      title: 'NodeJS',
      icon: FaNode,
    },
    {
      title: 'Electron',
      icon: IoLogoElectron,
    },
    {
      title: 'MongoDB',
      icon: DiMongodb,
    },
    {
      title: 'Firebase',
      icon: IoLogoFirebase,
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Resume</title>
        <meta
          name="description"
          content="Alex Younger Personal Portfolio Resume Page"
        />
      </Helmet>
      <div className="mi-skills-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="My Skills" />
          <div className="mi-skills">
            <div className="row justify-content-center mt-30">
              {skills.map((skill) => (
                <div
                  key={skill.title}
                  className="col-6 col-md-4 col-lg-3 d-flex"
                >
                  <skill.icon
                    className="color-theme mx-auto my-5"
                    style={{ height: '100px', width: '100px' }}
                    title={skill.title}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mi-resume-area mi-section mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Resume" />
          <Smalltitle title="Working Experience" icon="briefcase" />
          <div className="mi-resume-wrapper">
            {workingExperience.map((workingExp) => (
              <Resume key={workingExp.id} resumeData={workingExp} />
            ))}
          </div>
          <div className="mt-30" />
          <Smalltitle title="Educational Qualifications" icon="book" />
          <div className="mi-resume-wrapper">
            {educationExperience.map((educatonExp) => (
              <Resume key={educatonExp.id} resumeData={educatonExp} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Resumes;
