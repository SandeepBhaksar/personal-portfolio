import React from 'react';
import './App.css';
import Home from './assets/Pages/Home/Home';
import AboutMe from './assets/Pages/AboutMe/AboutMe';
import Contact from './assets/Pages/Contact/Contact';
import Skills from './assets/Pages/Skills/Skills';

const App = () => {
  return (
    <div>
      <Home />
      <AboutMe/>
      <Skills />
      <Contact />
    </div>
  )
}

export default App
