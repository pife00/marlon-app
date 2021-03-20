import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Aux from "../Auxiliary";

class Layout extends Component {
  
  state = {
    elements: ["Celulares", "Accesorios"],
  };
  render(h) {
    return (
      <Aux>
        <NavBar />
        <main>
         {this.props.children}
        </main>
        
      </Aux>
    );
  }
}

export default Layout;
