import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css'

import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore,combineReducers,compose,applyMiddleware} from 'redux';

import galleryReducer from './store/reducers/gallery'
import bigPicture from './store/reducers/bigPicture';
import auth from './store/reducers/auth';

import thunk from 'redux-thunk'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//axios.defaults.baseURL=''

const composeEnhancers = 
process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:null || compose;

const rootReducer = combineReducers({
  gallery:galleryReducer,
  bigPicture:bigPicture,
  auth: auth,
})

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

ReactDOM.render(
  <Provider store={store} >
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
