import React, { Fragment } from 'react';

import useGlobal from '../../utils/store/stateManager'

import getEligibleRestaurants from './../../utils/restaurantGen';

const RestaurantButton = () => {
    const [globalState, globalActions] = useGlobal();

    const lunchLotto = () => {
        let eligibleRestaurants = getEligibleRestaurants(globalState.attendingPersons)
        let randomIndex = Math.floor(Math.random() * eligibleRestaurants.length);
        globalActions.setCurrentLunchLocation(eligibleRestaurants[randomIndex]);
    }
    
    return (
        <Fragment>
            <button onClick={()=>{ lunchLotto() }} style={{backgroundColor: 'purple', color: 'white'}}>Where to Lunch?</button>
        </Fragment>
    )
}

export default RestaurantButton