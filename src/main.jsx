import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Header from './components/Header/Header.jsx';
import TestFile from './components/TestFile/TestFile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
    errorElement: <h1>error</h1>,
    children:[
      {
        path:"/react",
        element: <h1>react</h1>,
      },
      {
        path:"/about",
        element: <TestFile/>,
      },
      {
        path:"/",
        element: <Header/>,
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
