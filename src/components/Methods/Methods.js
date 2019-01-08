import React from 'react'
import Method from "./Method/Method.js"

const methods = ( props ) =>
    props.values.map((option, index) => {
        return (
            <Method key={option.id}
                checked={option.checked} 
                value={option.method} 
                clicked={() => props.clicked(index)} />
        )
    })

export default methods