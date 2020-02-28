import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div>
            <Link to='/' label='Home'>Home</Link>
            <Link to='/profile'>Profile</Link>
        </div>
    );
}