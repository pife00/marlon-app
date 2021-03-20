import React, { Component } from "react";
import BigPicture from "../../components/BigPicture/BigPicture";
import Details from "../../components/Details/Details";

class ProductDetails extends Component {
  render(h) {
    return (
      <div className="container">
        <div className="columns">
          <div className="column is-2 is-offset-3">
            <BigPicture image="https://http2.mlstatic.com/D_NQ_NP_862080-MCO43816900540_102020-O.webp" />
          </div>
          <div className="column is-5">
            <Details name="Iphone XK 14" description="Sdsdss" />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
