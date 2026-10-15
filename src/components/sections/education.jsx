import React from 'react';
import ScrollAnimation from '../ScrollAnimation';
import esuLogo from '../../assets/logo/esu Logo.png';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "GCE Ordinary Level",
      institution: "Mr/Vijitha Central College, Dickwella",
      period: "2014 (Aug)",
      description: "Completed Ordinary Level education with a strong foundation in mathematics and sciences.",
      icon: "fa-graduation-cap",
      logoType: "emoji",
      logo: "📚",
      achievements: [
        "Passed with Distinction in Mathematics",
        "Excellence in Science Subjects",
        "Top 10% of the batch"
      ]
    },
    {
      id: 2,
      degree: "GCE Advanced Level",
      institution: "Mr/Vijitha Central College, Dickwella",
      period: "2017 (Dec)",
      description: "Completed Advanced Level education specializing in the technology stream.",
      icon: "fa-graduation-cap",
      logoType: "emoji",
      logo: "🎓",
      achievements: [
        "Specialized in Mathematics, Physics, and ICT",
        "Advanced Level Certification",
        "Foundation for higher education"
      ]
    },
    {
      id: 3,
      degree: "National Certificate in Engineering Draughtsmanship",
      institution: "NVQ Level 4",
      period: "2021 - 2022",
      description: "Professional certification in engineering draughtsmanship and technical drawing.",
      icon: "fa-drafting-compass",
      logoType: "emoji",
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
      logoType: "image",
      logo: esuLogo,
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
      logoType: "image",
      logo: esuLogo,
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
      logoType: "image",
      logo: esuLogo,
      achievements: [
        "First Class Honours",
        "Cloud Architecture",
        "System Design and Implementation",
        "Research and Development"
      ]
    }
  ];

  return (
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
                      {edu.logoType === 'image' ? (
                        <img src={edu.logo} alt={edu.institution} className="institution-logo-img" />
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

        {/* Quick Stats */}
        <ScrollAnimation animation="fade-up" delay={400}>
          <div className="education-stats">
            <div className="stat-card">
              <span className="stat-number">6</span>
              <span className="stat-label">Qualifications</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">4</span>
              <span className="stat-label">Institutions</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">12+</span>
              <span className="stat-label">Years of Study</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">2</span>
              <span className="stat-label">Degrees</span>
            </div>
          </div>
        </ScrollAnimation>
      </ScrollAnimation>
    </section>
  );
};

export default Education;