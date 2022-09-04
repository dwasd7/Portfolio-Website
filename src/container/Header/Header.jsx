import React from 'react'
import {motion} from 'framer-motion'
import{images} from '../../eximages';


import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="header_title"
    >
      <div className="header_introduction">
        <div className="my_greet app__flex">
          <motion.span whileHover={{scale:1.4, originY:1, originX:1}}  >👊</motion.span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Diwas</h1>
          </div>
        </div>

        <div className="my_info app__flex">
          <p className="p-text">Web Developer</p>
          <p className="p-text">CS Student</p>
        </div>
        <div className='resume'>
            <a href="https://drive.google.com/file/d/1EKvoj_G8zatxiorjJ9jPKI9wu6U0pe2r/view">
              <motion.p whileHover={{scale:1.4}}>My Resume</motion.p>
            </a>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="header_profile"
    >
      <motion.img src={images.profile} alt="profile_bg" />
      
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="header_skills"
    >
      {[images.react, images.cpp, images.python].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <motion.img
            whileHover={{scale:1.3}}
           src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default Header;
