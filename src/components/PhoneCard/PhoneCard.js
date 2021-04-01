import React from 'react'
import Card from '../UI/Card/Card'

const phoneCard = (props) =>{
    return(       
        <div className='column is-3' style={{display:'inline-block'}}>
            <Card name={props.name} 
            id={props.id}
            storage={props.storage}
            camera={props.camera}
            category={props.category}
            source={props.source}
            alter={props.alter}
            link={props.url}
            price={props.price}
            />
        </div>      
    )    
}

export default phoneCard