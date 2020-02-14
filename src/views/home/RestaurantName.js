import React, { Fragment } from 'react';
import useGlobal from '../../utils/store/stateManager'

const RestaurantName = () => { 
    const [globalState, globalActions] = useGlobal();

    return (
        <Fragment>
            <h2>
                {globalState.currentLunchLocation}
            </h2>
        </Fragment>
    )
}

export default RestaurantName