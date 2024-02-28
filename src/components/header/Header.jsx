import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal, urlLogoEmpresa, pathIcons } from '../utils/global.context';
import './Header.css';
import ButtonLeftIcon from '../Buttons/ButtonLeftIcon';
import ButtonRightIcon from '../Buttons/ButtonRightIcon';
import HamburgMenuUser from './HamburgMenuUser';


const Header = () => {
  const { contexto } = useContext(ContextGlobal);
  const options = [
    { title: 'Crear cuenta', text: 'Crear cuenta', icon: pathIcons.addUser, typeButton: 1 },
    { title: 'Iniciar sesión', text: 'Iniciar sesión', icon: pathIcons.goLogginUser, typeButton: 2 }
  ];

  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToTopIfOnHomepage = () => {
      if (window.location.pathname === '/') {
        handleScrollToTop();
      }
    };

    document.querySelector('.header-logo-empresa').addEventListener('click', scrollToTopIfOnHomepage);

    return () => {
      document.querySelector('.header-logo-empresa').removeEventListener('click', scrollToTopIfOnHomepage);
    };
  }, []);

  return (
    <header className='header-flex-container'>
      <div className='header-container-logo-empresa'>
        <Link to={'/'}><img src="./img/Logo.png" alt='Home' className='header-logo-empresa' /></Link>

        <div className='header-lema'>
          <Link to={'/'}><div><u>Ecológica, Eléctrica y</u> <br/> <u>muevete a tu ritmo</u></div></Link>
        </div>
      </div>

      <HamburgMenuUser options={options}/>

      <div className='header-buttons-section'>
        {options.map((item, idx) => (item.typeButton === 1?
          <ButtonLeftIcon key={idx} title={item.title} text={item.text} icon={item.icon} />
          :
          <ButtonRightIcon key={idx} title={item.title} text={item.text} icon={item.icon} />
        ))}
      </div>
    </header>
  )
}

export default Header;