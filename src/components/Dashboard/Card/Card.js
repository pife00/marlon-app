import React from 'react';

const card = (props) =>{
    return(
        <div className='level-item has-text-centered'>
            <div>
                <p className='heading' >{props.heading}</p>
                <p className='title' >{props.title}</p>
            </div>
        </div>
    )
}

export default card;