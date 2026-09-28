import React from 'react';
import ScrollAnimation from './ScrollAnimation';

// SVG Logo Components
const ReactLogo = () => (
  <svg viewBox="0 0 64 64" width="28" height="28">
    <circle cx="32" cy="32" r="6" fill="#61DAFB"/>
    <g stroke="#61DAFB" strokeWidth="2.5" fill="none">
      <ellipse rx="24" ry="8" transform="rotate(30 32 32)"/>
      <ellipse rx="24" ry="8" transform="rotate(90 32 32)"/>
      <ellipse rx="24" ry="8" transform="rotate(150 32 32)"/>
    </g>
  </svg>
);

const NodeLogo = () => (
  <svg viewBox="0 0 64 64" width="28" height="28">
    <circle cx="32" cy="32" r="28" fill="#339933"/>
    <path d="M32 12 L32 52 L52 42 L52 22 Z" fill="#fff" opacity="0.2"/>
    <text x="32" y="38" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold">N</text>
  </svg>
);

const PythonLogo = () => (
  <svg viewBox="0 0 64 64" width="28" height="28">
    <circle cx="32" cy="32" r="28" fill="#3776AB"/>
    <text x="32" y="40" textAnchor="middle" fill="#FFD43B" fontSize="22" fontWeight="bold">Py</text>
  </svg>
);

const JavaLogo = () => (
  <svg viewBox="0 0 64 64" width="28" height="28">
    <circle cx="32" cy="32" r="28" fill="#007396"/>
    <text x="32" y="40" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="bold">J</text>
  </svg>
);

const PHPLogo = () => (
  <svg viewBox="0 0 64 64" width="28" height="28">
    <circle cx="32" cy="32" r="28" fill="#777BB4"/>
    <text x="32" y="40" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="bold">PHP</text>
  </svg>
);

const MongoDBLogo = () => (
  <svg viewBox="0 0 64 64" width="28" height="28">
    <circle cx="32" cy="32" r="28" fill="#47A248"/>
    <text x="32" y="40" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">Mongo</text>
  </svg>
);

const MySQLLogo = () => (
  <svg viewBox="0 0 64 64" width="28" height="28">
    <circle cx="32" cy="32" r="28" fill="#4479A1"/>
    <text x="32" y="40" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">SQL</text>
  </svg>
);

const AWSDLogo = () => (
  <svg viewBox="0 0 64 64" width="28" height="28">
    <circle cx="32" cy="32" r="28" fill="#FF9900"/>
    <text x="32" y="40" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">AWS</text>
  </svg>
);

const DockerLogo = () => (
  <svg viewBox="0 0 64 64" width="28" height="28">
    <circle cx="32" cy="32" r="28" fill="#2496ED"/>
    <text x="32" y="40" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">Dkr</text>
  </svg>
);

const GitLogo = () => (
  <svg viewBox="0 0 64 64" width="28" height="28">
    <circle cx="32" cy="32" r="28" fill="#F05032"/>
    <text x="32" y="40" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">Git</text>
  </svg>
);

const VSCodeLogo = () => (
  <svg viewBox="0 0 64 64" width="28" height="28">
    <circle cx="32" cy="32" r="28" fill="#007ACC"/>
    <text x="32" y="40" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">VS</text>
  </svg>
);

const FigmaLogo = () => (
  <svg viewBox="0 0 64 64" width="28" height="28">
    <circle cx="32" cy="32" r="28" fill="#F24E1E"/>
    <text x="32" y="40" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">F</text>
  </svg>
);

const TypeScriptLogo = () => (
  <svg viewBox="0 0 64 64" width="28" height="28">
    <circle cx="32" cy="32" r="28" fill="#3178C6"/>
    <text x="32" y="40" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">TS</text>
  </svg>
);

// Map skill names to SVG logos
const getSkillLogo = (skillName) => {
  const logoMap = {
    'React': <ReactLogo />,
    'Next.js': <span style={{fontSize: '24px', fontWeight: 'bold', color: '#000'}}>▲</span>,
    'TypeScript': <TypeScriptLogo />,
    'Tailwind CSS': <span style={{fontSize: '22px'}}>🌊</span>,
    'HTML/CSS': <span style={{fontSize: '22px'}}>🖥️</span>,
    'Node.js': <NodeLogo />,
    'Python': <PythonLogo />,
    'Java': <JavaLogo />,
    'PHP': <PHPLogo />,
    'Express.js': <span style={{fontSize: '22px'}}>🚂</span>,
    'MongoDB': <MongoDBLogo />,
    'MySQL': <MySQLLogo />,
    'PostgreSQL': <span style={{fontSize: '22px'}}>🐘</span>,
    'AWS': <AWSDLogo />,
    'Docker': <DockerLogo />,
    'Git/GitHub': <GitLogo />,
    'VS Code': <VSCodeLogo />,
    'Figma': <FigmaLogo />,
    'Jira': <span style={{fontSize: '22px'}}>📊</span>,
    'Agile/Scrum': <span style={{fontSize: '22px'}}>🔄</span>,
  };
  return logoMap[skillName] || <span style={{fontSize: '20px'}}>🔄</span>;
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: 'fa-laptop-code',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'HTML/CSS', level: 95 },
      ]
    },
    {
      title: 'Backend Development',
      icon: 'fa-server',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'PHP', level: 70 },
        { name: 'Express.js', level: 85 },
      ]
    },
    {
      title: 'Database & Cloud',
      icon: 'fa-database',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Docker', level: 75 },
      ]
    },
    {
      title: 'Tools & Others',
      icon: 'fa-tools',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 80 },
        { name: 'Jira', level: 75 },
        { name: 'Agile/Scrum', level: 85 },
      ]
    }
  ];

  const additionalSkills = [
    'Redux', 'GraphQL', 'Webpack', 'Jest', 'Cypress',
    'Sass', 'REST APIs', 'Microservices', 'Kubernetes', 'Linux',
    'Nginx', 'Redis', 'RabbitMQ', 'Firebase', 'Supabase'
  ];

  return (
    <section id="skills" className="section skills-modern">
      <ScrollAnimation animation="fade-up">
        <div className="skills-header">
          <span className="section-tag">My Skills</span>
          <h2>Technical Expertise</h2>
          <p>Technologies and tools I work with to build amazing digital solutions</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <ScrollAnimation key={index} animation="fade-up" delay={100 + index * 100}>
              <div className="skill-category">
                <div className="skill-category-header">
                  <div className="skill-category-icon">
                    <i className={`fas ${category.icon}`}></i>
                  </div>
                  <h3>{category.title}</h3>
                </div>
                <div className="skill-list">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">
                          <span className="skill-logo">{getSkillLogo(skill.name)}</span>
                          {skill.name}
                        </span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-bar-fill" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Additional Skills - Quick Tags */}
        <ScrollAnimation animation="fade-up" delay={500}>
          <div className="skills-tags">
            <span className="section-tag">Also Experienced In</span>
            <div className="tags-cloud">
              {additionalSkills.map((skill, index) => (
                <span key={index} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </ScrollAnimation>
    </section>
  );
};

export default Skills;