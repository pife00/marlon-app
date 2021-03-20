import React, { Component } from "react";
import Pagination from "../../components/Pagination/Pagination";
import PhoneCard from "../../components/PhoneCard/PhoneCard";
import SideMenu from '../../components/SideMenu/SideMenu'

class Gallery extends Component {
  render(h) {
    return (
      <div className="columns">
        <div className='column is-2'>
          <SideMenu />
        </div>
        <div className='column is-10' >
          <PhoneCard />
          <PhoneCard />
          <PhoneCard />
          <PhoneCard />
          <PhoneCard />
          <PhoneCard />
          <PhoneCard />
          <PhoneCard />
          <PhoneCard />
          <PhoneCard />
          <PhoneCard />
          <PhoneCard />
          <Pagination />
        </div>
      </div>
    );
  }
}

export default Gallery;
