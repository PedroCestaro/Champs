import React from 'react'
import Header from '../../Components/Header/Header'

function newChamp(){
    return(
        <div className="nwc">
            <div>
              <Header/>
            </div>
            <div className="content">
                <p>Conteudo</p>
            </div> 
        </div>
    );
}

export default newChamp;