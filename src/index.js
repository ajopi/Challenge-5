import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from './Pages/Layout';

import store from './Redux/store/store'

import { Provider } from 'react-redux';


store.subscribe(() =>{
  console.log(store.getState(), "ini adalah data API");
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout />
      
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

