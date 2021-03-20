import React from "react";
import NavBarElements from "./NavBarElements/NavBarElements";
import {NavLink} from 'react-router-dom'
const navBar = (props) => {

  return (
    <nav
      className="navbar is-info"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item">
          <h1 style={{ color: "white" }} className="title">
            Celu-Max
          </h1>
        </a>

        <div className="navbar-burger" data-target="navbarElements">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="navbar-menu" id="navbarElements">
        <div className="navbar-start">
          <NavBarElements link="/" name="Celulares" />
          <NavBarElements link="/accessories" name="Accesorios" />
        </div>
      
      <div className='navbar-end' >
        <div className='navbar-item' >
          <NavLink to='/admin' className='button is-light'>Iniciar Sesion</NavLink>
        </div>
      </div>
      </div>
    </nav>
  );
};




export default navBar;
