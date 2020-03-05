import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import LunchLotto from './pages/LunchLotto';
import { Profile } from './components/Profile/Profile';
import { NavBar } from './components/NavBar';
const App = (props) => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={LunchLotto} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
