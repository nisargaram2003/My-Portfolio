import React from 'react';

function Experience() {
  return (
    <section className="experience">
      <div className="experience-content">
        <h1>Experience</h1>
        <div className="experience-list">
          <div className="experience-item"> 
            <h3>AI/ML Intern @ Rooman Technologies</h3>
            <span className="experience-date">Sep 2024 – May 2025</span>
            <p>
              Built a predictive churn model using Python and IBM Watson Cloud with 85% accuracy. Applied data preprocessing, model tuning, and false positive reduction using Sklearn.
            </p>
          </div>
          <div className="experience-item">
            <h3>Python Intern @ Aqmenz Automation</h3>
            <span className="experience-date">Oct 2022 – Dec 2022</span>
            <p>
              Developed real-time data visualizations using Pandas, NumPy, and Seaborn. Strengthened programming skills through OOPs, file handling, and collaborative development practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
