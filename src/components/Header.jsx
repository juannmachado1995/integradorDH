import React, { useContext } from 'react' 
import { Link } from 'react-router-dom';
import { ContextGlobal, urlLogoEmpresa, pathIcons } from '../components/utils/global.context';
import './Header.css';
import hamburgUserIcon from '/src/assets/hamburg-user-icon.svg';
import ButtonLeftIcon from './ButtonLeftIcon';
import ButtonRightIcon from './ButtonRightIcon';
import HamburgMenuUser from './HamburgMenuUser';

const Header = () => {
  const { contexto } = useContext(ContextGlobal);
  const options = [
    {title: 'Crear cuenta', text: 'Crear cuenta', icon: pathIcons.addUser, typeButton: 1},
    {title: 'Iniciar sesión', text: 'Iniciar sesión', icon: pathIcons.goLogginUser, typeButton: 2}
  ];
  return (
    <header className='header-flex-container'>
      <div className='header-container-logo-empresa'>
        <Link to={'/'}><img src={urlLogoEmpresa} alt='Home'className='header-logo-empresa' /></Link>

        <div className='header-lema'>
          <Link to={'/'}><div><u>Ecológica, Eléctrica y</u> <br/> <u>muevete como gabete</u></div></Link>
        </div>
      </div>

      {/*
      <div className='header-hamburg-user-section'>
        
        <img src={hamburgUserIcon} alt='Opciones usuario' className='header-logo-usuario' />
        
        <HamburgMenuUser options={options}/>
      </div>
      */}

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

export default Header