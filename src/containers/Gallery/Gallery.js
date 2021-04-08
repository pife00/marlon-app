import React, { Component } from "react";
import PhoneCard from "../../components/PhoneCard/PhoneCard";
import SideMenu from "../../components/SideMenu/SideMenu";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/index";

class Gallery extends Component {

  componentDidMount(){
    this.props.onPhonesVisible();
  }


  render(h) {
    let phones = null;


    if(this.props.phoneDocuments){

      phones = this.props.phoneDocuments.map((el) => (
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
      ));
    }

    if (this.props.searchPhone.length > 0 && this.props.phoneDocuments) {

      phones = this.props.searchPhone.map((el) => (
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
      ));
    }
    

    return (
      
      <div className="columns">
        <div className="column is-2">
          <SideMenu />
        </div>
        <div className="column is-8 is-half">
          {phones}</div>
        <div className="column is-2"></div>
      </div>
    );
  }
}

const mapToStateProps = (state) => {
  return {
    phoneDocuments: state.gallery.visiblePhones,
    searchPhone: state.gallery.searchPhone,
  };
};

const maptoDispatchToProps = dispatch =>{
  return{
    onPhonesVisible:()=>dispatch(actionTypes.phoneVisibleInit())
  }
}

export default connect(mapToStateProps,maptoDispatchToProps)(Gallery);
