import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Pages/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import AddService from "../Pages/Admin/AddService";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import CheckOut from "../Pages/Services/CheckOut";
import Cart from "../Pages/Services/Cart";
import PrivateRoute from "./PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path:"/",
          element:<Home></Home>,
          loader: ()=> fetch('https://car-doctor-server-weld-omega.vercel.app/services')
        },
        {
          path: '/about',
          element:<About/>
        },
        {
          path: '/services/:id',
          element: <Services></Services>,
          loader: ({params})=> fetch(`https://car-doctor-server-weld-omega.vercel.app/services/${params.id}`)
        },
        {
          path: '/blog',
          element: <Blog/>
        },
        {
          path: '/contact',
          element: <Contact/>
        },
        {
          path : '/addservice',
          element: <AddService/>
        },
        {
          path: '/register',
          element: <Register/>
        },
        {
          path : '/login',
          element: <Login/>
        },
        {
          path: '/checkout/:id',
          element: <PrivateRoute><CheckOut/></PrivateRoute>,
          loader: ({params})=> fetch(`https://car-doctor-server-weld-omega.vercel.app/services/${params.id}`)
        },
        {
          path: '/cartlist',
          element: <PrivateRoute><Cart/></PrivateRoute>
        }
      ]
    },
  ]);


  export default router;