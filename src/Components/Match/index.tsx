import React from 'react';
import './styles.css';
import Player from '../Player';

function Match(){   
    return(
        <div className="match">
            <Player/>
            <div><h1>VS</h1></div>
            <Player/>
        </div>
   );
}

export default Match;