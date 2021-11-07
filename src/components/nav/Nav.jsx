import React, { useState } from 'react';
import './Nav.css';

function Nav() {
    const [icon, seticon] = useState('fas fa-moon');
    const [mode, setmode] = useState(true)

    function modeChangeHandler() {
        if (mode) {
            document.documentElement.setAttribute('data-theme', 'dark');
            seticon('fas fa-sun');
            setmode(false)
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            seticon('fas fa-moon');
            setmode(true)
        }
    };

    return (
        <nav>
            <h1>Cryptocurrency Prices by Market Cap</h1>
            <dfn onClick={modeChangeHandler} title="Change ui mode"><i className={icon}></i></dfn>
        </nav>
    )
}

export default Nav;
