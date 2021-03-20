import React from "react";
import Aux from "../../../hoc/Auxiliary";
import { NavLink } from "react-router-dom";
const items = (props) => {

 
  let title = [];
  let items = [];

  for (let key in props.items) {
    if(key == 'title'){
      title.push(<p key={props.items[key]} className='menu-label' >{props.items[key]}</p>)
    }
  }
  
  for (let key in props.items.items) {
    items.push(
    <li key={props.items.links[key]} >
      <NavLink 
      to={props.items.links[key]}>
      {props.items.items[key]}
      </NavLink>
    </li>
    )
  }

  return( 
  <Aux>
     {title}
     <ul className='menu-list' >
       {items}
     </ul>
  </Aux>
  )
};

export default items;
