import React from 'react';
import { render } from 'react-dom';
import configureStore from './configureStore'
import Root from './components/Root'

const store = configureStore();


document.body.style.margin = '0px';

render(
  <Root store={store}/>,  
  document.getElementById('root'),
);
