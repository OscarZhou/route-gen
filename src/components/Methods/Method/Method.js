import React from 'react'
import classes from "./Method.css"


const method = (props) => {
    return (
        <div className={classes.Method}> {props.value}
            <input type="checkbox" 
                checked={props.checked}
                id={props.id}
                onChange={props.changed} />
            <span className={classes.Checkmark}></span>
        </div>
    )
}

export default method