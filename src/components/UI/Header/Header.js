import React from 'react';
import Navigation from '../Navigation/Navigation';

import './Header.scss';

function Header () {
    return (
        <header>
            <div className="innerHeader">
                <div className="logo">
                    <h1>Logo</h1>
                </div>
                <Navigation />
            </div>
        </header>
    );
}

export default Header;
