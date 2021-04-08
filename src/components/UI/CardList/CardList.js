import React, { useState, useEffect } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import {GrHide} from 'react-icons/gr';
import { AiOutlineCheck } from "react-icons/ai";
import { GrFormView } from "react-icons/gr";
import { connect } from "react-redux";
import firebase from "../../../firebase/firebase";
import InputCurrency from "../InputCurrency/InputCurrency";
import * as actionTypes from "../../../store/actions/index";
import Modal from "../../UI/Modal/Modal";

const CardList = (props) => {
  const [enterProduct, setProduct] = useState({
    name: "",
    storage: "",
    price: "",
    IMEI: "",
    camera: "",
    model: "",
    color: [],
    brand: "",
    visible: null,
    category: "",
  });

  const [enterEdit, setEdit] = useState(false);
  const [enterFileImage, setFileImage] = useState("");
  const [modal,setModal] = useState('modal');
  const nameImage = enterFileImage.imageName ? enterFileImage.imageName : null;

  const imageHandler = (event) => {
    let file = event.target.files[0];
    let fileName = event.target.files[0].name;
    let filePreview = URL.createObjectURL(file);

    //props.onSetBigPicture(filePreview);

    setFileImage((state) => ({
      ...state,
      imageFile: file,
      imageName: fileName,
      imagePreview: filePreview,
    }));
  };

  const imageGetUrl = async () =>{

    const imageName = enterFileImage.imageName;
    const file = enterFileImage.imageFile
    const storageRef = firebase.storage().ref("/images");
    const imageRef = storageRef.child(imageName);

    return imageRef.put(file).then((snapshot) => {
      return snapshot.ref
        .getDownloadURL()
        .then((url) => {
          return {
            imageName: enterFileImage.imageName,
            imageUrl: url,
          };
        })
        .catch((error) => {
          console.log(error);
          return false;
        });
    });
  }
  
  useEffect(() => {
    setProduct(props.product);
  }, [props.product]);

  const imageUploader = async () => {

   let url = null
   const imageNameToDelete = enterProduct.imageName;
   const db = firebase.firestore(); 
    
   const storage = firebase.storage();
   const storeRef = storage.ref();
   const deleteRef = storeRef.child("/images/" + imageNameToDelete);
   deleteRef
    .delete()
    .then((res) => {
      console.log("image deleted");
    })
    .catch((error) => {
      console.log(error);
    });
    
    url = await imageGetUrl()

    let doc = {
        ...enterProduct,
        imageName: url.imageName,
        imageUrl: url.imageUrl,
      }

    const docRef = db.collection("phones").doc(doc.id);
     docRef
      .set({
        ...doc,
      })
      .then(() => {
        console.log('update image')
      })
      .catch((error) => {
        console.log(error);
      });

      setModal('modal');
      props.onPhoneInit();
  };

  const priceHandler = (number) => {
    setProduct((state) => ({
      ...state,
      price: number,
    }));
  };


  let editOnHidden = enterEdit === true ? { display: "none" } : {};
  let editOffHidden = !enterEdit === true ? { display: "none" } : {};
  
  const visibleHandler = () =>{
    let doc = {
      ...enterProduct,
      visible:!enterProduct.visible
    }

    const db = firebase.firestore();
    const docRef = db.collection("phones").doc(doc.id);
    docRef
      .set({
        ...doc,
      })
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });

      props.onPhoneInit();

  }

  let isVisible = (
    <button onClick={visibleHandler}  className="button is-white">
    {enterProduct.visible 
    ?<GrHide size="1.2rem" />
    :<GrFormView size="1.2rem" /> 
    }            
    </button>
  );

 const modalHandler = (payload) =>{
    setModal(payload);
  }
  
  const updatetHandler = () => {
    const db = firebase.firestore();
    const docRef = db.collection("phones").doc(enterProduct.id);
    docRef
      .set({
        ...enterProduct,
      })
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });

    setEdit(!enterEdit);
    props.onPhoneInit();
  };

  const editHandler = () => {
    setEdit(true);
  };

  const deleteProduct = () => {
    const imageName = props.product.imageName;
    const db = firebase.firestore();
    const storage = firebase.storage();
    const storeRef = storage.ref();
    const deleteRef = storeRef.child("/images/" + imageName);
    deleteRef
      .delete()
      .then((res) => {
        console.log("image deleted");
      })
      .catch((error) => {
        console.log(error);
      });

       db
      .collection("phones")
      .doc(props.product.id)
      .delete()
      .then((res) => {
        console.log("doc delete");
      })
      .catch((error) => {
        console.log(error);
      });

    props.onPhoneInit();
  };

  const inputHandler = (event, el) => {
    setProduct((state) => ({
      ...state,
      [el]: event.target.value,
    }));
  };

  let form = null;

  let modalOn = (
    <Modal closeModal={modalHandler} modalStatus={modal} >
        <div className="card">
          <div className="card-image">
            <figure className="image is-square">
              {enterFileImage.imagePreview ? (
                <img src={enterFileImage.imagePreview} alt={enterFileImage.imageName} />
              ) : (
                <img src={enterProduct.imageUrl} alt={enterFileImage.imageName} />
              )}
            </figure>
          </div>
          <div className="card-content">
            <div className="content field m-2">
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
                    <span className="file-label"></span>
                  </span>
                  <span className="file-name"> {nameImage} </span>
                  <button onClick={imageUploader} className='button is-success ml-2' >Enviar</button>
                </label>
              </div>
            </div>
          </div>
        </div>
      </Modal>
  )

  if (enterProduct.category === 'Telefono') {
    form = (
      <header>
        {modalOn}

        <div className="columns">
          <div className="column is-1">
            <h1 className="card-header-title">Imagen</h1>
            <img alt={enterFileImage.imageName}
              className="image is-64x64 ml-3"
              src={enterProduct.imageUrl}
            ></img>
            <button onClick={()=>setModal('modal is-active')} 
            className='button is-small ml-3'>Cambiar</button>
          </div>

          <div className="column">
            <h1 className="card-header-title">Nombre</h1>
            <p style={editOnHidden} className="ml-4">
              {enterProduct.name}
            </p>
            <input
              style={editOffHidden}
              className="input"
              type="text"
              value={enterProduct.name}
              onChange={(event) => inputHandler(event, "name")}
            />
          </div>

          <div className="column ">
            <h1 className="card-header-title">Capacidad</h1>
            <p style={editOnHidden} className="ml-4">
              {enterProduct.storage} GB
            </p>
            <input
              style={editOffHidden}
              className="input"
              type="text"
              value={enterProduct.storage}
              onChange={(event) => inputHandler(event, "storage")}
            />
          </div>

          <div className="column">
            <h1 className="card-header-title">Camara</h1>
            <p style={editOnHidden} className="ml-4">
              {enterProduct.camera} mpx
            </p>
            <input
              style={editOffHidden}
              className="input"
              type="text"
              value={enterProduct.camera}
              onChange={(event) => inputHandler(event, "camera")}
            />
          </div>

          <div className="column">
            <h1 className="card-header-title">Price</h1>
            <p style={editOnHidden} className="ml-4">
              {new Intl.NumberFormat().format(enterProduct.price)}
            </p>
            <InputCurrency
              style={editOffHidden}
              price={priceHandler}
              value={enterProduct.price}
            />
          </div>

          <div className="column ">
            <h1 className="card-header-title">Modelo</h1>
            <p style={editOnHidden} className="ml-4">
              {enterProduct.model}
            </p>
            <input
              style={editOffHidden}
              className="input"
              type="text"
              value={enterProduct.model}
              onChange={(event) => inputHandler(event, "model")}
            />
          </div>

          <div className="column ">
            <h1 className="card-header-title">Accion</h1>

            <button
              style={editOnHidden}
              onClick={editHandler}
              className="button is-white"
            >
              <span>
                <AiOutlineEdit size="1.2rem" />
              </span>
            </button>

            <button
              style={editOffHidden}
              onClick={updatetHandler}
              className="button is-white"
            >
              <span>
                <AiOutlineCheck size="1.2rem" />
              </span>
            </button>

            {isVisible}

            <button onClick={deleteProduct} className="button is-white">
              <span>
                <AiOutlineDelete size="1.2rem" />
              </span>
            </button>
          </div>
        </div>
      </header>
    );
  }

  if (enterProduct.category === 'Accesorio') {
    form = (
      <header>
        {modalOn}

        <div className="columns">
          <div className="column is-1">
            <h1 className="card-header-title">Imagen</h1>
            <img alt={enterFileImage.imageName}
              className="image is-64x64 ml-3"
              src={enterProduct.imageUrl}
            ></img>
            <button onClick={()=>setModal('modal is-active')} 
            className='button is-small ml-3'>Cambiar</button>
          </div>

          <div className="column">
            <h1 className="card-header-title">Nombre</h1>
            <p style={editOnHidden} className="ml-4">
              {enterProduct.name}
            </p>
            <input
              style={editOffHidden}
              className="input"
              type="text"
              value={enterProduct.name}
              onChange={(event) => inputHandler(event, "name")}
            />
          </div>


          <div className="column">
            <h1 className="card-header-title">Price</h1>
            <p style={editOnHidden} className="ml-4">
              {new Intl.NumberFormat().format(enterProduct.price)}
            </p>
            <InputCurrency
              style={editOffHidden}
              price={priceHandler}
              value={enterProduct.price}
            />
          </div>

          <div className="column ">
            <h1 className="card-header-title">Modelo</h1>
            <p style={editOnHidden} className="ml-4">
              {enterProduct.model}
            </p>
            <input
              style={editOffHidden}
              className="input"
              type="text"
              value={enterProduct.model}
              onChange={(event) => inputHandler(event, "model")}
            />
          </div>

          <div className="column ">
            <h1 className="card-header-title">Accion</h1>

            <button
              style={editOnHidden}
              onClick={editHandler}
              className="button is-white"
            >
              <span>
                <AiOutlineEdit size="1.2rem" />
              </span>
            </button>

            <button
              style={editOffHidden}
              onClick={updatetHandler}
              className="button is-white"
            >
              <span>
                <AiOutlineCheck size="1.2rem" />
              </span>
            </button>

            {isVisible}

            <button onClick={deleteProduct} className="button is-white">
              <span>
                <AiOutlineDelete size="1.2rem" />
              </span>
            </button>
          </div>
        </div>
      </header>
    );
  }

  return <div className="card mt-4">
    {enterProduct.visible 
    ?<span className="tag is-info">Visible</span>
    :<span className="tag is-danger">No Visible</span>  }
    {form}
    </div>;
};

const maptoDispatchToProps = (dispatch) => {
  return {
    onPhoneInit: () => dispatch(actionTypes.documentsInit()),
  };
};

export default connect(null, maptoDispatchToProps)(CardList);
