import React from 'react';
import Aux from '../../hoc/Auxiliary';


const bigPicture = (props) =>{

    let image = <img  alt='phone' 
    src='https://via.placeholder.com/300x400'
    />

    if(props.image != null){
        image = <img alt='phone' 
        className='image is-300x400'
        src={props.image}
        />
    }

    return(
        <Aux>
            {image}
        </Aux>
    )
}

export default bigPicture