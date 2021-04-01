import React from 'react';
import './Circle.css';

const circle = (props) =>{
    const style = {
        backgroundColor:props.color
    }
    return(
        <div className='circle m-1' style={style}>
        </div>
    )
}

export default circle;