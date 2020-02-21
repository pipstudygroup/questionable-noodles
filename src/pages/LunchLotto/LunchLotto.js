import React, { useState } from 'react';
import peopleManifest from '../../services/people';
import restaurants from '../../services/resturants';
import AttendanceList from '../../components/AttendanceList/AttendanceList';
import WhereToLunch from '../../components/WhereToLunch/WhereToLunch';
import './LunchLotto.css';

const LunchLotto = () => {

    const [currentLunchLocation, setCurrentLunchLocation] = useState('Click the Button');
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
        eligibleRestaurants = eligibleRestaurants.concat(restaurantsLovedByAttendees).concat(restaurantsLovedByAttendees).concat(restaurantsLovedByAttendees);
        console.log('eligibleRestaurants')
        console.log(eligibleRestaurants);

        // use restaurants loved by absentees to narrow down choices
        removeHatedRestaurants(restaurants).forEach(function (restaurant) {
            let inTheRunning = eligibleRestaurants.filter(function (current) {
                return current === restaurant;
            })
            let loved = restaurantsLovedByAbsentees.filter(function (current) {
                return current === restaurant;
            })
            eligibleRestaurants = eligibleRestaurants.filter(function (current) {
                return current !== restaurant;
            })
            if (inTheRunning.length > loved.length) {
                for (let i = 0; i < inTheRunning.length - loved.length; i++) {
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
        return eligibleRestaurants.filter(function (restaurant) {
            return people.filter(function (person) {
                return person.isAttending;
            }).reduce(function (isEligible, person) {
                return isEligible && !person.hates.includes(restaurant);
            }, true);
        })
    }

    const getRestaurantsHatedByAbsentees = (eligibleRestaurants) => {
        return eligibleRestaurants.reduce(function (restaurantsHatedByAbsentees, restaurant) {
            return restaurantsHatedByAbsentees.concat(people.filter(function (person) {
                return !person.isAttending;
            }).reduce(function (absenteeHateForCurrentRestaurant, person) {
                return person.hates.includes(restaurant) ? absenteeHateForCurrentRestaurant.concat(restaurant) : absenteeHateForCurrentRestaurant;
            }, []));
        }, [])
    }

    const getRestaurantsLovedByAttendees = (eligibleRestaurants) => {
        return eligibleRestaurants.reduce(function (restaurantsLovedByAttendees, restaurant) {
            return restaurantsLovedByAttendees.concat(people.filter(function (person) {
                return person.isAttending;
            }).reduce(function (attendeeLoveForCurrentRestaurant, person) {
                return person.loves.includes(restaurant) ? attendeeLoveForCurrentRestaurant.concat(restaurant) : attendeeLoveForCurrentRestaurant;
            }, []));
        }, [])
    }

    const getRestaurantsLovedByAbsentees = (eligibleRestaurants) => {
        return eligibleRestaurants.reduce(function (restaurantsLovedByAbsentees, restaurant) {
            return restaurantsLovedByAbsentees.concat(people.filter(function (person) {
                return !person.isAttending;
            }).reduce(function (absenteeLoveForCurrentRestaurant, person) {
                return person.loves.includes(restaurant) ? absenteeLoveForCurrentRestaurant.concat(restaurant) : absenteeLoveForCurrentRestaurant;
            }, []));
        }, [])
    }

    return (
        <>
            <WhereToLunch currentLunchLocation={currentLunchLocation} lunchLotto={lunchLotto}/>
            <AttendanceList people={people} setPeople={setPeople} />
        </>
    );
}

export default LunchLotto;