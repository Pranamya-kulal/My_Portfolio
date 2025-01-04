import React from 'react';
import projectsData from '../projectsData'; // Import the project data
import './Projects.css'; // Ensure you import the CSS file

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-header">My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <div className="card-inner">
              <div className="card-front">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="project-image"
                />
                <h3 className="project-title">{project.title}</h3>
              </div>
              <div className="card-back">
                <p className="project-description">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
