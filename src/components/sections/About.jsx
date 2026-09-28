import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 flex flex-col items-center text-center">
      <h2 className="text-4xl font-bold text-cyan-400 mb-8">About Me</h2>
      
      <div className="glass-card max-w-2xl p-8 rounded-2xl border border-cyan-400/20 bg-white/5 backdrop-blur-lg">
        <p className="text-lg leading-relaxed text-gray-200">
          I am a dedicated <strong>Software Engineering undergraduate at ESOFT Metro Campus</strong> 
          with a passion for building robust digital systems and creating impactful visual content. 
          My background blends technical expertise in full-stack development with practical, 
          hands-on experience in business operations and digital strategy.
        </p>
      </div>
    </section>
  );
};

export default About;