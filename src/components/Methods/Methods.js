import React from 'react'
import Method from "./Method/Method.js"

const methods = ( props ) =>
    props.methodOptions.map((option, index) => {
        return (
            <Method id={option.id}
                checked={option.checked} 
                value={option.method} 
                clicked={props.clicked} />
        )
    })

export default methods