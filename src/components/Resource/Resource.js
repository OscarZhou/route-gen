import React from 'react'

import classes from './Resource.css'




const resource = ( props ) => {

    return (
        <div>
            <span>Resources</span>
            <input type="text" 
                onChange={props.changed}></input>
            <input className={classes.CircleButton} 
                type="button" 
                value='+' 
                onClick={props.clicked} ></input>
            <span className={classes.Example}>
                <b>e.g.</b> Accounts, Locations
            </span>
        </div>
    )
}


export default resource