import React from 'react';
import Card from '../UI/Card/Card';

const accesoriesCard = (props) =>{
    return(
        <div className='column is-3' style={{display:'inline-block'}}>
           <Card name={props.name} 
            id={props.id}
            storage={props.storage}
            camera={props.camera}
            source={props.source}
            category={props.category}
            alter={props.alter}
            link={props.url}
            price={props.price}
            />
        </div>    
    )
}
export default accesoriesCard;