import React, { useContext } from 'react' 
import './ButtonLeftIcon.css';
import { FaUserPlus } from "react-icons/fa";

const ButtonLeftIcon = ({title, text, icon}) => {

  return (
    <a className="ButtonLeftIcon-main" title={title} >
      {<FaUserPlus />}
      {text}
    </a>
  )
}

export default ButtonLeftIcon