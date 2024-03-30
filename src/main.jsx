import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '../src/App.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './components/root/Root';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/reguster/Register';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
      },
      {
         path:'/login',
         element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
