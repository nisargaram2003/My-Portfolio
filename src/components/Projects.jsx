import React from 'react';

function Projects() {
  return (
    <section className="projects">
      <div className="projects-content">
        <h1>Projects</h1>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Water Potability Prediction</h3>
            <p>
              Developed a machine learning model to predict drinking water quality using Python, NumPy, and Sklearn.
              Achieved 97% accuracy after model tuning and cross-validation.
            </p>
          </div>
          <div className="project-card">
            <h3>Canteen Management System</h3>
            <p>
              Built using JavaScript, PHP, and MySQL to handle ordering, billing, and inventory.
              Includes real-time order processing and admin dashboard.
            </p>
          </div>
          <div className="project-card">
            <h3>Portfolio Website (This Site!)</h3>
            <p>
              Built from scratch using React.js, React Router, and custom CSS. Fully responsive, animated, and personalized for developers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
