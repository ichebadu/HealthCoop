import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = () => {
    return <ul className='nav-links'>
        <li>
            <NavLink to="/User/pages/Users"> Home</NavLink>
        </li>
        <li>
            <NavLink to="/u1/places">  Login</NavLink>
        </li>
        <li>
            <NavLink to="/places/new"> Service </NavLink>
        </li>
        <li>
            <NavLink to="/auth"> Cart </NavLink>
        </li>
    </ul>
}
export default NavLinks