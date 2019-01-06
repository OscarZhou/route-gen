import React from 'react';
import classes from './Template.css'  
import Resource from '../Resource/Resource.js'
import ResourceLabels from '../ResourceLabels/ResourceLabels.js'
import Methods from '../Methods/Methods.js'

const template = ( props ) =>{
    // let resources = <Resources value={props.value} />


    return (
        <div className={classes.Template}>
            <ul>
                <li>
                    <Resource clicked={ props.clicked } 
                        changed={ props.changed }
                        focused={ props.focused } />
                    <ResourceLabels resourceLabels={props.resourceLabels}
                        clicked={ props.resourceLabelDeleted } />
                </li>
                <li>
                    <span>Methods</span>
                    <Methods methodOptions={props.methodOptions} 
                        clicked={ props.methodClicked } />
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
            <input type="text" readOnly value="Input File Name" />
            <input type="button" className={classes.Generate} 
              onClick={props.test} value="Generate" />
        </div>
    )
} 


export default template