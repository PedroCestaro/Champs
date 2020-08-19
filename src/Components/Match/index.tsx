import React, { useState } from 'react';

import PlayerItem from '../Player';

let winner = false;

function isWinner(){
    if (winner) {
        return (
            <div className="winner" />
        )
    } else {
        return (
            <div className="looser"/>
        )
    }
}


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
                avatar='foto'
                playerName="Pedro"
                scouts={result()}    
                />

                <button onClick={isWinner}>Vencedor</button>

                <div><h1>VS</h1></div>
                
                <PlayerItem
                avatar='foto'
                playerName="Pedro"
                scouts={result()}    
                />

                <button onClick={isWinner}>Vencedor</button>
                
                <footer>
                <h3>Pts da Partida</h3>
                <h3>Vencedor</h3>
                </footer>
            </div>

        </div>
   );
}

export default Match;