import React, { Fragment } from 'react';

import RestaurantName from  './RestaurantName'
import RestaurantButton from './RestaurantButton'
import NamesList from './NamesList'


function Home() {
    return (
        <Fragment>
          <RestaurantName/>
          <RestaurantButton/>
          <NamesList/>
        </Fragment>
      );
}

export default Home;