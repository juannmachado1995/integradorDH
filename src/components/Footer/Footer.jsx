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
        {/* <div className="right">
          <img src="./img/instagram.png" alt="Instagram" />
          <img src="./img/facebook.png" alt="Facebook" />
          <img src="./img/youtube.png" alt="YouTube" />
          <img src="./img/whatsapp.png" alt="WhatsApp" />
        </div> */}
        <div className="left">
        <div className="logo"><img src={urlLogoFooter} alt="Logo" /></div>
          <div className="copy"> <p>Copyright © 2024</p></div>
        </div>
        <div className='right'>
          <img src={pathIcons.facebook} alt='Facebook' />
          <img src={pathIcons.whatsapp} onClick={whatsappClick} alt='WhatsApp' />
          <img src={pathIcons.instagram} alt='Instagram' />
          <img src={pathIcons.youtube} alt='Youtube' />
        <Link to="https://www.facebook.com">
            <img src={pathIcons.facebook} alt='Facebook' />
          </Link>
          <Link to="https://www.whatsapp.com">
            <img src={pathIcons.whatsapp} alt='WhatsApp' />
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