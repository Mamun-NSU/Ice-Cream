import React from 'react';
import classes from './Scoop.module.css';
// This is scope js file
const Scoop = () => {
    return (
        <div className={[classes.scoop, classes.orange].join(' ')}></div>
    )
}

export default Scoop
