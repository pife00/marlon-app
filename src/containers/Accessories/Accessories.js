import React, { Component } from "react";
import AccesoriesCard from "../../components/AccessoriesCard/AccesoriesCard";
import SideMenu from '../../components/SideMenu/SideMenu'
class Accesories extends Component {
  render(h) {
    return (
      <div className="columns">
        <div className="column is-2">
          <SideMenu />
        </div>
        <div className="column is-10">
          <AccesoriesCard />
          <AccesoriesCard />
          <AccesoriesCard />
          <AccesoriesCard />
          <AccesoriesCard />
          <AccesoriesCard />
          <AccesoriesCard />
          <AccesoriesCard />
          <AccesoriesCard />
        </div>
      </div>
    );
  }
}

export default Accesories;
