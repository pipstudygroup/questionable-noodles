import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


const App = () => {
  // using a react hook
  const [currentLunchLocation, setCurrentLunchLocation] = useState('Click the Button');
  console.log('current', currentLunchLocation);
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
