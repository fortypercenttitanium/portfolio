import { Helmet } from 'react-helmet';
import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode } from 'react-icons/fa';
import { IoLogoElectron, IoLogoFirebase } from 'react-icons/io5';
import { DiMongodb } from 'react-icons/di';
import Sectiontitle from '../components/Sectiontitle';
import Smalltitle from '../components/Smalltitle';
import Layout from '../components/Layout';
import ResumeSection from '../components/ResumeSection';

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

const workingExperience = [
  {
    id: 1,
    year: '2020 - Present',
    position: 'Fulstack Engineer/Maintainer',
    company: 'Cards of Carousal',
    companyURL: 'https://www.cardsofcarousal.com',
    companyGithubURL: 'https://github.com/I3uckwheat/cards-of-carousal',
    details: [
      'Leverage modern React to build user interface and state management system',
      'Develop NodeJS/Express server modules to handle routing and API requests',
      'Utilize web socket API for player-server communication',
      'Write tests for all components to ensure 100% coverage',
      'Collaborate with peers through pair programming and brainstorm sessions',
      'Work in an agile environment meeting sprint deadlines, checking in at standups, and sharing progress at scrums',
      'Review pull requests from other contributers',
    ],
  },
  {
    id: 2,
    year: '2020 - Present',
    position: 'Web Developer',
    company: 'Freelance',
    details: [
      'Develop web and application solutions for various client needs',
      'Set up and maintain hosting for client sites',
      'Offer consultation for better user experience, web presence, and SEO',
    ],
  },
];

function Resume() {
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
            {workingExperience.map((experience) => (
              <ResumeSection key={experience.id} experience={experience} />
            ))}
          </div>
          {/* <div className="mt-30" />
          <Smalltitle title="Educational Qualifications" icon="book" />
          <div className="mi-resume-wrapper">
            {educationExperience.map((educatonExp) => (
              <Resume key={educatonExp.id} resumeData={educatonExp} />
            ))}
          </div> */}
        </div>
      </div>
    </Layout>
  );
}

export default Resume;
