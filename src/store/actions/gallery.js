import * as actionTypes from "./actionTypes";
import firebase from "../../firebase/firebase";

export const phoneDocumentsInit = () => {
  return (dispatch) => {
    const db = firebase.firestore();
    const docRef = db.collection("phones").onSnapshot((snapshot) => {
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
      
      dispatch(setPhoneDocuments(telefonos,accesorios));
    })
  };
};

export const setPhoneDocuments = (phones,accessories) => {
  return {
    type: actionTypes.SET_PHONE_DOCUMENTS,
    phones: phones,
    accessories:accessories
  };
};
