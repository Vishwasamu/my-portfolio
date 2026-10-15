import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const DEV = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

// --- Local fallbacks (for logos that don't exist on the Devicon CDN) ---
const Svg = ({ children }) => (
  <svg viewBox="0 0 128 128" width="44" height="44">{children}</svg>
);

const PascalLogo = () => (
  <Svg>
    <path d="M64 12C32 12 12 32 12 64s20 52 52 52 52-20 52-52-20-52-52-52zm-12 76V40h24c11 0 18 6 18 18s-7 18-18 18H64v22H52zm12-34h10c4 0 7-2 7-7s-3-7-7-7H64v14z" fill="#E31C25" />
  </Svg>
);

const NoSQLLogo = () => (
  <Svg>
    <rect x="12" y="12" width="104" height="104" fill="#5B6CF0" />
    <ellipse cx="64" cy="38" rx="28" ry="10" fill="none" stroke="#fff" strokeWidth="5" />
    <path d="M36 38v50c0 6 12 12 28 12s28-6 28-12V38M36 63c0 6 12 12 28 12s28-6 28-12" fill="none" stroke="#fff" strokeWidth="5" />
  </Svg>
);

const ZustandLogo = () => (
  <Svg>
    <circle cx="64" cy="64" r="12" fill="#7C5CFF" />
    <g stroke="#7C5CFF" strokeWidth="5" fill="none">
      <ellipse rx="50" ry="18" cx="64" cy="64" />
      <ellipse rx="50" ry="18" cx="64" cy="64" transform="rotate(60 64 64)" />
      <ellipse rx="50" ry="18" cx="64" cy="64" transform="rotate(120 64 64)" />
    </g>
  </Svg>
);

const DaisyUILogo = () => (
  <Svg>
    <circle cx="64" cy="64" r="48" fill="none" stroke="#570DF8" strokeWidth="6" strokeDasharray="14 6" />
    <circle cx="64" cy="64" r="34" fill="none" stroke="#570DF8" strokeWidth="5" />
  </Svg>
);

const ShadcnUILogo = () => (
  <Svg>
    <line x1="30" y1="104" x2="104" y2="30" stroke="#fff" strokeWidth="9" strokeLinecap="round" />
    <line x1="52" y1="112" x2="112" y2="52" stroke="#fff" strokeWidth="9" strokeLinecap="round" />
  </Svg>
);

const RadixUILogo = () => (
  <Svg>
    <rect x="30" y="20" width="26" height="26" fill="#fff" />
    <circle cx="86" cy="33" r="13" fill="#fff" />
    <rect x="30" y="56" width="26" height="52" fill="#fff" />
    <path d="M62 108V56h26l-26 52z" fill="#fff" opacity="0.001" />
  </Svg>
);

const AspNetLogo = () => (
  <Svg>
    <path d="M10 82c14-30 40-44 70-30-18-2-30 8-34 34-12-8-24-8-36-4z" fill="#1E88E5" />
    <path d="M52 94c8-34 26-46 66-38-24 0-36 12-40 38-8-4-16-4-26 0z" fill="#1565C0" />
  </Svg>
);

// invert: true => black logos get flipped to white so they show on the dark card
const skillItems = [
  { name: 'Python', icon: `${DEV}/python/python-original.svg` },
  { name: 'C#', icon: `${DEV}/csharp/csharp-original.svg` },
  { name: 'Java', icon: `${DEV}/java/java-original.svg` },
  { name: 'JavaScript', icon: `${DEV}/javascript/javascript-original.svg` },
  { name: 'TypeScript', icon: `${DEV}/typescript/typescript-original.svg` },
  { name: 'Pascal', logo: <PascalLogo /> },
  { name: 'PHP', icon: `${DEV}/php/php-original.svg` },
  { name: 'SQL', icon: `${DEV}/azuresqldatabase/azuresqldatabase-original.svg` },

  { name: 'NoSQL', logo: <NoSQLLogo /> },
  { name: 'HTML', icon: `${DEV}/html5/html5-original.svg` },
  { name: 'CSS3', icon: `${DEV}/css3/css3-original.svg` },
  { name: 'Three.js', icon: `${DEV}/threejs/threejs-original.svg`, invert: true },
  { name: 'React', icon: `${DEV}/react/react-original.svg` },
  { name: 'Next.js', icon: `${DEV}/nextjs/nextjs-original.svg`, invert: true },
  { name: 'Redux', icon: `${DEV}/redux/redux-original.svg` },
  { name: 'Zustand', logo: <ZustandLogo /> },

  { name: 'Vite', icon: `${DEV}/vitejs/vitejs-original.svg` },
  { name: 'Tailwind CSS', icon: `${DEV}/tailwindcss/tailwindcss-original.svg` },
  { name: 'Bootstrap', icon: `${DEV}/bootstrap/bootstrap-original.svg` },
  { name: 'Daisy UI', logo: <DaisyUILogo /> },
  { name: 'Shadcn UI', logo: <ShadcnUILogo /> },
  { name: 'Radix UI', logo: <RadixUILogo /> },
  { name: 'Node.js', icon: `${DEV}/nodejs/nodejs-original.svg` },
  { name: 'Express.js', icon: `${DEV}/express/express-original.svg`, invert: true },

  { name: 'ASP.NET', logo: <AspNetLogo /> },
  { name: '.NET', icon: `${DEV}/dotnetcore/dotnetcore-original.svg` },
  { name: 'Flask', icon: `${DEV}/flask/flask-original.svg`, invert: true },
  { name: 'Socket.io', icon: `${DEV}/socketio/socketio-original.svg`, invert: true },
  { name: 'MERN Stack', icon: `${DEV}/react/react-original.svg` },
  { name: 'SQLserver', icon: `${DEV}/microsoftsqlserver/microsoftsqlserver-plain.svg` },
  { name: 'MySQL', icon: `${DEV}/mysql/mysql-original.svg` },
  { name: 'MongoDB', icon: `${DEV}/mongodb/mongodb-original.svg` },
];

const SkillLogo = ({ skill }) => {
  if (skill.logo) return skill.logo;
  return (
    <img
      src={skill.icon}
      alt={skill.name}
      width="44"
      height="44"
      loading="lazy"
      style={{
        objectFit: 'contain',
        filter: skill.invert ? 'invert(1)' : 'none',
      }}
    />
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="section skills-modern"
      style={{ background: '#000000', padding: '60px 20px', color: '#FFFFFF' }}
    >
      <ScrollAnimation animation="fade-up">
        <div className="skills-header" style={{ marginBottom: '40px' }}>
          <span
            className="section-tag"
            style={{ color: '#00E5FF', textTransform: 'uppercase', fontSize: '14px', letterSpacing: '2px', fontWeight: 'bold' }}
          >
            My Tech Stack
          </span>
          <h2 style={{ fontSize: '42px', fontWeight: '800', marginTop: '10px', letterSpacing: '1px' }}>
            MY <span style={{ color: '#00E5FF' }}>SKILLS</span>
          </h2>
          <div style={{ width: '60px', height: '4px', background: '#00E5FF', marginTop: '10px' }}></div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
            gap: '20px',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {skillItems.map((skill) => (
            <div
              key={skill.name}
              style={{
                background: '#0d0d0d',
                border: '1px solid #222222',
                borderRadius: '16px',
                padding: '24px 12px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '14px',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#00E5FF';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#222222';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '48px' }}>
                <SkillLogo skill={skill} />
              </div>
              <span style={{ fontSize: '14px', fontWeight: '500', color: '#E0E0E0', textAlign: 'center' }}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Skills;