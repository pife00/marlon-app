import React,{useState,useEffect} from 'react';

import Phone from './Phone/Phone';
import Accesorio from './Accessories/Accessories'
const Details = (props) =>{

    let price = null;
    let form = null;
    let category = props.product.category ? props.product.category :null;

    if(props.product.price){
        price = Intl.NumberFormat('es-CO').format(props.product.price);
    }

    switch(category){
        case 'Telefono':
            form = <Phone 
            camera={props.product.camera}
            storage={props.product.storage}
            />
        break;
        case 'Accesorio':
            form = <Accesorio 
            model = {props.product.model}
            brand = {props.product.brand}
            />
            break;

        default:
            return null;
    }
    return(
        
        <div >
            <h1 className='title is-uppercase' >{}</h1>
            <h2 
            className='title is-3 has-text-info has-text-weight-bold' > 
            ${price} COP </h2>
            <hr />
            {form}
        </div>
    )   
}

export default Details