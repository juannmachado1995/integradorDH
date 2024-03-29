import React from 'react';
import './Footer.css'; 
import { Link } from 'react-router-dom';
import { urlLogoFooter, pathIcons } from '../utils/global.context';


const Footer = () => {

  const telefonoApiWhatsApp = '573102604250';
  const mensajeApiWhatsApp = 'Hola, me gustaría saber mas a cerca de las ciclas disponibles en EBikerent.';
  const endPointApiWhatsApp = 'https://api.whatsapp.com/send';
  const urlApiWhatsApp = endPointApiWhatsApp + '?phone=' + telefonoApiWhatsApp + '&text=' + mensajeApiWhatsApp.replace(/\s/g, '%20');

  return (
    <footer>
      <div className="footer-content">

        <div className="left">
        <div className="logo"><img src={urlLogoFooter} alt="Logo" /></div>
          <div className="copy"> <p>Copyright © 2024</p></div>
        </div>
        <div className='right'>
      
          <a to="https://www.facebook.com">
            <img src={pathIcons.facebook} alt='Facebook' />
          </a>
          <a href={urlApiWhatsApp}>
            <img src={pathIcons.whatsapp} alt='WhatsApp'/>
          </a>
          <a to="https://www.instagram.com">
            <img src={pathIcons.instagram} alt='Instagram' />
          </a>
          <a to="https://www.youtube.com">
            <img src={pathIcons.youtube} alt='Youtube' />
          </a>
        </div>
      </div>  
    </footer>
  );
};

export default Footer;