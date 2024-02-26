import React, { useContext } from 'react' 
import './ButtonRightIcon.css';

const ButtonRightIcon = ({title, text, icon}) => {
  return (
    <a className="ButtonRightIcon-main" title={title} >
      {text}
      <img src={icon} alt={title} />
    </a>
  )
}

export default ButtonRightIcon 