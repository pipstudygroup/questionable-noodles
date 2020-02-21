import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import LunchLotto from './pages/LunchLotto';
import { Profile } from './components/Profile/Profile';

const App = (props) => {
  console.log(props);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={LunchLotto} />
          <Route path='/profile/:name' component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
