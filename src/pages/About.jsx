import React from "react";
import { skills } from "../constants";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container text-black dark:text-white transition-all duration-300">
      <h1 className="head-Text font-bold text-4xl my-10">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Mrunal
        </span>
      </h1>

      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        I am an Engineering Graduate, recently completed my B.Tech in
        Electronics and Telecommunication Engineering (ENTC) with Data Science
        Honours.
      </p>

      {/* Skills Section */}
      <div className="py-10">
        <h3 className="subhead-text text-3xl mb-6">My Skills</h3>

        <div className="mt-10 flex flex-wrap gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
              w-24 h-24 rounded-2xl relative overflow-hidden group 
              backdrop-blur-xl bg-white/20 dark:bg-white/10 
              border border-white/30 dark:border-white/10
              shadow-xl transition-all duration-300
              hover:scale-110 hover:shadow-[0_0_25px_rgba(0,195,255,0.6)]
            "
            >
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-12 h-12 object-contain transition-all duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-slate-200 dark:border-gray-700 my-10" />

      <CTA />

      {/* Contact Info */}
      <div
        className="mt-10 bg-gray-100 dark:bg-white/10 
      backdrop-blur-xl p-6 rounded-xl shadow-lg border border-white/20"
      >
        <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>

        <ul className="text-lg space-y-2">
          <li>
            <strong>Email:</strong> mrunalkapse863@gmail.com
          </li>
          <li>
            <strong>Phone:</strong> +91 8208084305
          </li>
          <li>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/mrunal-kapse-328b1326a/"
              className="text-blue-600 underline dark:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/mrunal-kapse-328b1326a/
            </a>
          </li>
          <li>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/Mrunal0806"
              className="text-blue-600 underline dark:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Mrunal0806
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
