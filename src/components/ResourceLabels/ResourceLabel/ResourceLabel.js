import React from 'react'
import classes from "./ResourceLabel.css"

const resourceLabel = (props) =>{
    return (
        <div className={classes.ResourceLabel} key={props.key} >
            <p className={classes.Tag} 
            onClick={props.clicked}>{props.value}</p>
        </div>
    )
}


export default resourceLabel