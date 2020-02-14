import React from 'react';

import useGlobal from './../../../utils/store/stateManager'

import getEligibleRestaurants from './../../../utils/restaurantGen';

import Button from '@material-ui/core/Button';

const RestaurantButton = () => {
    const [globalState, globalActions] = useGlobal();
    const attendingPersons = globalState.attendingPersons
    const setCurrentLunchLocation = globalActions.setCurrentLunchLocation

    const lunchLotto = () => {
        let eligibleRestaurants = getEligibleRestaurants(attendingPersons)
        let randomIndex = Math.floor(Math.random() * eligibleRestaurants.length);
        setCurrentLunchLocation(eligibleRestaurants[randomIndex]);
    }
    
    return (
        <Button 
            onClick={()=>{ lunchLotto() }} 
            style={{backgroundColor: 'purple', color: 'white'}}
            size="medium"
            variant="outlined"
        >
            Where to For Lunch?
        </Button>
    )
}

export default RestaurantButton