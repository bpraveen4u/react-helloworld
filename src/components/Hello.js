import React from 'react'

const Hello = () => {
    // return(
    //     <div>
    //         <h1>Hello! Praveen</h1>
    //     </div>
    // )   
    
    return React.createElement(
        'div', 
        {id: "hello", className: "dummycls"}, 
        React.createElement('h1', null, 'Hello Praveeeen')
    )
}

export default Hello