import React, { Fragment, useState } from 'react';
import './App.css';

const App = () => {
  const [currentLunchLocation, setCurrentLunchLocation] = useState('Click the Button');

  const peopleManifest = [
    {
      name: 'Kalee',
      isAttending: false,
      hates: ['Snappy Salads', 'Little Katana']
    },
    {
      name: 'Maxwell',
      isAttending: false,
      hates: ['Dimassi\'s', 'Chipotle', 'Mattito\'s']
    },
    {
      name: 'Jay L',
      isAttending: false,
      hates: ['Slim Chickens']
    },
    {
      name: 'Rajal',
      isAttending: false,
      hates: []
    },
    {
      name: 'Arkesha',
      isAttending: false,
      hates: ['LA Burger']
    },
    {
      name: 'Tambria',
      isAttending: false,
      hates: []
    },
    {
      name: 'Haile',
      isAttending: false,
      hates: ['Fish City Grill']
    },
    {
      name: 'Arindam',
      isAttending: false,
      hates: ['Lamberti\'s']
    }
  ];
  const restaurants = [
    'Dimassi\'s',
    'Benihana',
    'Perry\'s',
    'Freebirds',
    'Chipotle',
    'LA Burger',
    'Snappy Salads',
    'Slim Chickens',
    'Chilli Thai',
    'CJ\'s Bulgogi Grill',
    'Yummy Thai',
    'Buffalo Wild Wings',
    'Mattito\'s',
    'Little Katana',
    'Fish City Grill',
    'Lamberti\'s'
  ];
  const [people, setPeople] = useState(peopleManifest);
  const lunchLotto = () => {
    let eligibleRestaurants = restaurants.filter(function(restaurant){
      return people.filter(function(person){
        return person.isAttending;
      }).reduce(function(isEligible, person){
        return isEligible && !person.hates.includes(restaurant);
      }, true);
    })
    let randomIndex = Math.floor(Math.random() * eligibleRestaurants.length);
    setCurrentLunchLocation(eligibleRestaurants[randomIndex]);
  }

  const updateAttendance = (index) => {
    let tempPeople = people;
    tempPeople[index].isAttending = !tempPeople[index].isAttending;
    setPeople([...tempPeople]);
  }

  return (
    <div className="App">
      <h2>
        {currentLunchLocation}
      </h2>
      <button onClick={()=>{ lunchLotto() }} style={{backgroundColor: 'purple', color: 'white'}}>Where to Lunch?</button>
      {people.map(function(person, index) {
        return <div>
          {person.name} <input type="checkbox" onChange={() => {updateAttendance(index)}}></input>
        {person.isAttending ? ` Hates: ${person.hates.join(', ')}` : ''}
      </div>
      })}
    </div>
  );
}

export default App;
