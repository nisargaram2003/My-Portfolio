import React from 'react';
import ProfilePic from "../assets/images/pexels-shvetsa-12662868.jpg"

function About() {
  return (
    <section className="about">
      <div className="about-content">
        <h1>About Me</h1>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I’m a passionate frontend developer with a strong foundation in React.js, HTML, CSS, and JavaScript.
              I enjoy turning complex problems into simple, beautiful user interfaces. With hands-on experience in machine learning and Python, I bring both design sensitivity and technical skill to the table.
            </p>
            <p>
              Currently pursuing B.E in Computer Science at Cambridge Institute of Technology with a CGPA of 8.0/10. I’ve contributed to real-world projects during internships focused on AI and data science.
            </p>
          </div>
          <div className="about-img">
            <img src={ProfilePic}alt="developer" /> 
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
