import React, { Fragment, useState } from 'react';
import './App.css';

const App = () => {
  const people = [
    {
      name: 'Jay',
      hates: [
        'meat',
      ],
      attending: false,
    },
    {
      name: 'Raji',
      hates: [
        'Chipotle',
      ],
    },
    {
      name: 'K',
      hates: [
        'Bennihanas',
      ],
    },
    {
      name: 'Icon',
      hates: [
        'Demassi\'s',
      ],
    }
  ];
  
  const [currentLunchLocation, setCurrentLunchLocation] = useState('Click the Button');
  const [attendees, setAttendees] = useState(people.map(person => person.name));
  
  const updateAttendees = (newPerson) => {
    if(attendees.includes(newPerson)) {
    
    }
    setAttendees();
  }
  
  console.log('attendees', attendees);
  const restaurants = [
    'Demassi\'s',
    'Benihana',
    'Perry\'s',
    'Freebird\'s',
    'Chipotle',
    'LA Burger'
  ];
  
  const lunchLotto = () => {
    let randomIndex = Math.floor(Math.random() * restaurants.length);
    setCurrentLunchLocation(restaurants[randomIndex]);
  };

  return (
    <div className="App">
      <h2>
        {currentLunchLocation}
      </h2>
      <button onClick={()=>{ lunchLotto() }} style={{backgroundColor: 'purple', color: 'white'}}>Where to Lunch?</button>
      <div>
        {people.map( person => {
          return (
            <>
              {person.name}<input type="checkbox" onChange={() => setAttendees()}/>
            </>
          )
        })}
      </div>
    </div>
  );
}

export default App;
