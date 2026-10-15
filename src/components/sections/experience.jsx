// src/components/sections/experience.jsx
import React, { useState, useEffect, useRef } from 'react';
import ScrollAnimation from '../ScrollAnimation';
import csslLogo from '../../assets/logo/csslLogo.png'; 

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

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Assistant Secretary in Events',
      company: 'Computer Society of Sri Lanka (CSSL) – ESU Gen Z Chapter',
      period: 'Nov 2025 - Apr 2026',
      location: 'Sri Lanka',
      icon: 'fa-users',
      logo: csslLogo, 
      color: '#0066ff',
      description: 'Served as Assistant Secretary in Events, driving national-level ICT youth initiatives, managing event coordination, and fostering professional student chapters.',
      achievements: [
        'Coordinated national-level tech events and workshops',
        'Managed communications, documentation, and society records',
        'Demonstrated strong leadership and event planning skills',
        'Collaborated with industry professionals and student bodies'
      ],
      technologies: ['Leadership', 'Event Management', 'Public Relations', 'Team Coordination', 'Administration']
    },
    {
      id: 2,
      title: 'Trainee Draughtsperson',
      company: "District Engineer's Building Office, Matara",
      period: 'May 2022 - Nov 2022',
      location: 'Matara, Sri Lanka',
      icon: 'fa-drafting-compass',
      logo: null, 
      color: '#ea4335',
      description: 'Gained hands-on professional experience in draughting, technical drawing, and structural design support.',
      achievements: [
        'Assisted in creating accurate technical drawings',
        'Wrote clear, detailed project documentation',
        'Participated in team coordination and engineering meetings',
        'Learned strict industry standards and safety practices',
        'Conducted site visits and inspections'
      ],
      technologies: ['AutoCAD', 'SketchUp', 'Revit', 'Microsoft Office', 'Git']
    }
  ];

  // Dynamic values calculation for stats
  const totalExperiences = experiences.length;
  const totalProjects = 25;
  const totalClients = 15;
  const totalTechs = 10;

  return (
    <>
      {/* Equal Sized Box for both Logos and Icons */}
      <style>{`
        .experience-icon {
          width: 80px !important;
          height: 80px !important;
          min-width: 80px !important;
          min-height: 80px !important;
          border-radius: 16px;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          flex-shrink: 0;
          padding: 0 !important;
        }

        .experience-logo-box {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
        }

        .experience-logo-box img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        .experience-icon i {
          font-size: 2rem;
        }

        @media screen and (max-width: 768px) {
          .experience-icon {
            width: 65px !important;
            height: 65px !important;
            min-width: 65px !important;
            min-height: 65px !important;
            border-radius: 12px;
          }

          .experience-logo-box {
            padding: 8px;
          }

          .experience-icon i {
            font-size: 1.6rem;
          }
        }
      `}</style>

      <section className="experience-section" id="experience">
        <div className="experience-container">
          <ScrollAnimation animation="fade-up">
            <div className="experience-header">
              <span className="section-tag">Experience</span>
              <h2>Professional Journey</h2>
              <p>My career path, leadership roles, and professional experience</p>
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
                  {/* Display Logo if exists, otherwise display FontAwesome Icon */}
                  <div className="experience-icon" style={{ background: `${exp.color}15` }}>
                    {exp.logo ? (
                      <div className="experience-logo-box">
                        <img src={exp.logo} alt={exp.company} />
                      </div>
                    ) : (
                      <i className={`fas ${exp.icon}`} style={{ color: exp.color }}></i>
                    )}
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

          {/* Experience Stats with Counter Animation */}
          <ScrollAnimation animation="fade-up" delay={500}>
            <div className="experience-stats">
              <div className="exp-stat">
                <span className="exp-stat-number">
                  <Counter end={totalExperiences} />
                </span>
                <span className="exp-stat-label">Roles & Positions</span>
              </div>
              <div className="exp-stat-divider"></div>
              <div className="exp-stat">
                <span className="exp-stat-number">
                  <Counter end={totalProjects} />+
                </span>
                <span className="exp-stat-label">Projects</span>
              </div>
              <div className="exp-stat-divider"></div>
              <div className="exp-stat">
                <span className="exp-stat-number">
                  <Counter end={totalClients} />+
                </span>
                <span className="exp-stat-label">Happy Clients</span>
              </div>
              <div className="exp-stat-divider"></div>
              <div className="exp-stat">
                <span className="exp-stat-number">
                  <Counter end={totalTechs} />+
                </span>
                <span className="exp-stat-label">Technologies</span>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
};

export default Experience;