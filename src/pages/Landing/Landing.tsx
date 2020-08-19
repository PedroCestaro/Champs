import React from 'react';
import './styles.css';
import Logo from '../../assets/big-logo.png'



function Landing(){
    return(
    <div className="pageLanding">
        <div className="logoContainer">
            <img src={Logo} alt="logo-champs" className="logoImg"/>
        </div>
        <div className="buttonsContainer">
            <button>New Champ</button>
            <button>Keep Champing</button>
        </div>
    </div>
    );
}

export default Landing;