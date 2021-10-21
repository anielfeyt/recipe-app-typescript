import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.scss';

function Navigation () {
    return (
        <nav className="mainNav">
            <ul>
                <li>
                    <NavLink to="/">Recipes</NavLink>
                </li>
                <li>
                    <NavLink to="/add">Add Recipe</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
