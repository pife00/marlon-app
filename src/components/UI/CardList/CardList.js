import React,{useState,useEffect} from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import {AiOutlineEdit} from 'react-icons/ai'
import {AiOutlineDelete} from 'react-icons/ai'
import { GrFormViewHide } from "react-icons/gr";
import {AiOutlineCheck} from 'react-icons/ai';
import { GrFormView } from "react-icons/gr";
import {connect} from 'react-redux';
import firebase from '../../../firebase/firebase';
import InputCurrency from '../InputCurrency/InputCurrency';
import * as actionTypes from '../../../store/actions/index';
import Modal from '../../UI/Modal/Modal';
const CardList = (props) => {

  const [enterProduct,setProduct] = useState({
    name: "",
    storage: "",
    price: "",
    IMEI: "",
    camera: "",
    model: "",
    color:[],
    brand: "",
    visible:null,
    category: "",
  });

  const [enterEdit,setEdit] = useState(false);
  const nameImage = enterProduct.imageName ? enterProduct.imageName : null;
  const [enterFileImage, setFileImage] = useState("");

  const imageHandler = (event) => {
    let file = event.target.files[0];
    let fileName = event.target.files[0].name;
    let filePreview = URL.createObjectURL(file);

    props.onSetBigPicture(filePreview);

    setFileImage((state) => ({
      ...state,
      imageFile: file,
      imageName: fileName,
    }));
  };

  const priceHandler = (number) =>{
    setProduct((state)=>(
      {
        ...state,
        price:number
      }
    ))
  }


  useEffect(()=>{
    setProduct(props.product)
  },[]);


  let editOnHidden = enterEdit == true ? {display:'none'}:{};
  let editOffHidden = !enterEdit == true ? {display:'none'}:{};
 

  const updatetHandler = () =>{

    const db = firebase.firestore();
    const docRef = db.collection("phones").doc(enterProduct.id );
    let setDoc = docRef
      .set({
        ...enterProduct,
      })
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });

      setEdit(!enterEdit);
      props.onPhoneInit();

  }

  const editHandler = () =>{
    setEdit(true);
  }

  const deleteProduct = () =>{
    const imageName = props.product.imageName
    const db = firebase.firestore();
    const storage = firebase.storage();
    const storeRef = storage.ref();
    const deleteRef = storeRef.child("/images/"+imageName);
    deleteRef.delete()
      .then(res=>{
        console.log('image deleted')
      }).catch(error=>{
        console.log(error);
      })

      const docRef = db.collection('phones').doc(props.product.id)
        .delete()
        .then(res=>{
          console.log('doc delete');
        }).catch(error=>{
          console.log(error);
        })

        props.onPhoneInit();  
  }

  const inputHandler = (event,el) =>{
    setProduct((state)=>({
      ...state,
      [el]:event.target.value
    }))
  }
  
  let form = null;
  
  if(enterProduct.category){
    form = (
    <header>
       <Modal>
         <div className='contaier' style={{
           width:'400px',
           height:'550px',
           backgroundColor:'white'
         }} >
          <img className='image is-200x200 ml-6' src={enterProduct.imageUrl} />

          <div className="field m-2">
          

          <div className="file is-info has-name mt-2">
            <label className="file-label">
              <input
                onChange={imageHandler}
                className="file-input"
                type="file"
                name="resume"
              />
              <span className="file-cta">
                <span className="file-icon">
                  <AiOutlineCloudUpload />
                </span>
                <span className="file-label">Escoger Imagen</span>
              </span>
              <span className="file-name"> {nameImage} </span>
            </label>
          </div>
        </div>

         </div>

        </Modal>

        <div className="columns">
          <div className="column is-1">
            <h1 className="card-header-title">Imagen</h1>
            <img className='image is-64x64 ml-3' src={enterProduct.imageUrl} ></img>
          </div>

          <div className="column">
            <h1 className="card-header-title">Nombre</h1>
            <p 
            style={editOnHidden}
            className="ml-4">{enterProduct.name}</p>
            <input
            style={editOffHidden}
            className="input" 
            type="text" 
            value={enterProduct.name}
            onChange={(event)=>inputHandler(event,'name')}
            />
          </div>

          <div className="column ">
            <h1 className="card-header-title">Capacidad</h1>
            <p style={editOnHidden} className="ml-4">{enterProduct.storage} GB</p>
            <input
            style={editOffHidden}
            className="input" 
            type="text" 
            value={enterProduct.storage}
            onChange={(event)=>inputHandler(event,'storage')}
            />
          </div>

          <div className="column">
            <h1 className="card-header-title">Camara</h1>
            <p style={editOnHidden} className="ml-4">{enterProduct.camera} mpx</p>
            <input
            style={editOffHidden}
            className="input" 
            type="text" 
            value={enterProduct.camera}
            onChange={(event)=>inputHandler(event,'camera')}
            />
          </div>

          <div className="column">
            <h1 className="card-header-title">Price</h1>
            <p style={editOnHidden} className="ml-4">{
            new Intl.NumberFormat().format(enterProduct.price)
            }
            </p>
            <InputCurrency 
            style={editOffHidden} 
            price={priceHandler} 
            value={enterProduct.price} />
          </div>

          <div className="column ">
            <h1 className="card-header-title">Modelo</h1>
            <p style={editOnHidden} className="ml-4">{enterProduct.model}</p>
            <input
            style={editOffHidden}
            className="input" 
            type="text" 
            value={enterProduct.model}
            onChange={(event)=>inputHandler(event,'model')}
            />
          </div>

          <div className="column ">
            <h1 className="card-header-title">Accion</h1>

            <button 
            style={editOnHidden}
            onClick={editHandler} className='button is-white' >
              <span>
                <AiOutlineEdit size='1.2rem' />
              </span>
            </button>

            <button 
            style={editOffHidden}
            onClick={updatetHandler} className='button is-white' >
              <span>
                <AiOutlineCheck size='1.2rem' />
              </span>
            </button>

            <button className='button is-white' >
              <span>
                <GrFormView size='1.2rem' />
              </span>
            </button>

            <button onClick={deleteProduct} className='button is-white' >
              <span>
                <AiOutlineDelete size='1.2rem' />
              </span>
            </button>
          </div>
        </div>
       
      </header>
    )
  }

  return (
    <div className="card mt-4">
      {form}
    </div>
  );
};

const maptoDispatchToProps = dispatch =>{
  return{
    onPhoneInit:()=>dispatch(actionTypes.phoneDocumentsInit())
  }
}

export default connect(null,maptoDispatchToProps)(CardList);
