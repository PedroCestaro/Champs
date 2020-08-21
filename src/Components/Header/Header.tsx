import React from 'react';
import './styles.css';
import Logo from '../../assets/log0.png';


function Header() {
  return (
      <header className="hdr">
        <div className="logo">
          <img src={Logo} alt="Champs-logo"/>
        </div>
      </header>
  );
}      

export default Header;