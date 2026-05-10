import { projectsData } from '../data/projects';
import '../styles/Projects.css';

function Projects() {
  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1>Our Projects</h1>
        <p>Explore the innovative solutions we've created for our clients</p>
      </div>
      <div className="projects-container">
        <div className="projects-list">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card-large">
              <img src={project.image} alt={project.title} />
              <div className="project-details">
                <span className="category-badge">{project.category}</span>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="technologies">
                  <strong>Technologies:</strong>
                  <div className="tech-list">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-item">{tech}</span>
                    ))}
                  </div>
                </div>
                <a href={project.link} className="project-link">View Project →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
