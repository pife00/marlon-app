import React, { useState } from "react";
import uuid from "react-uuid";
import { AiOutlineCloudUpload } from "react-icons/ai";
import firebase from "../../../firebase/firebase";
import { connect } from "react-redux";
import { BsPhone} from "react-icons/bs";
import * as actionTypes from "../../../store/actions/index";
import { FiHeadphones } from "react-icons/fi";
import {IoIosRemove} from 'react-icons/io'
import {IoIosAdd} from 'react-icons/io'
import { ChromePicker } from 'react-color'
import {IoIosRefresh} from 'react-icons/io';
import CirclePick from '../../UI/Cicle/Circle';
import InputCurrency from '../../UI/InputCurrency/InputCurrency';

const UploadPicture = (props) => {
  const [enterPhone, setPhone] = useState({
    name: "",
    storage: "",
    price: "",
    IMEI: "",
    camera: "",
    model: "",
    color:[],
    brand: "",
    visible:false,
    category: "Telefono",
  });
  const [enterFileImage, setFileImage] = useState("");
  const [color,setColor] = useState('#fff');
  const [colorPick,setColorPick] = useState([]);

  const nameImage = enterFileImage.imageName ? enterFileImage.imageName : null;

  const imageHandler =  async(event) => {
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

  const imageUploader = async (file) => {
   
    const storageRef = firebase.storage().ref("/images");
    const imageRef = storageRef.child(enterFileImage.imageName);

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
  };

  const sendPhoneHandler = async (event) => {
    event.preventDefault();
    props.onSetLoading(true);

    let category = enterPhone.category;
    let file = enterFileImage.imageFile;
    let color = [...colorPick];
    let id = uuid();
    let el = await imageUploader(file);
    let doc = {
      ...enterPhone,
      color:[...color],
      id: id,
      imageName: el.imageName,
      imageUrl: el.imageUrl,

    };

    if (doc.imageUrl !== "") {
      const db = firebase.firestore();
      const docRef = db.collection("phones").doc(id);
      docRef
        .set({
          ...doc,
        })
        .then(() => {})
        .catch((error) => {
          props.onSetLoading(false)
          console.log(error);
        });
    }
    clearPhoneState(category);
  };

  const addColor = (event) =>{
    event.preventDefault();
    let array = [];
    array.push(color.hex)
    setColorPick(prevState=>[...prevState,...array])
  }

  const removeColor = (event)=>{
    event.preventDefault();
    let array = [...colorPick];
    array.pop();
    setColorPick([...array])
  }

  const resetColor = (event) =>{
    event.preventDefault();
    setColorPick([]);
  }

  const priceHandler = (number) => {
    setPhone((state) => ({
      ...state,
      price: number,
    }));
  };

  const clearPhoneState = (category) =>{
    setPhone((prevState)=>(
      {
        ...prevState,
          name: "",
          storage: "",
          price: "",
          IMEI: "",
          camera: "",
          model: "",
          brand: "",
          category: category, 
      }
    ));
    props.onSetBigPicture(null)
    props.onSetLoading(false);
  }

  const resetAll = () => {

    let category = null

    switch(enterPhone.category){
      case 'Telefono':
        category = 'Accesorio'
        break;
      case 'Accesorio': 
        category = 'Telefono'
        break;
        default:
          category = 'Telefono'
    }

    setFileImage('');

    clearPhoneState(category)
     
    
  };

  let form = null;
  let colorSelect = null;

  if(colorPick.length > 0){
    colorSelect = (colorPick.map(el=>(
      <CirclePick key={el} color={el} />
    )))
  }

  if (enterPhone.category === "Telefono") {
    form = (
      <form onSubmit={sendPhoneHandler}>
        <div className="field">
          <label className="label MyText">Nombre</label>
          <div className="control">
            <input
              name="name"
              className="input"
              type="text"
              placeholder="Nombre del Equipo"
              onChange={(event) => {
                setPhone((state) => ({
                  ...state,
                  name: event.target.value,
                }));
              }}
              value={enterPhone.name}
            />
          </div>
        </div>

        <div className="field">
          <label className="label MyText">Capacidad</label>
          <div className="control">
            <input
              name="storage"
              className="input"
              type="text"
              placeholder="Capacidad de almacenamiento"
              value={enterPhone.storage}
              onChange={(event) => {
                setPhone((state) => ({
                  ...state,
                  storage: event.target.value,
                }));
              }}
            />
          </div>
        </div>

        <div className="field">
          <label className="label MyText">Precio</label>
          <div className="control">
            <InputCurrency 
             price={priceHandler}
             value={enterPhone.price}
            />
          </div>
        </div>

        <div className="field">
          <label className="label MyText">IMEI</label>
          <div className="control">
            <input
              name="storage"
              className="input"
              type="text"
              placeholder="IMEI del telefono"
              value={enterPhone.IMEI}
              onChange={(event) => {
                setPhone((state) => ({ ...state, IMEI: event.target.value }));
              }}
            />
          </div>
        </div>

        <div className="field">
          <label className="label MyText">Camara</label>
          <div className="control">
            <input
              name="camera"
              className="input"
              type="text"
              placeholder="Camara en Megapixeles"
              value={enterPhone.camera}
              onChange={(event) => {
                setPhone((state) => ({ ...state, camera: event.target.value }));
              }}
            />
          </div>
        </div>

        <div className="field">
          <label className="label MyText">Modelo</label>
          <div className="control">
            <input
              name="model"
              className="input"
              type="text"
              placeholder="Modelo del Equipo"
              value={enterPhone.model}
              onChange={(event) => {
                setPhone((state) => ({ ...state, model: event.target.value }));
              }}
            />
          </div>
        </div>

        <div className="field">
          <ChromePicker color={color} onChange={(event)=>{
            setColor(event)}} />
          <div className="">
          <button onClick={removeColor} className='button mt-1 is-white' >
            <span>
            <IoIosRemove size='2.0rem' />
            </span>
          </button>

          <button onClick={addColor} className='button mt-1 is-white' >
            <span>
            <IoIosAdd size='2.0rem' />
            </span>
          </button>

          <button onClick={resetColor} className='button mt-1 is-white' >
            <span>
            <IoIosRefresh size='1.5rem' />
            </span>
          </button>

          </div>
          <br />
          {colorSelect}
        </div>

        <div className="field">
          <label className="label MyText">Imagen</label>

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

        <div style={{ marginTop: "5px" }} className="select mt-2">
          <select
          value={enterPhone.brand}
            onChange={(event) => {
              setPhone((state) => ({ ...state, brand: event.target.value }));
            }}
          >
            {" "}
            <option disabled ></option>
            <option>Iphone</option>
            <option>Samsung</option>
            <option>Huawei</option>
            <option>Motorola</option>
            <option>Nokia</option>
          </select>
        </div>

        <div style={{ marginTop: "5px" }} className="field is-grouped  mt-2">
          <div className="control">
          </div>
          <div className="control">
            <button disabled={enterFileImage ? false:true} type="submit" className="button is-link is-light">
              Subir
            </button>
          </div>
        </div>
      </form>
    );
  }

  if (enterPhone.category === "Accesorio") {
    form = (
      <form onSubmit={sendPhoneHandler} >
        <div className="field">
          <label className="label MyText">Nombre</label>
          <div className="control">
            <input
              name="name"
              className="input"
              type="text"
              placeholder="Nombre del Accesorio"
              onChange={(event) => {
                setPhone((state) => ({
                  ...state,
                  name: event.target.value,
                }));
              }}
              value={enterPhone.name}
            />
          </div>
        </div>

        <div className="field">
          <label className="label MyText">Precio</label>
          <div className="control">
            <input
              name="storage"
              className="input"
              type="number"
              placeholder="Precio"
              value={enterPhone.price}
              onChange={(event) => {
                setPhone((state) => ({
                  ...state,
                  price: parseInt(event.target.value),
                }));
              }}
            />
          </div>
        </div>

        <div className="field">
          <label className="label MyText">Modelo</label>
          <div className="control">
            <input
              name="model"
              className="input"
              type="text"
              placeholder="Modelo del Accesorio"
              value={enterPhone.model}
              onChange={(event) => {
                setPhone((state) => ({ ...state, model: event.target.value }));
              }}
            />
          </div>
        </div>

        <div className="field">
          <label className="label MyText"> Imagen </label>
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
        <div className="field">
          <label className="label MyText">Marca</label>
          <div className="control">
            <input
              name="model"
              className="input"
              type="text"
              placeholder="Marca del Accesorio"
              value={enterPhone.brand}
              onChange={(event) => {
                setPhone((state) => ({ ...state, brand: event.target.value }));
              }}
            />
          </div>
        </div>

        <div style={{ marginTop: "5px" }} className="field is-grouped  mt-2">
          <div className="control">
          </div>
          <div className="control">
            <button disabled={enterFileImage ? false:true} type="submit" className="button is-link is-light">
              Subir
            </button>
          </div>
        </div>
      </form>
    );
  }


  return (
    <div>
      <div className="field">
      <button disabled={enterPhone.category !== 'Accesorio'} onClick={resetAll} className='button is-white mr-1'>
      <BsPhone size="3em" color='hsl(204, 86%, 53%)' />
      </button>
      <button disabled={enterPhone.category !== 'Telefono'} onClick={resetAll} className='button is-white'>
      <FiHeadphones size="3em" color='hsl(204, 86%, 53%)' />
      </button>
      </div>
      <hr style={{backgroundColor:"hsl(204, 80%, 83%)"}} />
      {form}
    </div>
  );
};

const maptoDispatchToProps = (dispatch) => {
  return {
    onSetBigPicture: (image) => dispatch(actionTypes.setBigPicture(image)),
  };
};

export default connect(null, maptoDispatchToProps)(UploadPicture);
