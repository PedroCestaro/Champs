import React, { Children } from 'react'
import Header from '../../Components/Header/Header'
import Input from '../../Components/Input/Input'
import './styles.css';


function newChamp(){
    return(
        <div className="nwc">
            <header>
                <Header/>
            </header>
            <div className="content">
                <header>
                    <h1>New Champ</h1>
                </header>
                <div className="field">
                    <form>
                        <fieldset>
                            <Input
                            name="champs-name"
                            label="Champs-name"
                            type="text"/>
                        </fieldset>
                        <fieldset>
                            <Input
                            name="champ-type"
                            label="Champ's Type"
                            type="text"/>
                        </fieldset>
                    </form>
                    <div className="players">
                    <span><h1>Players</h1></span>
                    <div className="players-content">
                        <p>Player1</p>
                        <p>Player2</p>
                    </div>
                    <button>+</button>
                </div>
                </div>
                <footer/>
            </div>  
        </div>
    );
}

export default newChamp;