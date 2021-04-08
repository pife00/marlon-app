import * as actionTypes from "./actionTypes";
import firebase from "../../firebase/firebase";



export const phoneVisibleInit = () =>{
  return (dispatch) => {
    const db = firebase.firestore();
     db.collection("phones").where("visible","==",true).where("category","==","Telefono")
    .get()
    .then((snapshot) => {
      const documents = [];
      snapshot.forEach((doc) => {
        documents.push(doc.data());
      });
      const telefonos = documents;
      
      dispatch(setVisiblePhoneDocuments(telefonos));

    })
  };
}

export const setVisiblePhoneDocuments = (phones) => {
  return {
    type: actionTypes.SET_VISIBLE_PHONE_DOCUMENTS,
    phones: phones,
  };
};


export const accessoriesVisibleInit = () =>{
  return (dispatch) => {
    const db = firebase.firestore();
     db.collection("phones").where("visible","==",true).where("category","==","Accesorio")
    .get()
    .then((snapshot) => {
      const documents = [];
      snapshot.forEach((doc) => {
        documents.push(doc.data());
      });
      const accesorios = documents; 
      dispatch(setVisibleAccessoriesDocuments(accesorios));
    })
  };
}

export const setVisibleAccessoriesDocuments = (accessories) => {
  return {
    type: actionTypes.SET_VISIBLE_ACCESSORIES_DOCUMENTS,
    accessories:accessories
  };
};



export const documentsInit = () => {
  return (dispatch) => {
    const db = firebase.firestore();
    db.collection("phones").onSnapshot((snapshot) => {
      const documents = [];
      snapshot.forEach((doc) => {
        documents.push(doc.data());
      });
      const telefonos = documents.filter(el=>{
        return el.category === 'Telefono'
      })

      const accesorios = documents.filter(el=>{
        return el.category === 'Accesorio'
      })
      
      dispatch(setDocuments(telefonos,accesorios));
    })
  };
};

export const setDocuments = (phones,accessories) => {
  return {
    type: actionTypes.SET_VISIBLE_DOCUMENTS,
    phones: phones,
    accessories:accessories
  };
};

export const searchPhone = (phone,accessories) => {
  return{
    type: actionTypes.SEARCH_PHONE,
    phone:phone,
    accessories:accessories
  }
}
