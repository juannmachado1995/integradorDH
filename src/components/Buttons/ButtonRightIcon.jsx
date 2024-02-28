import React, { useContext } from 'react' 
import './ButtonRightIcon.css';
import { Link } from 'react-router-dom';
import { FaUserCheck } from 'react-icons/fa';

const ButtonRightIcon = ({ title, text }) => {
  return (
    <Link to="/admin" className="ButtonRightIcon-main" title={title}>
      {text} <FaUserCheck />
    </Link>
  );
};

export default ButtonRightIcon;