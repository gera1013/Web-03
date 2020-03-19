import React from 'react';
import { render } from 'react-dom';
import configureStore from './configureStore'
import Root from './components/Root'

// Se importa el metodo configureStore para crear la instancia de la store
const store = configureStore();

document.body.style.margin = '0px';

// Metodo render de react-dom
render(
  <Root store={store}/>,  
  document.getElementById('root'),
);
