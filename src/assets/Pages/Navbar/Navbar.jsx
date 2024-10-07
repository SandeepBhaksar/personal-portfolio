import React from 'react';
import logo from '/logo.png';
import './Navbar.css';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import Resume from '../../../CV/Sandeep_Bhaskar_Resume.pdf'; // Ensure the filename is correct

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
          <li><ThemeSwitcher /></li>
          <li>
            <a href={Resume} className='cv-link' download> {/* Added download attribute */}
              <button className='cv-dwnld'>Download CV</button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
