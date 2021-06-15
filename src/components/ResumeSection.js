import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

function ResumeSection({ experience }) {
  const { year, position, company, companyURL, companyGithubURL, details } =
    experience;
  return (
    <div className="mi-resume mt-30">
      <div className="mi-resume-summary">
        <h6 className="mi-resume-year">{year}</h6>
      </div>
      <div className="mi-resume-details">
        <h5>{position}</h5>
        <h6 className="mi-resume-company">
          {company}
          {companyURL && (
            <a
              href={companyURL}
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: 'none',
              }}
            >
              <FaLink
                style={{
                  margin: '-2px 8px 0',
                }}
              />
            </a>
          )}
          {companyGithubURL && (
            <a
              href={companyGithubURL}
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: 'none',
              }}
            >
              <FaGithub
                style={{
                  margin: '-2px 0 0',
                }}
              />
            </a>
          )}
        </h6>
        <ul>
          {details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ResumeSection;
