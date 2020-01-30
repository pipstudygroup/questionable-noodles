import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [currentLunchLocation, setCurrentLunchLocation] = useState('Click the Button');
  
  const restaurants = [
    'Demassis',
    'Benihanas',
    'Perrys',
    'Freebirds',
    'Chipolte',
    'La Burger'
  ]
  const lunchLotto = () => {
    let randomIndex = Math.floor(Math.random() * restaurants.length);
    setCurrentLunchLocation(restaurants[randomIndex]);
  }

  return (
    <div className="App">
      <h2>
        {currentLunchLocation}
      </h2>
      <button onClick={()=>{ lunchLotto() }} style={{backgroundColor: 'purple', color: 'white'}}>Where to Lunch?</button>
    </div>
  );
}

export default App;
