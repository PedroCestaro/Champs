import React from 'react';
import './styles.css';
import Match from '../Match';

/*interface ChampionshipINT{
    nome: string
}*/

const Championship =  () => {
    return(
        <div className="container">
            <article className="champs">
                <header className="champName"><h1>Nome</h1></header>
                <Match/>
                <footer className="results">Results</footer>
            </article>
        </div>
    );
}

export default Championship;