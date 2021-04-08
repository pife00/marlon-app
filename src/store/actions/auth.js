import * as actionTypes from "./actionTypes";

const API = "AIzaSyDhXsI95dNWf-UY3zquJCrp-RKHGv7hX10";
//const signUp ="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API;
const signIn =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
  API;

export const userInit = (user) => {
  return async (dispatch) => {

    const data = await fetch(signIn, {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "aplication/json" },
    }).then((response) => {
      return response.json();
    });
    
    if(data.localId){
      dispatch(getUser(data))
    }else{
      dispatch(errorUser(data.error.message))
    }
  };
};

export const getUser = (user) => {
  return {
    type: actionTypes.SET_USER,
    user: user,
  };
};

export const errorUser = (error) => {
  return {
    type: actionTypes.SET_USER_ERROR,
    error: error,
  };
};

export const cleanUser = () =>{
  return {
    type: actionTypes.CLEAN_USER,
  }
}
