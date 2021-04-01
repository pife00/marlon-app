import React, { Component } from "react";
import Pagination from "../../components/Pagination/Pagination";
import PhoneCard from "../../components/PhoneCard/PhoneCard";
import SideMenu from '../../components/SideMenu/SideMenu'
import {connect} from 'react-redux';

class Gallery extends Component {


  render(h) {
    let phones = this.props.phoneDocuments.map(el=>(
      <PhoneCard 
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
        <div className='column is-2'>
          <SideMenu />
        </div>
        <div className='column is-10' >
         {phones}
        </div>
      </div>
    );
  }
}

const mapToStateProps = state =>{
  return{
    phoneDocuments:state.gallery.phones
  }
}

export default connect(mapToStateProps)(Gallery) ;
