import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import "./index.css";
import Main from './Componet/Main';
import Home from './Componet/Home';



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <h1>404</h1>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    },
  ]);
  export default router