import React, { Fragment } from 'react';

import RestaurantName from  './components/RestaurantName'
import RestaurantButton from './components/RestaurantButton'
import AttendanceList from './components/AttendanceList'


function Home() {
    return (
        <Fragment>
          <RestaurantName/>
          <RestaurantButton/>
          <AttendanceList/>
        </Fragment>
      );
}

export default Home;