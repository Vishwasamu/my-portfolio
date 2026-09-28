// src/components/sections/certificate.jsx
import React from 'react';
import ScrollAnimation from '../ScrollAnimation';
// Image එක import කරන්න
import uom01 from "../../assets/certificates/uom01.jpeg";


const Certificate = () => {
  const certificates = [
    {
      id: 1,
      title: 'Front-End Web Development',
      issuer: 'Department of Information Technology, Faculty of Information Technology, University of Moratuwa',
      date: '2026',
      icon: 'fa-code',
      color: '#0066ff',
      description: 'Complete full stack development with React, Node.js, and MongoDB',
      image: uom01,
      link: '#',
      badge: '🥇',
      level: 'Advanced'
    },
    {
      id: 2,
      title: 'React & Next.js Mastery',
      issuer: 'Udemy',
      date: '2023',
      icon: 'fa-react',
      color: '#61dafb',
      description: 'Advanced React concepts, Next.js, and modern frontend development',
      image: '/assets/certificates/react.jpg',
      link: '#',
      badge: '🥈',
      level: 'Intermediate'
    },
    {
      id: 3,
      title: 'Cloud Computing - AWS',
      issuer: 'Amazon Web Services',
      date: '2024',
      icon: 'fa-cloud',
      color: '#ff9900',
      description: 'AWS fundamentals, EC2, S3, Lambda, and cloud architecture',
      image: '/assets/certificates/aws.jpg',
      link: '#',
      badge: '🥇',
      level: 'Advanced'
    },
    {
      id: 4,
      title: 'Python for Data Science',
      issuer: 'Coursera',
      date: '2023',
      icon: 'fa-python',
      color: '#3776ab',
      description: 'Data analysis, visualization, and machine learning with Python',
      image: '/assets/certificates/certificate01.jpg',
      link: '#',
      badge: '🥈',
      level: 'Intermediate'
    },
    {
      id: 5,
      title: 'UI/UX Design Fundamentals',
      issuer: 'Google',
      date: '2023',
      icon: 'fa-paint-brush',
      color: '#ea4335',
      description: 'User experience design, prototyping, and design thinking',
      image: '/assets/certificates/uiux.jpg',
      link: '#',
      badge: '🥉',
      level: 'Beginner'
    },
    {
      id: 6,
      title: 'DevOps Essentials',
      issuer: 'Docker',
      date: '2024',
      icon: 'fa-docker',
      color: '#2496ed',
      description: 'Containerization, CI/CD pipelines, and infrastructure as code',
      image: '/assets/certificates/devops.jpg',
      link: '#',
      badge: '🥈',
      level: 'Intermediate'
    }
  ];

  return (
    <section className="certificate-section" id="certificates">
      <div className="certificate-container">
        <ScrollAnimation animation="fade-up">
          <div className="certificate-header">
            <span className="section-tag">Certificates</span>
            <h2>Professional Certifications</h2>
            <p>Credentials and achievements that validate my expertise</p>
          </div>
        </ScrollAnimation>

        {/* Card Pack Grid */}
        <div className="certificate-grid-pack">
          {certificates.map((cert, index) => (
            <ScrollAnimation 
              key={cert.id} 
              animation="fade-up" 
              delay={100 + (index * 80)}
              className="cert-card-pack-wrapper"
            >
              <div className="cert-card-pack">
                {/* Card Stack Effect */}
                <div className="card-stack">
                  <div className="card-stack-item card-stack-1"></div>
                  <div className="card-stack-item card-stack-2"></div>
                  <div className="card-stack-item card-stack-3"></div>
                </div>

                {/* Main Card */}
                <div className="cert-card-main">
                  {/* Badge */}
                  <div className="cert-badge">
                    <span>{cert.badge}</span>
                    <span className="cert-level">{cert.level}</span>
                  </div>

                  {/* Image */}
                  <div className="certificate-image-wrapper">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="certificate-image"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                        const parent = e.target.parentElement;
                        const icon = document.createElement('div');
                        icon.className = 'certificate-icon-fallback';
                        icon.innerHTML = `<i class="fab ${cert.icon}" style="color: ${cert.color}"></i>`;
                        parent.appendChild(icon);
                      }}
                    />
                    <div className="certificate-image-overlay"></div>
                  </div>
                  
                  <div className="certificate-content">
                    <h3>{cert.title}</h3>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <p className="cert-description">{cert.description}</p>
                    <div className="cert-footer">
                      <span className="cert-date">
                        <i className="fas fa-calendar-alt"></i>
                        {cert.date}
                      </span>
                      {cert.link && cert.link !== '#' && (
                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                          <i className="fas fa-external-link-alt"></i> View
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="certificate-hover-effect"></div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Certificate Stats */}
        <ScrollAnimation animation="fade-up" delay={600}>
          <div className="certificate-stats-pack">
            <div className="cert-stat-pack">
              <span className="cert-stat-number">{certificates.length}+</span>
              <span className="cert-stat-label">Certifications</span>
            </div>
            <div className="cert-stat-divider-pack"></div>
            <div className="cert-stat-pack">
              <span className="cert-stat-number">
                {new Set(certificates.map(c => c.issuer)).size}+
              </span>
              <span className="cert-stat-label">Platforms</span>
            </div>
            <div className="cert-stat-divider-pack"></div>
            <div className="cert-stat-pack">
              <span className="cert-stat-number">100+</span>
              <span className="cert-stat-label">Hours of Learning</span>
            </div>
            <div className="cert-stat-divider-pack"></div>
            <div className="cert-stat-pack">
              <span className="cert-stat-number">3</span>
              <span className="cert-stat-label">Levels</span>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Certificate;