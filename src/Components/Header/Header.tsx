import React from 'react';
import './styles.css';
import Logo from '../../assets/log0.png';


function Header() {
  return (
      <div className="header">
        <div className="logo">
          <img src={Logo} alt="Champs-logo"/>
        </div>
      </div>
  );
}      

export default Header;