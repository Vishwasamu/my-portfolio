// src/components/sections/experience.jsx
import React from 'react';
import ScrollAnimation from '../ScrollAnimation';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Full Stack Developer',
      company: 'Tech Solutions Lanka',
      period: '2023 - Present',
      location: 'Colombo, Sri Lanka',
      icon: 'fa-code',
      color: '#0066ff',
      description: 'Developing full-stack web applications using React, Node.js, and MongoDB.',
      achievements: [
        'Built 10+ production-ready web applications',
        'Optimized database performance by 40%',
        'Led a team of 5 developers',
        'Implemented CI/CD pipelines'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Docker', 'AWS']
    },
    {
      id: 2,
      title: 'Junior Software Engineer',
      company: 'Innovative Labs',
      period: '2022 - 2023',
      location: 'Matara, Sri Lanka',
      icon: 'fa-laptop-code',
      color: '#61dafb',
      description: 'Worked on enterprise-level applications and contributed to system architecture.',
      achievements: [
        'Developed RESTful APIs with Express.js',
        'Integrated third-party services',
        'Reduced load time by 30%',
        'Wrote comprehensive documentation'
      ],
      technologies: ['JavaScript', 'Express.js', 'MySQL', 'Git', 'REST APIs']
    },
    {
      id: 3,
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      period: '2021 - 2022',
      location: 'Remote',
      icon: 'fa-user-tie',
      color: '#ff9900',
      description: 'Provided web development services to clients across various industries.',
      achievements: [
        'Delivered 15+ projects on time',
        'Built responsive websites for clients',
        'Provided technical consulting',
        'Maintained client relationships'
      ],
      technologies: ['HTML/CSS', 'JavaScript', 'PHP', 'WordPress', 'Figma']
    },
    {
      id: 4,
      title: 'Trainee Draughtsperson',
      company: 'District Engineering Building Office, Matara',
      period: '2022 ',
      location: 'Matara, Sri Lanka',
      icon: 'fa-drafting-compass',
      color: '#ea4335',
      description: 'Gained hands-on experience in draughting and design.',
      achievements: [
        'Assisted in creating technical drawings',
        'Wrote clear, detailed documentation',
        'Participated in team meetings',
        'Learned industry standards and practices'
      ],
      technologies: ['AutoCAD', 'SketchUp', 'Revit', 'Microsoft Office', 'Git']
    }
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <ScrollAnimation animation="fade-up">
          <div className="experience-header">
            <span className="section-tag">Experience</span>
            <h2>Professional Journey</h2>
            <p>My career path and professional experience in software engineering</p>
          </div>
        </ScrollAnimation>

        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <ScrollAnimation 
              key={exp.id} 
              animation="fade-up" 
              delay={100 + (index * 100)}
              className="experience-card-wrapper"
            >
              <div className="experience-card">
                <div className="experience-icon" style={{ background: `${exp.color}15` }}>
                  <i className={`fas ${exp.icon}`} style={{ color: exp.color }}></i>
                </div>
                
                <div className="experience-content">
                  <div className="experience-header-row">
                    <h3>{exp.title}</h3>
                    <span className="experience-period">{exp.period}</span>
                  </div>
                  
                  <p className="experience-company">
                    <i className="fas fa-building"></i>
                    {exp.company}
                  </p>
                  
                  <p className="experience-location">
                    <i className="fas fa-map-marker-alt"></i>
                    {exp.location}
                  </p>
                  
                  <p className="experience-description">{exp.description}</p>
                  
                  <div className="experience-achievements">
                    {exp.achievements.map((achievement, idx) => (
                      <span key={idx} className="achievement-tag">
                        <i className="fas fa-check-circle"></i>
                        {achievement}
                      </span>
                    ))}
                  </div>
                  
                  <div className="experience-technologies">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Experience Stats */}
        <ScrollAnimation animation="fade-up" delay={500}>
          <div className="experience-stats">
            <div className="exp-stat">
              <span className="exp-stat-number">4+</span>
              <span className="exp-stat-label">Years Experience</span>
            </div>
            <div className="exp-stat-divider"></div>
            <div className="exp-stat">
              <span className="exp-stat-number">25+</span>
              <span className="exp-stat-label">Projects</span>
            </div>
            <div className="exp-stat-divider"></div>
            <div className="exp-stat">
              <span className="exp-stat-number">15+</span>
              <span className="exp-stat-label">Happy Clients</span>
            </div>
            <div className="exp-stat-divider"></div>
            <div className="exp-stat">
              <span className="exp-stat-number">10+</span>
              <span className="exp-stat-label">Technologies</span>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Experience;