import React, { Component } from "react";
import AccesoriesCard from "../../components/AccessoriesCard/AccesoriesCard";
import SideMenu from '../../components/SideMenu/SideMenu'
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions/index'
class Accesories extends Component {
  componentDidMount(){
    this.props.onAccessoriesInit()
  }
  render(h) {

    let accessories = null;

    if(this.props.accessoriesDocuments){
        accessories = this.props.accessoriesDocuments.map(el=>(
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
    }

    

    if (this.props.searchAccessories.length > 0 && this.props.accessoriesDocuments) {
      accessories = this.props.searchAccessories.map(el=>(
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
    }

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
    accessoriesDocuments:state.gallery.visibleAccessories,
    searchAccessories:state.gallery.searchAccessories,
  }
}

const maptoDispatchToProps = (dispatch) => {
  return{
    onAccessoriesInit:()=> dispatch(actionTypes.accessoriesVisibleInit())
  }
}

export default connect(mapToStateProps,maptoDispatchToProps)(Accesories);
