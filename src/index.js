import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/NavBar';

let props = {
  brand : "Appedido!",
  categorias : ["categoria1", "categoria2"]
}
ReactDOM.render(
  <React.StrictMode>
    <Navbar {...props}/>
  </React.StrictMode>,  
  document.getElementById('root')
);