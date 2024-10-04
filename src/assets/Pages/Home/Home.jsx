import React from 'react';
import Navbar from '../Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
    <div className='Navbar'>
      <Navbar />
    </div>
<div className="main-page">
    <h1>Hi, I'm Sandeep </h1>
    <p>I'm a focused full-stack developer who is passionate about creating seamless digital experiences.<br/> I specialize on creating solutions that are not only quick and responsive, but also accessible and visually appealing,<br/> resulting in an amazing user experience across all platforms.
    </p>
    <br />
    <p><FontAwesomeIcon icon={faLocationDot} /> Chikmagalur, Karnataka, India </p>

</div>

    </div>
  )
}

export default Home