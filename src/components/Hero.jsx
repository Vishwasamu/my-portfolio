import React from 'react';

const Hero = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl md:text-8xl font-bold text-cyan-400 mb-6 drop-shadow-lg">
        Vishwa Samuditha
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-10">
        Full Stack Software Engineer
      </p>
      
      <div className="flex gap-4">
        <button className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition duration-300">
          View CV
        </button>
        <button className="px-8 py-3 bg-cyan-400 text-black rounded-full hover:bg-cyan-300 transition duration-300">
          Contact Me
        </button>
      </div>
    </section>
  );
};

export default Hero;