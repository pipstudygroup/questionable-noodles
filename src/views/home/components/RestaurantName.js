import React, { Fragment } from 'react';
import useGlobal from './../../../utils/store/stateManager'

const RestaurantName = () => { 
    const [globalState] = useGlobal();
    const currentLunchLocation = globalState.currentLunchLocation;

    return (
        <Fragment>
            <h2>
                {currentLunchLocation}
            </h2>
        </Fragment>
    )
}

export default RestaurantName