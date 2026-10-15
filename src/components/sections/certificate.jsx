// src/components/sections/certificate.jsx
import React, { useState, useEffect, useRef } from 'react';
import ScrollAnimation from '../ScrollAnimation';
// Image එක import කරන්න
import uom01 from "../../assets/certificates/uom01.jpeg";
import certificate01 from "../../assets/certificates/certificate01.jpeg";
import certificate02 from "../../assets/certificates/certificate02.jpeg";
import certificate03 from "../../assets/certificates/certificate03.jpeg";
import certificate04 from "../../assets/certificates/certificate04.jpeg"; 
import certificate05 from "../../assets/certificates/certificate05.jpeg";

// Counter Component for smooth number animation
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
      
      // Easing effect for smooth counting
      const currentCount = Math.floor(percentage * end);
      setCount(currentCount);

      if (percentage < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(end); // Ensure exact final number
      }
    };

    requestAnimationFrame(animateCount);
  }, [isVisible, end, duration]);

  return <span ref={counterRef}>{count}</span>;
};

const Certificate = () => {
  const [showAll, setShowAll] = useState(false);

  const certificates = [
    {
      id: 1,
      title: 'Front-End Web Development',
      issuer: 'Department of Information Technology, Faculty of Information Technology, University of Moratuwa',
      date: '2026',
      icon: 'fa-code',
      color: '#0066ff',
      description: 'Successfully completed Front-End Web Development certification',
      image: uom01,
      link: '#',
      badge: '🥇',
      level: 'Advanced'
    },
    {
      id: 2,
      title: 'Introduction to SQL',
      issuer: 'Sololearn',
      date: '2023',
      icon: 'fa-database',
      color: '#61dafb',
      description: 'Advanced SQL concepts, database design, and query optimization',
      image: certificate01,
      link: '#',
    },
    {
      id: 3,
      title: 'The Fundamentals of Digital Marketing',
      issuer: 'Amazon Web Services',
      date: '2023',
      icon: 'fa-cloud',
      color: '#ff9900',
      description: 'Successfully completed The Fundamentals of Digital Marketing certification accredited by Google Digital Garage',
      image: certificate02,
      link: '#',
      badge: '🥇',
      level: 'Advanced'
    },
    {
      id: 4,
      title: 'Human Resource Management',
      issuer: 'Greate Learning Academy',
      date: '2023',
      icon: 'fa-python',
      color: '#3776ab',
      description: 'Skilled in Human Resource Management, with experience in organizational leadership, event coordination, team collaboration, and communication.',
      image: certificate03,
      link: '#',
      badge: '🥈',
      level: 'Intermediate'
    },
    {
      id: 5,
      title: 'Thinkfest Ideathon & Hackathon 2025',
      issuer: 'ESU Kandy Branch',
      date: '2025',
      icon: 'fa-paint-brush',
      color: '#ea4335',
      description: 'Awarded First Runner-Up at THINKFEST 2025 (ESOFT Metro Campus, Kandy) for designing and pitching an innovative software solution evaluated on technical architecture and problem-solving.',
      image: certificate05,
      link: '#',
      badge: '🥉',
      level: 'Beginner'
    },
    {
      id: 6,
      title: 'Cloud Computing Foundations',
      issuer: 'Great Learning Academy',
      date: '2023',
      icon: 'fa-docker',
      color: '#2496ed',
      description: 'Gained foundational knowledge in cloud computing, including cloud service models, deployment strategies, and cloud architecture principles.',
      image: certificate04,
      link: '#',
      badge: '🥈',
      level: 'Intermediate'
    },
    {
      id: 7,
      title: 'Advanced Git & GitHub',
      issuer: 'GitHub',
      date: '2024',
      icon: 'fa-git-alt',
      color: '#f05032',
      description: 'Version control workflows, branching strategies, and collaboration',
      image: certificate05,
      link: '#',
      badge: '🥇',
      level: 'Advanced'
    }
  ];

  // Slice certificates to show only 6 initially unless showAll is true
  const displayedCertificates = showAll ? certificates : certificates.slice(0, 6);

  // Dynamic values calculation
  const totalCertificates = certificates.length;
  const totalPlatforms = new Set(certificates.map(c => c.issuer)).size;
  const totalHours = 100;
  const totalLevels = 3;

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
          {displayedCertificates.map((cert, index) => (
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

        {/* See More / See Less Button */}
        {certificates.length > 6 && (
          <div className="certificate-toggle-container" style={{ textAlign: 'center', marginTop: '40px' }}>
            <button 
              onClick={() => setShowAll(!showAll)} 
              className="certificate-toggle-btn"
              style={{
                padding: '12px 28px',
                background: 'var(--primary-color, #0066ff)',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'background 0.3s ease'
              }}
            >
              {showAll ? 'See Less' : `See More (${certificates.length - 6} More)`}
            </button>
          </div>
        )}

        {/* Certificate Stats with Counter Animation */}
        <ScrollAnimation animation="fade-up" delay={600}>
          <div className="certificate-stats-pack">
            <div className="cert-stat-pack">
              <span className="cert-stat-number">
                <Counter end={totalCertificates} />+
              </span>
              <span className="cert-stat-label">Certifications</span>
            </div>
            <div className="cert-stat-divider-pack"></div>
            <div className="cert-stat-pack">
              <span className="cert-stat-number">
                <Counter end={totalPlatforms} />+
              </span>
              <span className="cert-stat-label">Platforms</span>
            </div>
            <div className="cert-stat-divider-pack"></div>
            <div className="cert-stat-pack">
              <span className="cert-stat-number">
                <Counter end={totalHours} />+
              </span>
              <span className="cert-stat-label">Hours of Learning</span>
            </div>
            <div className="cert-stat-divider-pack"></div>
            <div className="cert-stat-pack">
              <span className="cert-stat-number">
                <Counter end={totalLevels} />
              </span>
              <span className="cert-stat-label">Levels</span>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Certificate;