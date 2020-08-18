import React from 'react';


export interface Player{
   avatar: string;
   playerName: string;
   scouts: {
       pts:string,
       wins: string,
       losses: string,
       avg:string,
     };
}



const PlayerItem: React.FC<Player> = (player) => {
    
    return(
        <div>
            <div className="avatar"><p>{player.avatar}</p></div>
            <div className="playerName"><p>{player.playerName}</p></div>
            <div className="content">
                <h1>Scouts</h1>
                <div className="scouts">
                    <h3>Desempenho no Champ</h3>
                    <p><strong>Pontos: </strong>{player.scouts.pts}</p>
                    <p><strong>Vitórias: </strong>{player.scouts.wins}</p>
                    <p><strong>Derrotas: </strong>{player.scouts.losses}</p>
                    <p><strong>Média: </strong>{player.scouts.avg}</p>
                </div>
            </div>

        </div>
    );
}

export default PlayerItem;