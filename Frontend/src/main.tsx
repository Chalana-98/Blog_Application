import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/LoginPage.tsx';
import RegisterPage from './pages/RegisterPage.tsx';
import CreateBlog from './pages/CreateBlog.tsx';
import Navbar from './components/Navbar.tsx';
import SingleBlog from './pages/SingleBlog.tsx';
import Footer from './components/Footer.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Navbar/>
      <App/>
      <Footer/>
      </div>,
      children:[
      
      ]
  },

  {
    path: "/create",
    element: <div>
      <Navbar/>
      <CreateBlog/>
      <Footer/>
      </div>,
  },
  {
    path: "/post/:id",
    element: <div>
      <Navbar/>
      <SingleBlog/>
      <Footer/>
    </div> ,
  },


  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/register",
    element: <RegisterPage/>,
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

