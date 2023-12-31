import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from 'src/redux/Store/store.js'
import { setupListeners } from '@reduxjs/toolkit/dist/query/index.js'
setupListeners(store.dispatch);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
   
  </React.StrictMode>,
)
