
import React, { useContext } from "react";

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
import { ContextProvider } from "./contexts/ContextProvider";
import { AuthContextProvider } from "./contexts/authContext/AuthContext";
import { AuthContext } from "./contexts/authContext/AuthContext";
import App from "./App";





ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <ContextProvider>
      <App/>
    </ContextProvider>
  </AuthContextProvider>
);
