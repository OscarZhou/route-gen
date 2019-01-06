import React from 'react'
import classes from "./Method.css"


const method = (props) => {
    return (
        <div className={classes.Method}
            id={props.id} > 
            <input type="checkbox" 
                onClick={props.clicked} />{props.value}
        </div>
    )
}

export default method