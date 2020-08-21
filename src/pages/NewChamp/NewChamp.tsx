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
                    <label><h1>New Champ</h1></label>
                </header>
                <div className="field">
                    <form>
                        <fieldset >
                            <Input
                            name="champName"
                            label="Champ's Name"
                            type="text"
                            />
                        </fieldset>
                    </form>
                </div>
                <footer />
            </div>
        </div>
    );
}

export default newChamp;