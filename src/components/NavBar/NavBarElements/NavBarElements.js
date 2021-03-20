import React from 'react'
import {NavLink} from 'react-router-dom';

const navBarElements = (props) =>{
    return(
        <NavLink to={props.link} className="navbar-item" >{props.name}</NavLink> 
    )
}

export default navBarElements;