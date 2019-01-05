import React from 'react'
import Method from "./Method/Method.js"

const methods = ( props ) =>
    props.methodOptions.map((option, index) => {
        return (
            <Method checked={option.checked} 
                value={option.method}
                changed={() => props.changed(option.id)} />
        )
    })

export default methods