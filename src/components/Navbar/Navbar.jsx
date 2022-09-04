import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import {HiMenuAlt4, HiX} from 'react-icons/hi';
import {motion} from 'framer-motion';
import{images} from '../../eximages';


import "./Navbar.scss";
const Navbar = () => {
  var navlist = ['home', 'projects', 'skills', 'about' ];
  const [toggle, setToggle] = useState(false)
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <motion.img 
        whileHover={{scale:1.2}}
        src={images.logo} 
        alt="logo" />
      </div>
      <ul className="navlist">
        {navlist.map((ele) => (
          <li className="app__flex p-text" key={`link-${ele}`}>
            <div />
            <a href={`#${ele}`}>{ele}</a>
          </li>
        ))}
      </ul>
      <div className='socials'> 
          <motion.div whileHover={{scale:1.2, originX:2}}>
            <SocialIcon 
            url='https://github.com/dwasd7?tab=repositories'
            target={'_blank'}
            />
          </motion.div>
          <motion.div whileHover={{scale:1.2,originX:-1}}>
            <SocialIcon 
            url='https://www.linkedin.com/in/diwas-dulal-703514215/'
            target={'_blank'}
            />
          </motion.div>
      </div>
      <div className="navbar_menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {navlist.map((ele) => (
                <li key={ele}>
                  <a href={`#${ele}`} onClick={() => setToggle(false)}>
                    {ele}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
      
    </nav>
  );
};


export default Navbar