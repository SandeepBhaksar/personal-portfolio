import React from 'react';
import logo from '/logo.png';
import './Navbar.css';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import Resume from '../../../CV/Sandeep_Bhaskar_Resume.pdf';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className='nav-left'>
       <a href="/"> <img src={logo} alt='logo' className='nav-logo' /> </a>
      </div>

      <div className="nav-right">
        <a href="#about" className='li-component'>About</a>
        <a href="#work" className='li-component'>Work</a>
        <a href="#contact" className='li-component'>Contact</a>
        <a href="#" className='li-component'><ThemeSwitcher /></a>
        <a href={Resume} className='cv-link' download>
          <button className='cv-dwnld'>Download CV</button>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
