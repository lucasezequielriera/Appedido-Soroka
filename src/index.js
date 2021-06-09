import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/layout/Layout';
import ItemListContainer from './components/item-list-container/ItemListContainer';
import "./styles.css";
import './fonts/Ubuntu-Regular.woff2';
import './fonts/Ubuntu-Bold.woff2';


ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <ItemListContainer/>
    </Layout>
  </React.StrictMode>,  
  document.getElementById('root')
);