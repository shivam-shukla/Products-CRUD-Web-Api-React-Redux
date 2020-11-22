import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import ProductReducer from './reducers/productReducer';
import {Provider} from 'react-redux'
import { products } from './products'

let initialState = products;

if( localStorage.getItem("Products") === null)
localStorage.setItem('Products',JSON.stringify(initialState));
else 
initialState = JSON.parse(localStorage.getItem('Products'));

const store = createStore(ProductReducer,initialState);


ReactDOM.render(
<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
