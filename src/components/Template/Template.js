import React from 'react';
import classes from './Template.css'  

const template = ( props ) =>{
    return (
        <div>
            <ul>
                <li>
                    <span>Resources</span>
                    <input type="text"></input>
                    <input className={classes.CircleButton} type="button" value='+'></input>
                    e.g. 
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