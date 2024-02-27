import React, { useContext } from 'react' 
import './ButtonLeftIcon.css';

const ButtonLeftIcon = ({title, text, icon}) => {

  return (
    <a className="ButtonLeftIcon-main" title={title} >
      <img src={icon} alt={title} />
      {text}
    </a>
  )
}

export default ButtonLeftIcon