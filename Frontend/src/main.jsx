import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CreateBlog from "./pages/CreateBlog";
import SingleBlog from "./pages/SingleBlog";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
      
        <Navbar />
        <Home/>
        <Footer/>
      </div>
    ),
    children: [],
  },

  {
    path: "/create",
    element: (
      <div>
        <Navbar />
        <CreateBlog />
        <Footer />
      </div>
    ),
  },
  {
    path: "/post/:id",
    element: (
      <div>
        <Navbar />
        <SingleBlog />
        <Footer />
      </div>
    ),
  },

  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
