import React from 'react';
import './Footer.css'; 
import { Link } from 'react-router-dom';
import { urlLogoFooter, pathIcons } from '../utils/global.context';


const Footer = () => {

  const whatsappClick = () => {
    const numero = '123456789';
    const whatsapp = `https://wa.me/${numero}`;
    window.location.href = whatsapp;
  };

  return (
    <footer>
      <div className="footer-content">

        <div className="left">
        <div className="logo"><img src={urlLogoFooter} alt="Logo" /></div>
          <div className="copy"> <p>Copyright © 2024</p></div>
        </div>
        <div className='right'>
      
        <Link to="https://www.facebook.com">
            <img src={pathIcons.facebook} alt='Facebook' />
          </Link>
          <Link to="https://www.whatsapp.com">
            <img src={pathIcons.whatsapp} alt='WhatsApp' onClick={whatsappClick}/>
          </Link>
          <Link to="https://www.instagram.com">
            <img src={pathIcons.instagram} alt='Instagram' />
          </Link>
          <Link to="https://www.youtube.com">
            <img src={pathIcons.youtube} alt='Youtube' />
          </Link>
        </div>
      </div>  
    </footer>
  );
};

export default Footer;