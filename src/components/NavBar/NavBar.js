import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div>
      <Link to='/' style={{'margin-right':'10px'}}>Home</Link>
      <Link to='/profile'>Profile</Link>
    </div>
  );
}
