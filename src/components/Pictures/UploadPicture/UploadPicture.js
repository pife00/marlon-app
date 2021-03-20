import React,{useState} from "react";
import {AiOutlineCloudUpload } from 'react-icons/ai';
import axios from 'axios';

const UploadPicture = (props) => {

  const [enterPhone,setPhone] = useState({
    name:'',
    storage:'',
    camera:'',
    model:'',
    category:'Iphone',
    image:null
  })

  const nameImage = enterPhone.image ? enterPhone.image.name : null

  const imageHandler = (event)=>{
    let reader = new FileReader()

    /*setPhone(state=>(
      {
        ...state,
        image:event.target.files[0]
      }
    ));*/

    reader.onload = function(event){
      setPhone(state=>(
        {
          ...state,
          image:event.target.result
        }
      ))
    }

    reader.readAsDataURL(event.target.files[0])
  }

 const sendPhoneHandler = (event) =>{

    event.preventDefault();

    let formData = new FormData();
   
    formData.append("name",enterPhone.name)
    formData.append('storage',enterPhone.storage)
    formData.append('camera',enterPhone.camera)
    formData.append('model',enterPhone.model)
    formData.append('category',enterPhone.category)
    formData.append('image',enterPhone.image)

   /* axios.post('http://localhost:4000/api/new-phone',formData)
          .then(res=>{
            console.log(res)
          }).catch(error=>{
            console.log(error)
          })*/

    //console.log(firebase)
  }

  return (  
    <div>
      <form>
        
      <div className="field">
        <label className="label MyText">Nombre</label>
        <div className="control">
          <input
            name="name"
            className="input"
            type="text"
            placeholder="Nombre del Equipo"
            
            onChange={(event)=>{
              setPhone(state=>(
                {
                  ...state,
                  name:event.target.value
                }
              ))
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
            onChange={(event=>{
              setPhone(state=>({...state,storage:event.target.value}))
            })}
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
            onChange={(event)=>{setPhone(state=>({...state,camera:event.target.value}))}}
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
            onChange={(event)=>{setPhone(state=>({...state,model:event.target.value}))}}
          />
        </div>
      </div>

      
      <div className="file is-info has-name mt-2">
        <label className="file-label">
          <input onChange={imageHandler} className="file-input" type="file" name="resume" />
          <span class="file-cta">
            <span className="file-icon">
              <AiOutlineCloudUpload />
            </span>
            <span className="file-label">Escoger Imagen</span>
          </span>
          <span className="file-name"> {nameImage} </span>
        </label>
      </div>

      <div style={{ marginTop: "5px" }} className="select mt-2">
        <select
        value={enterPhone.category}
        onChange={(event)=>{setPhone(state=>({...state,category:event.target.value}))}}
        >
          <option>Iphone</option>
          <option>Samsung</option>
          <option>Huawei</option>
          <option>Motorola</option>
          <option>Nokia</option>
        </select>
      </div>

      <div style={{ marginTop: "5px" }} className="field is-grouped  mt-2">
        <div className="control">
          <button onClick={sendPhoneHandler}  className="button is-info">Subir</button>
        </div>
        <div className="control">
          <button type='submit' className="button is-link is-light">Cancelar</button>
        </div>
      </div>
      {
        enterPhone.image ? <img src={enterPhone.image} />:null
      }
      </form>
    </div>
  );
};

export default UploadPicture;
