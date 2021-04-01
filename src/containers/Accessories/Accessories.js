import React, { Component } from "react";
import AccesoriesCard from "../../components/AccessoriesCard/AccesoriesCard";
import SideMenu from '../../components/SideMenu/SideMenu'
import {connect} from 'react-redux';

class Accesories extends Component {
  render(h) {

    console.log(this.props.accessoriesDocuments)
    let accessories = this.props.accessoriesDocuments.map(el=>(
      <AccesoriesCard 
      key={el.id}
      id={el.id}
      storage={el.storage}
      camera={el.camera}
      name={el.name} 
      category={el.category}
      source={el.imageUrl}
      price={el.price}
      alter={el.imageName}
      />
    ))

    return (
      <div className="columns">
        <div className="column is-2">
          <SideMenu />
        </div>
        <div className="column is-10">
          {accessories}
        </div>
      </div>
    );
  }
}

const mapToStateProps = state =>{
  return{
    accessoriesDocuments:state.gallery.accessories
  }
}

export default connect(mapToStateProps)(Accesories);
