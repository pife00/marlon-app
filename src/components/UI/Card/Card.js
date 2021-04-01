import React from "react";

import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import * as actionTypes from '../../../store/actions/index';

const Card = (props) => {


  function sendProduct (){
    
  const queryParamas = [];
  
  let doc = {
    ...props
  }
  
   for(let el in doc){
     if(el === 'id'){
       queryParamas.push(encodeURIComponent(el)+'='+doc[el])
     }

     if(el === 'category'){
      queryParamas.push(encodeURIComponent(el)+'='+doc[el])      
     }
   }

   let queryString = queryParamas.join('&');

   props.history.push({
     pathname:'/productDetails',
     search:'?' + queryString
   });

  }

  let price = null;

  if(props.price){
    price = Intl.NumberFormat('es-CO').format(props.price);
  }

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-3by4">
          <img
            src={props.source}
            alt={props.alter}
          />
        </figure>
      </div>
      <div className="card-content">
        
        <div className='text-center'>
          <p className='title is-uppercase has-text-light-dark'>{props.name} </p>
        </div>
        

        <div className="content">
         <p className='mt-2' ></p> 
          <div className='text-center'>
          <p className='subtitle'> 
          <strong> ${price} COP </strong></p>
          </div>
        </div >
        <div className='has-text-centered' > 
          <button
          onClick={sendProduct}
          className='button is-info is-rounded' >Ver detalles</button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(connect(null,null)(Card));
