import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-container">
        <h1 className="hero-title">Welcome to AgencyHub</h1>
        <p className="hero-description">
          We transform ideas into extraordinary digital experiences
        </p>
        <div className="hero-buttons">
          <Link to="/projects" className="btn btn-primary">
            View Our Work
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Start Your Project
          </Link>
        </div>
      </div>
      <div className="hero-background">
        <div className="gradient-orb"></div>
        <div className="gradient-orb gradient-orb-2"></div>
      </div>
    </div>
  );
}

export default Hero;
