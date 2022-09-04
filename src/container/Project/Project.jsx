import React from 'react';
import './Project.scss';
import{images} from '../../eximages';
import {motion} from 'framer-motion'

const Project = () => {
  return (
    <div className='container'>
        <div className="project_intro">
          <h1>
            My Main <span>Projects</span>
          </h1>
        </div>
        <div className='Box'>
            <h1>TicTacToe</h1>
            
            <div className='project_desc'>
            <motion.img  whileHover={{scale:1.1 ,originY:.7, originX:0}} src={images.ttt} alt="" />
             <p>TicTacToe game using Python’s default library which uses some basic structure to be able to create the board and rules for Two Players
                    to be able to play the game </p>  
            </div>
            <motion.div whileHover={{scale:1.2}} className='button_edit'>
              <a href="
              https://github.com/dwasd7
              ">
                <motion.button className ="button">
                  Github
                </motion.button>
              </a>
            </motion.div>
        </div>

        <div className='Box'>
            <h1>Calculator</h1>
            
            <div className='project_desc'>
            <motion.img  whileHover={{scale:1.1 ,originY:.7, originX:0}} src={images.calculator} alt="IMAGE NOT FOUND" />
             <p>Simple Calculator Using the HTML, JAVA SCRIPT and CSS </p>  
            </div>
            <motion.div whileHover={{scale:1.1}} className='button_edit'>
              <a href="
              https://github.com/dwasd7
              ">
                <motion.button className ="button">
                  Github
                </motion.button>
              </a>
            </motion.div>
        </div>
        <div className='Box'>
            <h1>Task Reminder</h1>
            
            <div className='project_desc'>
            <motion.img  whileHover={{scale:1.1 ,originY:.7, originX:0}} src={images.reminder} alt="IMAGE NOT FOUND" />
             <p>Task Reminder CURD app that implements different hooks from react to create a Task, read it, update new tasks, and delete a task </p>  
            </div>
            <motion.div whileHover={{scale:1.1}} className='button_edit'>
              <a href="
              https://github.com/dwasd7
              ">
                <motion.button className ="button">
                  Github
                </motion.button>
              </a>
            </motion.div>
        </div>
        <div className='Box'>
            <h1>My Portfolio</h1>
            
            <div className='project_desc'>
            <motion.img  whileHover={{scale:1.1 ,originY:.7, originX:0}} src={images.portfolio} alt="IMAGE NOT FOUND" />
             <p>My Portfolio Website using ReactJs and Css and other libraries like Framer-Motion for Animations </p>  
            </div>
            <motion.div whileHover={{scale:1.1}} className='button_edit'>
              <a href="
              https://github.com/dwasd7
              ">
                <motion.button className ="button">
                  Github
                </motion.button>
              </a>
            </motion.div>
        </div>

    </div>
  );
}

export default Project