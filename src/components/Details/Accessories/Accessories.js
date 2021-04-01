import React from 'react';
import {GiContract} from 'react-icons/gi'
import {FaIcons} from 'react-icons/fa'
const accessories = (props) =>{
    return(
        <div>
      <span className="icon-text mt-2">
        <span className="icon">
          <GiContract size="1.5em" />
        </span>
        <span> Modelo {props.model} </span>
      </span>{" "}
      <br />
      <span className="icon-text mt-2">
        <span className="icon">
          <FaIcons size="1.5em" />
        </span>
        <span>{props.brand}</span>
      </span>
      <br />
    </div>
    )
}

export default accessories