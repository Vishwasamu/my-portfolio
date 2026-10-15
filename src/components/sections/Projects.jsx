// src/components/sections/projects.jsx
import React, { useState, useEffect, useRef } from 'react';
import ScrollAnimation from '../ScrollAnimation';

// Counter Component for smooth number animation on scroll
const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const currentCount = Math.floor(percentage * end);
      setCount(currentCount);

      if (percentage < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isVisible, end, duration]);

  return <span ref={counterRef}>{count}</span>;
};

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'ZentraStay - Hotel Management System',
      category: 'web',
      description: 'A full-stack web application for hotel management featuring room reservation, guest registration, billing, and administrative dashboards.',
      image: '/assets/projects/zentrastay.jpg',
      technologies: ['React.js', 'PHP', 'REST API', 'MySQL', 'CSS3'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true,
      icon: 'fa-hotel',
      color: '#0066ff'
    },
    {
      id: 2,
      title: 'ත්‍රිපිටක දේශනා (Tripitaka Deshana)',
      category: 'mobile',
      description: 'A cross-platform mobile audio application built for streaming and offline playback of Buddhist sermons hosted on Internet Archive.',
      image: '/assets/projects/tripitaka.jpg',
      technologies: ['Flutter', 'Dart', 'Internet Archive API', 'Firebase', 'SQLite'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true,
      icon: 'fa-dharmachakra',
      color: '#ff9900'
    },
    {
      id: 3,
      title: 'Docu Safe - Secure Vault',
      category: 'mobile',
      description: 'An offline-first mobile vault app for storing and organizing encrypted confidential documents with PIN and biometric protection.',
      image: '/assets/projects/docusafe.jpg',
      technologies: ['Flutter', 'Dart', 'SQLite', 'Biometric Auth', 'Encryption'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true,
      icon: 'fa-user-shield',
      color: '#4ecdc4'
    },
    {
      id: 4,
      title: 'Chemore Routine Tracker',
      category: 'mobile',
      description: 'A daily utility mobile app for managing personal routines, task logging, and offline persistence built using local SQLite architecture.',
      image: '/assets/projects/chemore.jpg',
      technologies: ['Flutter', 'Dart', 'SQLite', 'Local Storage'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
      icon: 'fa-calendar-check',
      color: '#ea4335'
    },
    {
      id: 5,
      title: 'Zentravish / SyMax Platform',
      category: 'web',
      description: 'A modern digital service platform showcasing software development services, client portfolio, and interactive contact solutions.',
      image: '/assets/projects/symax.jpg',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'EmailJS'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
      icon: 'fa-laptop-code',
      color: '#61dafb'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'web', label: 'Web Apps' },
    { id: 'featured', label: 'Featured' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured' 
      ? projects.filter(p => p.featured)
      : projects.filter(p => p.category === filter);

  // Dynamic values calculation
  const totalProjects = projects.length;
  const totalFeatured = projects.filter(p => p.featured).length;
  const totalTechs = new Set(projects.flatMap(p => p.technologies)).size;

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <ScrollAnimation animation="fade-up">
          <div className="projects-header">
            <span className="section-tag">Projects</span>
            <h2>Featured Work</h2>
            <p>Showcasing my mobile apps, full-stack systems, and software solutions</p>
          </div>
        </ScrollAnimation>

        {/* Filter Buttons */}
        <ScrollAnimation animation="fade-up" delay={100}>
          <div className="projects-filter">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
                onClick={() => setFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollAnimation>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ScrollAnimation 
              key={project.id} 
              animation="fade-up" 
              delay={100 + (index * 80)}
            >
              <div className="project-card">
                <div className="project-image-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const parent = e.target.parentElement;
                      const icon = document.createElement('div');
                      icon.className = 'project-icon-fallback';
                      icon.innerHTML = `<i class="fas ${project.icon}" style="color: ${project.color}; font-size: 2.5rem;"></i>`;
                      parent.appendChild(icon);
                    }}
                  />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" title="GitHub Repo">
                        <i className="fab fa-github"></i>
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link" title="Live Demo / View">
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    </div>
                  </div>
                  {project.featured && (
                    <span className="project-featured-badge">
                      <i className="fas fa-star"></i> Featured
                    </span>
                  )}
                </div>
                
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="project-tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Projects Stats with Counter Animation */}
        <ScrollAnimation animation="fade-up" delay={500}>
          <div className="projects-stats">
            <div className="project-stat">
              <span className="project-stat-number">
                <Counter end={totalProjects} />
              </span>
              <span className="project-stat-label">Total Projects</span>
            </div>
            <div className="project-stat-divider"></div>
            <div className="project-stat">
              <span className="project-stat-number">
                <Counter end={totalFeatured} />
              </span>
              <span className="project-stat-label">Featured</span>
            </div>
            <div className="project-stat-divider"></div>
            <div className="project-stat">
              <span className="project-stat-number">
                <Counter end={totalTechs} />+
              </span>
              <span className="project-stat-label">Technologies</span>
            </div>
            <div className="project-stat-divider"></div>
            <div className="project-stat">
              <span className="project-stat-number">100%</span>
              <span className="project-stat-label">Satisfaction</span>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Projects;