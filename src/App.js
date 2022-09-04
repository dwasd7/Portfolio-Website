import React from 'react';
import {About,Header,Skills,Project} from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
        <Navbar/>
        <Header/>
        <Project/>
        <Skills/>
        <About/>

    </div>
  );
}

export default App