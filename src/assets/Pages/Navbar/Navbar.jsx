import React from 'react';
import logo from '/logo.png';
import './Navbar.css';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

const Navbar = () => {
  return (
    <div className="navbar">
    <div className='nav-left'>
        <img src={logo} alt='logo' className='nav-logo' />
    </div>

    <div className="nav-right">
      <ul>
        <li>About</li>
        <li>Work</li>
        <li>Contact</li>
        <li><ThemeSwitcher/></li>
      </ul>
    </div>
    </div>
  )
}

export default Navbar