import React from 'react';

const details = (props) =>{
    return(
        <div>
            <h1 className='title' >{props.name}</h1>
            <h2 className='subtitle' >{props.description}</h2>
        </div>
    )   
}

export default details