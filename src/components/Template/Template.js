import React from 'react';
import classes from './Template.css'  

const template = ( props ) =>{



    return (
        <div className={classes.Template}>
            <ul>
                <li>
                    <span>Resources</span>
                    <input type="text"></input>
                    <input className={classes.CircleButton} type="button" value='+' 
                        onClick={props.clicked} ></input>
                    <span className={classes.Example}>
                        e.g. Accounts, Locations
                    </span>

                </li>
                <li>
                    <span>Methods</span>
                    <input type="text"></input>
                    e.g. 
                </li>
                <li>
                    <span>Version</span>
                    <input type="text"></input>
                    e.g. 
                </li>
                <li>
                    <span>ProxySchema</span>
                    <input type="text"></input>
                    e.g. 
                </li>
                <li>
                    <span>ProxyPass</span>
                    <input type="text"></input>
                    e.g. 
                </li>
                <li>
                    <span>ProxyVersion</span>
                    <input type="text"></input>
                    e.g. 
                </li>
                <li>
                    <span>CustomConfiguration</span>
                    <input type="text"></input>
                    e.g. 
                </li>
            </ul>
        </div>
    )
} 


export default template