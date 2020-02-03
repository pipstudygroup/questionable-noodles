import React, { Fragment, useState } from 'react';
import './App.css';

const App = () => {
  const [currentLunchLocation, setCurrentLunchLocation] = useState('Click the Button');

  const peopleManifest = [
    {
      name: 'Kalee',
      isAttending: false,
      hates: ['Snappy Salads', 'Little Katana', 'Fish City Grill'],
      loves: ['LA Burger', 'Yummy Thai', 'Dimassi\'s', 'CJ\'s Bulgogi Grill']
    },
    {
      name: 'Maxwell',
      isAttending: false,
      hates: ['Dimassi\'s', 'Chipotle', 'Mattito\'s'],
      loves: ['Little Katana', 'Lamberti\'s', 'CJ\'s Bulgogi Grill']
    },
    {
      name: 'Jay L',
      isAttending: true,
      hates: ['Slim Chickens', 'Buffalo Wild Wings'],
      loves: ['Snappy Salads', 'Dimassi\'s']
    },
    {
      name: 'Rajal',
      isAttending: false,
      hates: [],
      loves: ['Dimassi\'s', 'CJ\'s Bulgogi Grill']
    },
    {
      name: 'Arkesha',
      isAttending: false,
      hates: ['LA Burger'],
      loves: ['Perry\'s', 'Benihana']
    },
    {
      name: 'Tambria',
      isAttending: false,
      hates: [],
      loves: ['Dimassi\'s', 'Lamberti\'s', 'Buffalo Wild Wings']
    },
    {
      name: 'Haile',
      isAttending: false,
      hates: ['Fish City Grill'],
      loves: ['Chilli Thai', 'Dimassi\'s',]
    },
    {
      name: 'Arindam',
      isAttending: false,
      hates: ['Lamberti\'s'],
      loves: ['Chilli Thai', 'Dimassi\'s',]
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
    let eligibleRestaurants = removeHatedRestaurants(restaurants);
    let restaurantsHatedByAbsentees = getRestaurantsHatedByAbsentees(eligibleRestaurants);
    let restaurantsLovedByAbsentees = getRestaurantsLovedByAbsentees(eligibleRestaurants);
    let restaurantsLovedByAttendees = getRestaurantsLovedByAttendees(eligibleRestaurants);
    console.log('hated by absentees');
    console.log(restaurantsHatedByAbsentees);
    console.log('loved by absentees');
    console.log(restaurantsLovedByAbsentees);
    console.log('loved by attendees');
    console.log(restaurantsLovedByAttendees);

    eligibleRestaurants = eligibleRestaurants.concat(restaurantsHatedByAbsentees);
    eligibleRestaurants = eligibleRestaurants.concat(restaurantsLovedByAttendees);
    console.log('eligibleRestaurants')
    console.log(eligibleRestaurants);

    // use restaurants loved by absentees to narrow down choices
    removeHatedRestaurants(restaurants).forEach(function(restaurant){
      let inTheRunning = eligibleRestaurants.filter(function(current){
        return current === restaurant;
      })
      let loved = restaurantsLovedByAbsentees.filter(function(current){
        return current === restaurant;
      })
      eligibleRestaurants = eligibleRestaurants.filter(function(current){
        return current !== restaurant;
      })
      if(inTheRunning.length > loved.length){
        for(let i = 0; i < inTheRunning.length - loved.length; i++){
          eligibleRestaurants.push(restaurant)
        }
      } else {
        eligibleRestaurants.push(restaurant)
      }
    });
    console.log('eligibleRestaurants')
    console.log(eligibleRestaurants);
    let randomIndex = Math.floor(Math.random() * eligibleRestaurants.length);
    setCurrentLunchLocation(eligibleRestaurants[randomIndex]);
  }
  const removeHatedRestaurants = (eligibleRestaurants) => {
    return eligibleRestaurants.filter(function(restaurant){
      return people.filter(function(person){
        return person.isAttending;
      }).reduce(function(isEligible, person){
        return isEligible && !person.hates.includes(restaurant);
      }, true);
    })
  }

  const getRestaurantsHatedByAbsentees = (eligibleRestaurants) => {
    return eligibleRestaurants.reduce(function(restaurantsHatedByAbsentees, restaurant){
      return restaurantsHatedByAbsentees.concat(people.filter(function(person){
        return !person.isAttending;
      }).reduce(function(absenteeHateForCurrentRestaurant, person){
        return person.hates.includes(restaurant)? absenteeHateForCurrentRestaurant.concat(restaurant) : absenteeHateForCurrentRestaurant;
      }, []));
    }, [])
  }

  const getRestaurantsLovedByAttendees = (eligibleRestaurants) => {
    return eligibleRestaurants.reduce(function(restaurantsLovedByAttendees, restaurant){
      return restaurantsLovedByAttendees.concat(people.filter(function(person){
        return person.isAttending;
      }).reduce(function(attendeeLoveForCurrentRestaurant, person){
        return person.loves.includes(restaurant)? attendeeLoveForCurrentRestaurant.concat(restaurant) : attendeeLoveForCurrentRestaurant;
      }, []));
    }, [])
  }

  const getRestaurantsLovedByAbsentees = (eligibleRestaurants) => {
    return eligibleRestaurants.reduce(function(restaurantsLovedByAbsentees, restaurant){
      return restaurantsLovedByAbsentees.concat(people.filter(function(person){
        return !person.isAttending;
      }).reduce(function(absenteeLoveForCurrentRestaurant, person){
        return person.loves.includes(restaurant)? absenteeLoveForCurrentRestaurant.concat(restaurant) : absenteeLoveForCurrentRestaurant;
      }, []));
    }, [])
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
          {person.name} <input type="checkbox" onChange={() => {updateAttendance(index)}} checked={person.isAttending ? true : ""}></input>
        {person.isAttending ? ` Hates: ${person.hates.join(', ')}` : ''}
      </div>
      })}
    </div>
  );
}

export default App;
