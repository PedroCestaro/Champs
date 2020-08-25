import React from 'react';
import './styles.css';



const Championship =  () => {
    return(
        <div className="container">    
            <div className="champs">
                    <span className="champName">
                        <h1 >Nome</h1>
                        </span>    
                    
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