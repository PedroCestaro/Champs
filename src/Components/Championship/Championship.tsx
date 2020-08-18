import React from 'react';
import './styles.css';
import Match from '../Match';


const Championship =  () => {
    return(
        <div className="container">    
            <div className="champs">
                    <span className="champName">Nome</span>
                    <Match/>
                    <footer className="results">
                    <h2>Results</h2>
                    <p>Média do Champ</p>
                    <p>Pts do Champ</p>
                    </footer>
            </div>
        </div>
    );
}

export default Championship;