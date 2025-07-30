import React from 'react';

function Services() {
  return (
    <section className="services">
      <div className="services-content">
        <h1>My Services</h1>
        <div className="services-grid">
          <div className="service-card">
            <h3>Frontend Development</h3>
            <p>Modern, responsive web interfaces using React.js, HTML5, CSS3, and JavaScript with clean, maintainable code.</p>
          </div>
          {/* <div className="service-card"> 
            <h3>API Integration</h3>
            <p>Seamless integration of RESTful APIs and backend services into frontend applications for real-time data handling.</p>
          </div> */}
          
        </div>
      </div>
    </section>
  );
}

export default Services;
