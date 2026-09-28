import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import ScrollAnimation from './components/ScrollAnimation';
import Education from './components/sections/education';
import CustomCursor from './components/CustomCursor';
import Certificate from './components/sections/certificate';
import Experience from './components/sections/experience';
import Projects from './components/sections/projects';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [fadeScrollIndicator, setFadeScrollIndicator] = useState(false);
  const [heroImageVisible, setHeroImageVisible] = useState(true);
  const [aboutImageVisible, setAboutImageVisible] = useState(false);
  
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    education: useRef(null),
    experience: useRef(null),
    certificates: useRef(null),
    projects: useRef(null), 
    skills: useRef(null),
    services: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? scrollY / maxScroll : 0;
      setScrollProgress(progress);
      
      setScrolled(scrollY > 50);
      
      if (scrollY > window.innerHeight * 0.15) {
        setFadeScrollIndicator(true);
      } else {
        setFadeScrollIndicator(false);
      }
      
      const aboutElement = sectionRefs.about?.current;
      if (aboutElement) {
        const aboutRect = aboutElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (aboutRect.top < windowHeight * 0.6) {
          setHeroImageVisible(false);
          setAboutImageVisible(true);
        } else {
          setHeroImageVisible(true);
          setAboutImageVisible(false);
        }
      }
      
      const sections = ['home', 'about', 'education', 'experience', 'certificates', 'projects', 'skills', 'services', 'contact'];
      const scrollPosition = scrollY + 100;
      
      for (const section of sections) {
        const element = sectionRefs[section]?.current;
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = sectionRefs[sectionId]?.current;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const getSkillLogo = (skillName) => {
    const logoMap = {
      'React': '⚛️',
      'Next.js': '▲',
      'TypeScript': 'TS',
      'Tailwind CSS': '🌊',
      'HTML/CSS': '🖥️',
      'Node.js': '🟢',
      'Python': '🐍',
      'Java': '☕',
      'PHP': '🐘',
      'Express.js': '🚂',
      'MongoDB': '🍃',
      'MySQL': '🐬',
      'PostgreSQL': '🐘',
      'AWS': '☁️',
      'Docker': '🐳',
      'Git/GitHub': '🐙',
      'VS Code': '📝',
      'Figma': '🎨',
      'Jira': '📊',
      'Agile/Scrum': '🔄',
    };
    return logoMap[skillName] || '🔄';
  };

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
    { name: 'Redux', logo: '🔄' },
    { name: 'GraphQL', logo: '📡' },
    { name: 'Webpack', logo: '📦' },
    { name: 'Jest', logo: '🧪' },
    { name: 'Cypress', logo: '🎯' },
    { name: 'Sass', logo: '💅' },
    { name: 'REST APIs', logo: '🔗' },
    { name: 'Microservices', logo: '🧩' },
    { name: 'Kubernetes', logo: '⎈' },
    { name: 'Linux', logo: '🐧' },
    { name: 'Nginx', logo: '🔄' },
    { name: 'Redis', logo: '🔴' },
    { name: 'RabbitMQ', logo: '🐰' },
    { name: 'Firebase', logo: '🔥' },
    { name: 'Supabase', logo: '⚡' },
  ];

  return (
    <div id="root">
      <CustomCursor />
      
      <div className="tech-background">
        <div className="tech-grid"></div>
        <div className="glow-orb glow-orb-1"></div>
        <div className="glow-orb glow-orb-2"></div>
        <div className="glow-orb glow-orb-3"></div>
        <div className="tech-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${12 + Math.random() * 18}s`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`
            }} />
          ))}
        </div>
        <div className="tech-code-rain">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="code-line" style={{
              animationDelay: `${i * 1.5}s`
            }}>
              {`const ${['data', 'app', 'code', 'dev', 'tech', 'web', 'cloud', 'ai', 'ml', 'api', 'react', 'node', 'python', 'java', 'rust'][i]} = () => {};`}
            </div>
          ))}
        </div>
        <div className="circuit-line circuit-line-1"></div>
        <div className="circuit-line circuit-line-2"></div>
        <div className="circuit-line circuit-line-3"></div>
        <div className="circuit-line circuit-line-4"></div>
        <div className="circuit-line circuit-line-5"></div>
      </div>

      <nav className={`floating-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <span className="nav-logo" onClick={() => scrollToSection('home')}>
            VS
          </span>
          <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <a 
              href="#home" 
              className={activeSection === 'home' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            >
              Home
            </a>
            <a 
              href="#about" 
              className={activeSection === 'about' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
            >
              About
            </a>
            <a 
              href="#education" 
              className={activeSection === 'education' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}
            >
              Education
            </a>
            <a 
              href="#experience" 
              className={activeSection === 'experience' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}
            >
              Experience
            </a>
            <a 
              href="#certificates" 
              className={activeSection === 'certificates' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('certificates'); }}
            >
              Certificates
            </a>
            <a 
              href="#projects" 
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className={activeSection === 'skills' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
            >
              Skills
            </a>
            <a 
              href="#services" 
              className={activeSection === 'services' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
            >
              Services
            </a>
            <a 
              href="#contact" 
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            >
              Contact
            </a>
          </div>
          <div className="nav-right">
            <button className="nav-cta" onClick={() => scrollToSection('contact')}>
              Hire Me
            </button>
            <button className="nav-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>

      <section ref={sectionRefs.home} className="hero" id="home">
        <div className="hero-background">
          <div className="hero-bg-image"></div>
          <div className="hero-bg-overlay"></div>
        </div>
        
        <div className="hero-content">
          <ScrollAnimation animation="fade-up" delay={100}>
            <span className="hero-badge">
              <span className="pulse-dot"></span>
              Available for work
              <span className="badge-code">&lt;/&gt;</span>
            </span>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={200}>
            <h1 className="hero-title">
              Vishwa <span className="gradient-text">Samuditha</span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={300}>
            <p className="hero-subtitle">
              Full Stack Software Engineer
            </p>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={400}>
            <div className="hero-actions">
              <button className="btn-primary" onClick={() => scrollToSection('contact')}>
                <i className="fas fa-paper-plane"></i> Let's Talk
              </button>
              <button className="btn-secondary" onClick={() => window.open('#', '_blank')}>
                <i className="fas fa-file-pdf"></i> View CV
              </button>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={500}>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Projects Done</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>
          </ScrollAnimation>
        </div>
        
        <div className={`hero-profile-container ${!heroImageVisible ? 'hero-profile-fade-out' : ''}`}>
          <div className="hero-profile-wrapper">
            <img 
              src="/assets/profile.png"
              alt="Vishwa Samuditha"
              className="hero-profile-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
                const parent = e.target.parentElement;
                const fallback = document.createElement('div');
                fallback.className = 'hero-profile-fallback';
                fallback.innerHTML = '<i class="fas fa-user-circle"></i>';
                parent.appendChild(fallback);
              }}
            />
            <div className="hero-profile-glow"></div>
            <div className="hero-profile-ring"></div>
            <div className="profile-dots">
              <span className="dot dot-1"></span>
              <span className="dot dot-2"></span>
              <span className="dot dot-3"></span>
              <span className="dot dot-4"></span>
              <span className="dot dot-5"></span>
              <span className="dot dot-6"></span>
            </div>
          </div>
        </div>
        
        <div className={`scroll-indicator ${fadeScrollIndicator ? 'fade-out' : ''}`}>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span>Scroll to explore</span>
        </div>
        
        <div className="hero-particles">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="hero-particle"></div>
          ))}
        </div>
      </section>

      <section ref={sectionRefs.about} id="about" className="section about-modern">
        <div className="about-background">
          <div className="about-bg-image"></div>
          <div className="about-bg-overlay"></div>
        </div>
        
        <ScrollAnimation animation="fade-up">
          <div className="about-container">
            <div className={`about-image ${aboutImageVisible ? 'about-image-visible' : ''}`}>
              <div className="image-wrapper">
                <img 
                  src="/assets/profile.png"
                  alt="Vishwa Samuditha - Full Stack Engineer"
                  className="profile-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    const parent = e.target.parentElement;
                    const placeholder = document.createElement('div');
                    placeholder.className = 'image-placeholder';
                    placeholder.innerHTML = '<i class="fas fa-user-circle"></i>';
                    parent.appendChild(placeholder);
                  }}
                />
                <div className="image-glow"></div>
                <div className="image-overlay"></div>
              </div>
              <div className="experience-badge">
                <i className="fas fa-code"></i>
                <span>3+ Years</span>
              </div>
            </div>
            <div className="about-content">
              <span className="section-tag">About Me</span>
              <h2>Building Digital Excellence</h2>
              <p>
                I am a dedicated Software Engineering undergraduate at ESOFT Metro Campus 
                with a passion for building robust digital systems and creating impactful 
                visual content. My background blends technical expertise in full-stack 
                development with practical, hands-on experience in business operations 
                and digital strategy.
              </p>
              <div className="tech-stack">
                <span className="tech-item">React</span>
                <span className="tech-item">Node.js</span>
                <span className="tech-item">TypeScript</span>
                <span className="tech-item">MongoDB</span>
                <span className="tech-item">AWS</span>
                <span className="tech-item">Docker</span>
              </div>
              <div className="about-stats">
                <div>
                  <span className="stat-number">3+</span>
                  <span>Years Coding</span>
                </div>
                <div>
                  <span className="stat-number">15</span>
                  <span>Projects</span>
                </div>
                <div>
                  <span className="stat-number">10+</span>
                  <span>Happy Clients</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      <div ref={sectionRefs.education}>
        <Education />
      </div>

      <div ref={sectionRefs.experience}>
        <Experience />
      </div>

      <div ref={sectionRefs.certificates}>
        <Certificate />
      </div>

      <div ref={sectionRefs.projects}>
        <Projects />
      </div>

      <section ref={sectionRefs.skills} id="skills" className="section skills-modern">
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
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation animation="fade-up" delay={500}>
            <div className="skills-tags">
              <span className="section-tag">Also Experienced In</span>
              <div className="tags-cloud">
                {additionalSkills.map((skill, index) => (
                  <span key={index} className="tag">
                    <span className="tag-logo">{skill.logo}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </ScrollAnimation>
      </section>

      <section ref={sectionRefs.services} id="services" className="section services-modern">
        <ScrollAnimation animation="fade-up">
          <div className="services-header">
            <span className="section-tag">What I Do</span>
            <h2>My Services</h2>
            <p>Transforming ideas into digital reality with modern solutions</p>
          </div>
          <div className="services-grid-modern">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3>Full-stack dev</h3>
              <p>End-to-end development using modern frameworks and best practices</p>
              <span className="service-arrow">→</span>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-paint-brush"></i>
              </div>
              <h3>UI/UX design</h3>
              <p>Creating intuitive and beautiful user experiences that delight users</p>
              <span className="service-arrow">→</span>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Digital strategy</h3>
              <p>Strategic planning to maximize your digital presence and growth</p>
              <span className="service-arrow">→</span>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-database"></i>
              </div>
              <h3>Database design</h3>
              <p>Optimized database architecture for scalability and performance</p>
              <span className="service-arrow">→</span>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-cloud-upload-alt"></i>
              </div>
              <h3>Cloud migration</h3>
              <p>Seamless cloud migration and modern infrastructure setup</p>
              <span className="service-arrow">→</span>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      <section ref={sectionRefs.contact} id="contact" className="section contact-modern">
        <ScrollAnimation animation="fade-up">
          <div className="contact-container">
            <div className="contact-info">
              <span className="section-tag">Contact</span>
              <h2>Let's Work Together</h2>
              <p>Have a project in mind? Let's discuss how we can bring it to life.</p>
              <div className="contact-details">
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:vishwasamuditha8@gmail.com">vishwasamuditha8@gmail.com</a>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone-alt"></i>
                  <div>
                    <h4>Phone</h4>
                    <a href="tel:+94705170058">+94 70 517 00 58</a>
                  </div>
                </div> 
              </div>
              <div className="social-links-modern">
                <a href="https://github.com/Vishwasamu" className="social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                <a href="https://lk.linkedin.com/in/vishwa-samuditha" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="social-link" aria-label="X"><i className="fab fa-x-twitter"></i></a>
                <a href="https://www.instagram.com/vishu_samud98/" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            <div className="contact-form">
              <form onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for your message! I will get back to you soon.');
                e.target.reset();
              }}>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea rows="4" placeholder="Your Message" required />
                </div>
                <button type="submit" className="btn-primary submit-btn">
                  <i className="fas fa-paper-plane"></i> Send Message
                </button>
              </form>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      <footer className="footer-modern">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">Vishwa Samuditha</span>
            <p>© 2026 Vishwa Samuditha · Full Stack Engineer</p>
          </div>
          <div className="footer-links">
            <a href="#" onClick={(e) => { e.preventDefault(); alert('Privacy Policy page coming soon!'); }}>Privacy Policy</a>
            <a href="#" onClick={(e) => { e.preventDefault(); alert('Terms of Service page coming soon!'); }}>Terms of Service</a>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Sitemap</a>
          </div>
          <div className="footer-social">
            <a href="https://github.com/Vishwasamu" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://lk.linkedin.com/in/vishwa-samuditha" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="X" target="_blank" rel="noopener noreferrer"><i className="fab fa-x-twitter"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;