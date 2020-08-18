import React, { useState } from 'react';
import './styles.css';
import PlayerItem from '../Player';


function Match(){   

    function result() {
       const scout = {
         wins:'0',
         losses:'0',
         avg:'0',
         pts:'0'
       }

       return scout;
    };


    return(
        <div className="container">
            
            <div className="match">
                <PlayerItem
                avatar="https://avatars3.githubusercontent.com/u/51093289?s=460&u=768e5fdf98ecbba15a348c29a3ad19306acde2a3&v=4"
                playerName="Pedro"
                scouts={result()}    
                />
                <h1>VS</h1>
                <h3>Pts da Partida</h3>
                <h3>Vencedor</h3>
            </div>

        </div>
   );
}

export default Match;