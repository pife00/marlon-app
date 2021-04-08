import React, { Component } from "react";
import BigPicture from "../../components/BigPicture/BigPicture";
import Details from "../../components/Details/Details";
import { connect } from "react-redux";
import CirclePick from '../../components/UI/Cicle/Circle'

class ProductDetails extends Component {

  state={
    document:{},
  }

  componentDidMount(){

    let query = new URLSearchParams(this.props.location.search)
    let doc = {};
    for(let key of query.entries()){
      doc[key[0]] = key[1] 
    }
    if(doc.id){

      if(doc.category === 'Telefono'){
        let document = this.props.phoneDocuments.filter(el=>{
          return el.id === doc.id
        })
        this.setState({document: document})
      }

      if(doc.category === 'Accesorio'){
        let document = this.props.accessoriesDocuments.filter(el=>{
          return el.id === doc.id
        })
        this.setState({document: document})
      }
      
    }else{
      this.props.history.goBack()
    }
  }

  render(h) {
    let product = this.state.document ? { ...this.state.document[0]}:null
    let image = null;
    let details = null;

    if(product.imageUrl){
      image = <BigPicture 
      image={product.imageUrl} /> 
    }

    if(product.name){
      details = <Details product={product}/>
    }

    let colorSelect = null;

     if(product.color){
    colorSelect = (product.color.map(el=>(
      <CirclePick key={el} color={el} />
    )))
    }
      
    return (
      <div className="container mt-4">
        <div className="columns">
        <div className="column is-3 is-offset-3">
        <div className="card">
              <div className="card-image">
                <figure className=" image is-3by4">
                  {image}
                </figure>
              </div>
          </div>
        </div>
        <div className="column is-5 m-2">
         
          <h1 className='title is-uppercase has-text-light-dark' > {product.name} </h1>
          {details}
          <hr />
          <p className='subtitle' >Colores</p>
          {colorSelect}
          
        </div>
        </div>
      </div>
    );
  }
}

const mapToStateToProps = (state) => {
  return {
    phoneDocuments:state.gallery.visiblePhones,
    accessoriesDocuments:state.gallery.visibleAccessories
  };
};


export default connect(mapToStateToProps)(ProductDetails);
