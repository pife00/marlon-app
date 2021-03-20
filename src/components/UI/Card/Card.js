import React from "react";
import {NavLink} from 'react-router-dom';
const card = (props) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1 ">
          <img
            src={props.source}
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        
        <div className='text-center'>
          <p className='title'>{props.name} </p>
        </div>
        

        <div className="content">
         <p className='mt-2' > {props.description} </p> 
          <div className='text-center'>
          <p className='subtitle'>{props.price} </p>
          </div>
        </div>
          <NavLink to='/productDetails' className='button is-info' >Ir</NavLink>
      </div>
    </div>
  );
};

export default card;
