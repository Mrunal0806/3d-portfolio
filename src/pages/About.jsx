import React from 'react'
import { skills } from '../constants'
import CTA from '../components/CTA'

const About = () => {
  return (
   <sections className= "max-container">
    <h1 className='head-Text' style={{fontWeight:'bold', fontSize: 40, margin: 40}}>
      Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'> Mrunal</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 ' style={{fontSize: 20}}>
        <p>
          I am an Engineering Student in India, 
          currently pursuing my B.Tech in Electronics and Telecommunication Engineering (ENTC).
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text' style={{fontSize: 30}}>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12 '>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl'/>
              <div className='btn-font rounded-xl flex justify-center 
              items-center'>
                <img 
                src={skill.imageUrl}
                alt = {skill.name}
                className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className='border-slate-200'/>

      <CTA />
   </sections>
  )
}

export default About