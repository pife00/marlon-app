import React from 'react'
import Card from '../UI/Card/Card'
import { useMediaQuery } from 'react-responsive';

const PhoneCard = (props) =>{

    const isMobile = useMediaQuery({ query: '(max-width: 768px)'})


    const style = isMobile === true ? {display:'inline'} : {display:'inline-block'} ;

    return(       
        <div className='column is-4' style={style}>
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

export default PhoneCard