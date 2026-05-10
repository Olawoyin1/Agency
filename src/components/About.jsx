import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2>About AgencyHub</h2>
          <p>
            AgencyHub is a forward-thinking digital agency dedicated to transforming businesses through innovative technology solutions. With a team of passionate developers, designers, and strategists, we've been delivering exceptional results since our founding.
          </p>
          <p>
            Our mission is to empower businesses of all sizes by creating digital solutions that are not only technologically advanced but also user-centric and results-driven. We believe in the power of collaboration, creativity, and continuous innovation.
          </p>
          <div className="about-stats">
            <div className="stat">
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>30+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat">
              <h3>15+</h3>
              <p>Team Members</p>
            </div>
            <div className="stat">
              <h3>8+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
        <div className="about-features">
          <h3>Why Choose Us?</h3>
          <ul>
            <li>✓ Expert team with proven track record</li>
            <li>✓ Cutting-edge technology and best practices</li>
            <li>✓ Custom solutions tailored to your needs</li>
            <li>✓ 24/7 support and maintenance</li>
            <li>✓ Transparent communication</li>
            <li>✓ Competitive pricing and flexible models</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
