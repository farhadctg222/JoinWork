import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {RouterProvider} from "react-router-dom";
import "./index.css";
import router from './Route.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className='p-5'>
   <RouterProvider
   router={router}>

   </RouterProvider>
   </div>
  </React.StrictMode>,
)
