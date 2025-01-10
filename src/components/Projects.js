import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import projectsData from '../projectsData';
import cattleGuardAnimation from '../animations/Animation - 1736510558745.json';
import lostAndFoundAnimation from '../animations/Animation - 1736510725274.json';
import thirdProjectAnimation from '../animations/Animation - 1736510817772.json';
import './Projects.css';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div 
      className="project-modal-overlay show" 
      onClick={onClose}
    >
      <div 
        className="project-modal-content" 
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose}>×</button>
        <div className="project-modal-grid">
          <div className="project-modal-left">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="project-modal-image" 
            />
            <div className="project-modal-header">
              <h2>{project.title}</h2>
              <p className="project-modal-description">{project.description}</p>
            </div>
          </div>

          <div className="project-modal-right">
            <div className="modal-section technologies">
              <h3>Technologies Used</h3>
              <div className="tech-stack">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>

            <div className="modal-section features">
              <h3>Key Features</h3>
              <ul className="features-list">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="modal-actions">
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
      </div>
    </div>
  );
};

const ProjectCard = ({ project, onOpenModal }) => {
  return (
    <div 
      className="project-card" 
      onClick={() => onOpenModal(project)}
    >
      <div className="card-inner">
        <div className="card-front">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="project-image"
          />
          <div className="project-title-overlay">
            <h3>{project.title}</h3>
          </div>
        </div>
        <div className="card-back">
          <p>{project.description}</p>
          <span className="more-details-btn">More Details</span>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const animations = [
    cattleGuardAnimation, 
    lostAndFoundAnimation, 
    thirdProjectAnimation
  ];

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className="projects-container">
      <div className="projects-header-wrapper">
        <h2 className="projects-header">
          <span>My Projects</span>
        </h2>
      </div>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div 
            key={project.id} 
            className="project-wrapper"
          >
            <div className="project-section">
              {index % 2 === 0 ? (
                <>
                  <div className="project-animation-column">
                    <Lottie 
                      animationData={animations[index % animations.length]}
                      loop={true}
                      autoplay={true}
                      className="projects-lottie-animation"
                    />
                  </div>
                  
                  <ProjectCard 
                    project={project} 
                    onOpenModal={handleOpenModal} 
                  />
                </>
              ) : (
                <>
                  <ProjectCard 
                    project={project} 
                    onOpenModal={handleOpenModal} 
                  />

                  <div className="project-animation-column">
                    <Lottie 
                      animationData={animations[index % animations.length]}
                      loop={true}
                      autoplay={true}
                      className="projects-lottie-animation"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

export default Projects;
