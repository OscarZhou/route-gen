import React from 'react'
import classes from "./Method.css"


const method = (props) => {
    return (
        <div className={classes.Method} onClick={props.clicked}> 
            <input type="checkbox" key={props.id} />{props.value}
        </div>
    )
}

export default method