import React from 'react';
import { skills } from '../constants';
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-Text" style={{ fontWeight: 'bold', fontSize: 40, margin: 40 }}>
        Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Mrunal</span>
      </h1>

      <div className="mt-5 flex flex-col gap-3" style={{ fontSize: 20 }}>
        <p>
          I am an Engineering Student in India, currently pursuing my B.Tech in
          Electronics and Telecommunication Engineering (ENTC).
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text" style={{ fontSize: 30 }}>My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill, index) => (
            <div key={index} className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-slate-200 my-8" />

      <CTA />

      {/* 📞 Contact Info Section */}
      <div className="mt-10 bg-gray-100 p-6 rounded-xl shadow-lg">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Contact Information</h3>
        <ul className="text-lg text-gray-700 space-y-2">
          <li><strong>Email:</strong> mrunalkapse863@gmail.com</li>
          <li><strong>Phone:</strong> +91 8208084305</li>
          <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/mrunal-kapse-328b1326a/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/mrunal-kapse-328b1326a/</a></li>
          <li><strong>GitHub:</strong> <a href="https://github.com/Mrunal0806" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">github.com/Mrunal0806</a></li>
        </ul>
      </div>
    </section>
  );
};

export default About;
