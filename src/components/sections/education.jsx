import React, { useState, useEffect, useRef } from 'react';
import ScrollAnimation from '../ScrollAnimation';
import vijithaCentralLogo from '../../assets/education/vijitha-central-logo.png'; 
import esoftLogo from '../../assets/logo/esoftLogo.png';
import londonMetLogo from '../../assets/logo/lmuLogo.png';
import pearsonLogo from '../../assets/logo/pearsonLogo.png';

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

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "GCE Ordinary Level",
      institution: "Mr/Vijitha Central College, Dickwella",
      period: "2014 (Aug)",
      description: "Completed Ordinary Level education.",
      icon: "fa-graduation-cap",
      logo: vijithaCentralLogo, // Using the school logo
      achievements: [
        
      ]
    },
    {
      id: 2,
      degree: "GCE Advanced Level",
      institution: "Mr/Vijitha Central College, Dickwella",
      period: "2017 (Dec)",
      description: "Completed Advanced Level Exam in the Biology Science stream.",
      icon: "fa-graduation-cap",
      logo: vijithaCentralLogo, // Using the school logo
      achievements: [
        
      ]
    },
    {
      id: 3,
      degree: "National Certificate in Engineering Draughtsmanship",
      institution: "NVQ Level 4",
      period: "2021 - 2022",
      description: "Professional certification in engineering draughtsmanship and technical drawing.",
      icon: "fa-drafting-compass",
      logo: "📐",
      achievements: [
        "Technical Drawing Excellence",
        "Engineering Design Fundamentals",
        "NVQ Level 4 Certification"
      ]
    },
    {
      id: 4,
      degree: "Diploma in English",
      institution: "Esoft Metro Campus, Matara",
      period: "2022",
      description: "Completed English language diploma to enhance communication and professional skills.",
      icon: "fa-language",
      logo: esoftLogo,
      achievements: [
        "Advanced English Proficiency",
        "Business Communication Skills",
        "Professional Writing and Speaking"
      ]
    },
    {
      id: 5,
      degree: "Level 5 Pearson BTEC Higher National Diploma (HND)",
      institution: "Pearson (UK) - Esoft Metro Campus",
      period: "2023 (Jul) - 2025 (Jan)",
      description: "Higher National Diploma in Software Engineering with Pearson UK accreditation.",
      icon: "fa-code",
      logo: pearsonLogo,
      achievements: [
        "Full Stack Development",
        "Agile Methodologies",
        "Software Architecture Design",
        "Database Management Systems"
      ]
    },
    {
      id: 6,
      degree: "BEng (Hons) Software Engineering",
      institution: "London Metropolitan University",
      period: "2025 (Feb) - 2026 (Jan)",
      description: "Bachelor of Engineering with Honours in Software Engineering from London Metropolitan University.",
      icon: "fa-university",
      logo: londonMetLogo,
      achievements: [
        "Advanced Software Engineering",
        "Cloud Architecture",
        "System Design and Implementation",
        "Research and Development"
      ]
    }
  ];

  const totalQualifications = educationData.length;
  const totalInstitutions = new Set(educationData.map(e => e.institution)).size;
  const totalYears = 12;
  const totalDegrees = 2;

  return (
    <>
      <style>{`
        .timeline-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 98px;
          min-height: 98px;
        }

        .timeline-logo img {
          width: 98px;          
          height: 98px;          
          object-fit: contain;   
          display: block;
        }

        .timeline-logo span {
          font-size: 1.5rem;    
        }
      `}</style>

      <section id="education" className="section education-modern">
        <ScrollAnimation animation="fade-up">
          <div className="education-header">
            <span className="section-tag">Education</span>
            <h2>My Education Journey</h2>
            <p>Building a strong foundation in software engineering and technology</p>
          </div>

          <div className="timeline">
            {educationData.map((edu, index) => (
              <ScrollAnimation 
                key={edu.id} 
                animation="fade-up" 
                delay={100 + index * 100}
              >
                <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="timeline-badge">
                    <i className={`fas ${edu.icon}`}></i>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <div className="timeline-logo">
                        {edu.logo && (typeof edu.logo === 'string' && (edu.logo.startsWith('/') || edu.logo.startsWith('http') || edu.logo.endsWith('.png') || edu.logo.endsWith('.jpg') || edu.logo.endsWith('.svg'))) || typeof edu.logo !== 'string' ? (
                          <img 
                            src={edu.logo} 
                            alt={edu.degree} 
                          />
                        ) : (
                          <span>{edu.logo}</span>
                        )}
                      </div>
                      <div className="timeline-title">
                        <h3>{edu.degree}</h3>
                        <span className="institution">{edu.institution}</span>
                      </div>
                    </div>
                    <div className="timeline-period">
                      <i className="far fa-calendar-alt"></i>
                      <span>{edu.period}</span>
                    </div>
                    <p className="timeline-description">{edu.description}</p>
                    <div className="timeline-achievements">
                      {edu.achievements.map((achievement, idx) => (
                        <span key={idx} className="achievement-tag">
                          <i className="fas fa-check-circle"></i>
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation animation="fade-up" delay={400}>
            <div className="education-stats">
              <div className="stat-card">
                <span className="stat-number">
                  <Counter end={totalQualifications} />
                </span>
                <span className="stat-label">Qualifications</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">
                  <Counter end={totalInstitutions} />
                </span>
                <span className="stat-label">Institutions</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">
                  <Counter end={totalYears} />+
                </span>
                <span className="stat-label">Years of Study</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">
                  <Counter end={totalDegrees} />
                </span>
                <span className="stat-label">Degrees</span>
              </div>
            </div>
          </ScrollAnimation>
        </ScrollAnimation>
      </section>
    </>
  );
};

export default Education;