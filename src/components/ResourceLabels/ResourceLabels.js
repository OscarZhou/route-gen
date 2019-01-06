import React from 'react' 
import ResourceLabel from "./ResourceLabel/ResourceLabel.js"


const resourceLabels = ( props ) => 
    props.resourceLabels.map((resourceLabel, index) => {
        return (
            <ResourceLabel value={resourceLabel} 
            key={index}
            clicked={(event) => props.clicked(event, index)} />
        )
    })


export default resourceLabels