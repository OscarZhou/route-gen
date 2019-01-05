import React from 'react'
import classes from "./ResourceLabel.css"

const resourceLabel = (props) =>{
    return (
        <div className={classes.ResourceLabel} >
            <a className={classes.Tag} 
            onClick={props.clicked}>{props.value}</a>
        </div>
    )
}


export default resourceLabel