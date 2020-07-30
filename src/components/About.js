import React from 'react';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-section">
        <div className="about-content">
          <div className="about-subheader">
            <h1 className="text-subheader">ABOUT</h1>
          </div>
          <div className="about-main">
            <h2 className="text-lg text-cyan">Kenneth Surban</h2>
            <div className="icon-list">
              <FontAwesomeIcon color="rgba(255, 255, 255, 0.66)" icon={faLinkedin} size="2x"/>
              <FontAwesomeIcon color="rgba(255, 255, 255, 0.66)" icon={faGithubSquare} size="2x"/>
              <FontAwesomeIcon color="rgba(255, 255, 255, 0.66)" icon={faGamepad} size="2x"/>
            </div>
            <p className="about-description">
            Software Engineer from San Francisco, CA with proficiency in front end and back end development.
            <br/>
            I am an amazing team player and have worked with many individuals that I know how to work with others.  I can lead, I can follow, and I am always willing to give my time to those in need.
            <br/>
            Problem solver, fast learner, and passion for user centered designs.
            <br/>
            Likes basketball, tennis, MMA, hiking, League of Legends, cats, and chocolate.
            <br/>
            Interested in front end and back end work, and am willing to relocate to any destination in the US. 
            </p>
            <button className="cv-button">View My CV</button>
            <div className="circle"></div>
          </div>
        </div>
        <div className="about-image">
          <div className="img-container">
            <div className="img"></div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;