import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Routes/Routes.jsx'
import {
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './AuthProvider/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-screen-xl mx-auto'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
)
