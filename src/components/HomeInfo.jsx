import React from 'react'
import { Link } from 'react-router-dom'
import { arrow }from '../assets_3d_portfolio/assets/icons'

const InfoBox = ({ text, link, btnText}) => (
  <div className="info-box ">
    <p className='font-medium sm:text-xl text-center'>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnText}
      <img src={arrow} className='w-4 h-4 object-contain' />
    </Link>
  </div>
)

const renderContent = {
  1 :(
    <h1 className='sm:xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>Hi, I am 
    <span className='font-semibold'> Mrunal ....!👋</span>
    <br/>
    I am a Engineering Student 😊 </h1>
  ),
  2 :(
   <InfoBox 
   text="Learning is my passion and I love to learn new things ❤️"
   link="/About"
   btnText="Know more"
   />
  ),
  3 :(
    <InfoBox 
   text="Led to many projects Curious lets go and see👉"
   link="/Projects"
   btnText="Know more"
   />
  ),
  4 :(
    <InfoBox 
   text="Need to get in touch? Reach out to me🙋‍♀️👉"
   link="/Contact"
   btnText="Know more"
   />
  ),
}


const HomeInfo = ({ CurrentStage}) => {
  return renderContent[CurrentStage] || null;
}

export default HomeInfo