import * as actionTypes from "../actions/actionTypes";
import {createStore} from 'redux';
import gallery from './gallery';

const store = createStore(gallery)

const initialState = {
  product: null,
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
      case actionTypes.SET_PRODUCT_DETAILS:
        let doc = {
          ...state,
          product:actions.id
        }
        console.log(doc)
          return{
              ...state,
              product:actions.productId
          }
    default:
      return state;
  }
};

export default reducer;