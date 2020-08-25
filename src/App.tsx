import React from 'react';
import Header from './Components/Header/Header';
import Championship from './Components/Championship/Championship';
import Landing from './pages/Landing/Landing';
import './assets/styles/global.css';
import NewChamp from './pages/NewChamp/NewChamp';
import PlayerForm from './pages/PlayerForm/PlayerForm';

function App() {


  return (
    <div className="App">
      <PlayerForm/>
    </div>
  );
}

export default App;
