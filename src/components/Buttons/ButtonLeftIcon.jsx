import React, { useContext } from 'react' 
import './ButtonLeftIcon.css';
import { FaUserPlus } from "react-icons/fa";

const ButtonLeftIcon = ({title, text, icon, handleClick}) => {
  return (
    <span className="ButtonLeftIcon-main" title={title} onClick={handleClick}>
      {icon !== 'none' ? <img src={icon} alt={title} /> : ''}
      {text}
    </span>
  )
}

export default ButtonLeftIcon