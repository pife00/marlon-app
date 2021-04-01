import React,{useRef} from "react";
import NavBarElements from "./NavBarElements/NavBarElements";
import {NavLink} from 'react-router-dom';
import { AiOutlineUser } from "react-icons/ai";

const NavBar = (props) => {

  const nav = useRef(null); 

  const navBarHandler = () =>{
    const span = nav.current;
    let toogleNav =' navbar-menu';
    switch(span.className){
      case 'navbar-menu':
        span.className = 'navbar-menu is-active';
        break;

      case 'navbar-menu is-active':
        span.className = 'navbar-menu';
        break;

        default:
          span.className = 'navbar-menu'

    }

  }

  return (
    <nav
      className="navbar is-info"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <NavLink to='/' className="navbar-item">
          <h1 style={{ color: "white" }} className="title">
            Celu-Max
          </h1>
        </NavLink>

        <div onClick={navBarHandler} className="navbar-burger" data-target="navbarElements">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div ref={nav} className="navbar-menu" id="navbarElements">
        <div className="navbar-start">
          <NavBarElements link="/" name="Celulares" />
          <NavBarElements link="/accessories" name="Accesorios" />
        </div>
      
      <div className='navbar-end' >
        <div className='navbar-item' >
          <NavLink to='/admin' className='button is-info'>
          <AiOutlineUser size='2.0rem' />
          </NavLink>
        </div>
      </div>
      </div>
    </nav>
  );
};




export default NavBar;
