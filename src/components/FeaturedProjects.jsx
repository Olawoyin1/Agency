import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import '../styles/FeaturedProjects.css';

function FeaturedProjects() {
  const featured = projectsData.slice(0, 3);

  return (
    <section className="featured-projects">
      <div className="featured-container">
        <h2 className="featured-title">Featured Projects</h2>
        <p className="featured-subtitle">Showcasing our latest and greatest work</p>
        <div className="projects-grid">
          {featured.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="featured-footer">
          <Link to="/projects" className="btn btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
