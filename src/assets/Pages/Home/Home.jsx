import React from 'react';
import Navbar from '../Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import available from '../../../../src/images/available.png';
import myimage from '../../../../src/images/my-photo.jpeg';
import AboutMe from '../AboutMe/AboutMe';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
    <div className='Navbar'>
      <Navbar />
    </div>
    <div className="main-page-wrapper">
<div className="main-page">
    <h1>Hi, I'm Sandeep </h1>
    <p>I'm a focused full-stack developer who is passionate about creating seamless digital experiences.<br/> I specialize on creating solutions that are not only quick and responsive, but also accessible and visually appealing,<br/> resulting in an amazing user experience across all platforms.
    </p>
    <br />
    <p className='address-text'><FontAwesomeIcon icon={faLocationDot} className='location-icon' />Chikmagalur, Karnataka, India </p>
    <p className='available-text'><img src={available} alt="available" className='available-img'/> Available for new projects</p>
</div>

<div className="my-image">
  <img src={myimage} alt="Sandeep_Bhaskar" />
</div>
</div>
    </div>
  )
}

export default Home