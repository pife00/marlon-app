import React from 'react';
import {NavLink} from 'react-router-dom'

const pages = () =>{
    return(
        <li>
      <NavLink to='/' className="pagination-link" aria-label="Goto page 1">1</NavLink>
        </li>
    )
}

export default pages