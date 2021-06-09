import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar/NavBar';
import ItemListContainer from './components/item-list-container/ItemListContainer';
import "./styles.css";
import './fonts/Ubuntu-Regular.woff2';
import './fonts/Ubuntu-Bold.woff2';

let props = {
  brand : "Appedido !",
  categories : ["Articulos para el hogar", "Smartphones", "Linea blanca"]
}
ReactDOM.render(
  <React.StrictMode>
    <Navbar {...props}/>
    <ItemListContainer/>
  </React.StrictMode>,  
  document.getElementById('root')
);