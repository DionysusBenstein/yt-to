import React from 'react';
import classes from '../styles/Header.module.css';

function Header() {
    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>YouTube to <span className={classes.blueText}>WAV</span></h1>
        </header>
    );
}

export default Header;