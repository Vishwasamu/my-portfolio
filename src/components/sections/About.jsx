import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 flex flex-col items-center text-center">
      <h2 className="text-4xl font-bold text-cyan-400 mb-8">About Me</h2>
      
      <div className="glass-card max-w-2xl p-8 rounded-2xl border border-cyan-400/20 bg-white/5 backdrop-blur-lg">
  <p className="text-lg leading-relaxed text-gray-200">
    I am a First Class <strong>Software Engineer</strong> specialized in crafting high-performance mobile applications and full-stack web platforms. Driven by innovation and design precision, I blend core engineering with digital media production and real-world operational strategy to build digital products that make an impact.
  </p>

      </div>
    </section>
  );
};

export default About;