// src/components/sections/projects.jsx
import React, { useState } from 'react';
import ScrollAnimation from '../ScrollAnimation';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'Full-featured e-commerce platform with payment integration, inventory management, and real-time analytics.',
      image: '/assets/projects/ecommerce.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true,
      icon: 'fa-shopping-cart',
      color: '#0066ff'
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'web',
      description: 'Collaborative task management application with real-time updates, team spaces, and progress tracking.',
      image: '/assets/projects/taskmanager.jpg',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true,
      icon: 'fa-tasks',
      color: '#61dafb'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      category: 'web',
      description: 'Modern portfolio website with 3D animations, dark mode, and responsive design.',
      image: '/assets/projects/portfolio.jpg',
      technologies: ['React', 'Three.js', 'GSAP', 'CSS3'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
      icon: 'fa-user',
      color: '#ff9900'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      category: 'web',
      description: 'Real-time weather dashboard with interactive maps, forecasts, and weather alerts.',
      image: '/assets/projects/weather.jpg',
      technologies: ['React', 'Chart.js', 'REST APIs', 'CSS3'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
      icon: 'fa-cloud-sun',
      color: '#ea4335'
    },
    {
      id: 5,
      title: 'Blog Platform',
      category: 'web',
      description: 'Full-stack blog platform with user authentication, comments, and admin dashboard.',
      image: '/assets/projects/blog.jpg',
      technologies: ['React', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true,
      icon: 'fa-blog',
      color: '#3776ab'
    },
    {
      id: 6,
      title: 'Mobile App UI',
      category: 'design',
      description: 'Mobile application UI/UX design with user flows, wireframes, and interactive prototypes.',
      image: '/assets/projects/mobileui.jpg',
      technologies: ['Figma', 'Adobe XD', 'UI/UX', 'Prototyping'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
      icon: 'fa-mobile-alt',
      color: '#2496ed'
    },
    {
      id: 7,
      title: 'Analytics Dashboard',
      category: 'web',
      description: 'Business intelligence dashboard with interactive charts, data visualization, and reporting.',
      image: '/assets/projects/analytics.jpg',
      technologies: ['React', 'D3.js', 'Chart.js', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
      icon: 'fa-chart-line',
      color: '#4ecdc4'
    },
    {
      id: 8,
      title: 'Social Media App',
      category: 'web',
      description: 'Social media platform with posts, likes, comments, and real-time notifications.',
      image: '/assets/projects/social.jpg',
      technologies: ['React', 'Firebase', 'Redux', 'Tailwind CSS'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
      icon: 'fa-users',
      color: '#764abc'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'design', label: 'Design' },
    { id: 'featured', label: 'Featured' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured' 
      ? projects.filter(p => p.featured)
      : projects.filter(p => p.category === filter);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <ScrollAnimation animation="fade-up">
          <div className="projects-header">
            <span className="section-tag">Projects</span>
            <h2>Featured Work</h2>
            <p>Showcasing my latest projects and creative solutions</p>
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
                      icon.innerHTML = `<i class="fas ${project.icon}" style="color: ${project.color}"></i>`;
                      parent.appendChild(icon);
                    }}
                  />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        <i className="fab fa-github"></i>
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
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

        {/* Projects Stats */}
        <ScrollAnimation animation="fade-up" delay={600}>
          <div className="projects-stats">
            <div className="project-stat">
              <span className="project-stat-number">{projects.length}</span>
              <span className="project-stat-label">Total Projects</span>
            </div>
            <div className="project-stat-divider"></div>
            <div className="project-stat">
              <span className="project-stat-number">{projects.filter(p => p.featured).length}</span>
              <span className="project-stat-label">Featured</span>
            </div>
            <div className="project-stat-divider"></div>
            <div className="project-stat">
              <span className="project-stat-number">
                {new Set(projects.flatMap(p => p.technologies)).size}
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