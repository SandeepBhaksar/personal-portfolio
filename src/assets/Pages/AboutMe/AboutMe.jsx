import React from 'react';
import fullpic from '../../../images/full-pic.jpg';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div id='about' className="aboutme-container">
      <header className="header">About Me</header>

      <div className="aboutme">
        <div className="image">
            <img src={fullpic} alt="About Me" />
        </div>
        <div className="info">
          <p>Hi, I'm Sandeep! I'm a full-stack developer specializing in building exceptional digital experiences.</p>
          <p>I'm passionate about creating user-friendly, visually appealing, and accessible solutions that perform well across all platforms.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
