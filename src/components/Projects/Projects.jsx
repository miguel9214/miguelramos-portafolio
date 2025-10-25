import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import { useRef, useEffect, useState } from 'react';
import './Projects.css';

const Projects = () => {
  const { t, data } = useLanguage();
  const { projects } = data;
  const cardRefs = useRef([]);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [loadedImages, setLoadedImages] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            const delay = index * 100;
            setTimeout(() => {
              setVisibleCards(prev => new Set([...prev, index]));
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '100px',
        threshold: 0.1
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [projects]);

  const handleImageLoad = (index) => {
    setLoadedImages(prev => new Set([...prev, index]));
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">{t.projects.title}</h2>
        <p className="section-subtitle">{t.projects.subtitle}</p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''} ${visibleCards.has(index) ? 'visible' : ''}`}
              data-index={index}
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <div className={`project-image ${loadedImages.has(index) ? 'image-loaded' : ''}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className={loadedImages.has(index) ? 'loaded' : ''}
                  onLoad={() => handleImageLoad(index)}
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View demo"
                    >
                      <FaExternalLinkAlt /> {t.projects.viewDemo}
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View code"
                    >
                      <FaGithub /> {t.projects.viewCode}
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  <span className="tech-label">{t.projects.technologies}:</span>
                  <div className="tech-tags">
                    {project.technologies.map((tech) => (
                      <span key={`${project.id}-${tech}`} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;