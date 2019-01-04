import React from 'react'

import classes from './Resource.css'




const resource = ( props ) => {

    return (
        <div>
            <span>Resources</span>
            <input type="text"></input>
            <input className={classes.CircleButton} 
                type="button" 
                value='+' 
                onClick={props.clicked} ></input>
            <span className={classes.Example}>
                e.g. Accounts, Locations
            </span>
        </div>
    )
}


export default resource