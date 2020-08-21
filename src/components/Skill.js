import React from 'react';

import './Skill.css';

const Skills = () => {
  return(
    <div className="skill-container">
      <div className="skill-subheading">
        <div className="subheader">
          <h1 className="text-subheader">SKILLS</h1>
        </div>
      </div>
      <div className="skill-section">
        <div className="skill-main">
          <div className="skill-item">
            <div className="skill-item-header">
              <h2>JavaScript</h2>
            </div>
          </div>
          <div className="skill-item">
            Card 2
          </div>
          {/* <div className="skill-item">
            Card 3
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Skills;