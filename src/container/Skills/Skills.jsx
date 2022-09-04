import React from 'react'
import './Skills.scss';
import{images} from '../../eximages';
import {motion} from 'framer-motion';


const Skills = () => {
  return (
    <div className="skills_container">
      <div className = "skills_Intro">
        <h1>
          MY <span>SKILLS</span> SETS
        </h1>
      </div>
    <div className="row">
      <div className="column">
      <motion.img  whileHover={{scale:1.1 ,originY:.7, originX:0}} src={images.javascript} alt=""  />
      </div>
      <div className="column">
      <motion.img  whileHover={{scale:1.1 ,originY:.7, originX:0}} src={images.git} alt=""  />
      </div>
      <div className="column">
      <motion.img  whileHover={{scale:1.1 ,originY:.7, originX:0}} src={images.react} alt="" />
      </div>
    </div>
    
    <div className="row">
      <div className="column">
      <motion.img  whileHover={{scale:1.1 ,originY:.7, originX:0}} src={images.python} alt=""  />
      </div>
      <div className="column">
      <motion.img  whileHover={{scale:1.1 ,originY:.7, originX:0}} src={images.cpp} alt=""  />
      </div>
      <div className="column">
      <motion.img  whileHover={{scale:1.1 ,originY:.7, originX:0}} src={images.node} alt="" />
      </div>
    </div>
    <div className="row">
      <div className="column">
      <motion.img  whileHover={{scale:1.1 ,originY:.7, originX:0}} src={images.sass} alt=""  />
      </div>
      <div className="column">
      <motion.img  whileHover={{scale:1.1 ,originY:.7, originX:0}} src={images.api} alt=""  />
      </div>
      <div className="column">
      <motion.img  whileHover={{scale:1.1 ,originY:.7, originX:0}} src={images.redux} alt="" />
      </div>
    </div>

    </div>
  )
}

export default Skills