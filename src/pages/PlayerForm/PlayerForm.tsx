import React from 'react';
import './styles.css';
import Header from '../../Components/Header/Header';
import Input from '../../Components/Input/Input';


function PlayerForm(){
    return(
        <div className="player-container">
            <Header/>
            <div className="player-profile">
            <header ><h1>Profile</h1></header>
                <div className="profile">
                    <form>
                        <fieldset >
                            <Input
                            name="name"
                            label="Player Name"
                            />
                        </fieldset>
                        <fieldset>
                            <Input
                            name="age"
                            label="Age"
                            type="date"
                            />
                        </fieldset>
                    </form>
                    <div className="picture">
                        <p>Picture</p>
                        <input type="file"/>
                    <button>Save</button>    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayerForm;