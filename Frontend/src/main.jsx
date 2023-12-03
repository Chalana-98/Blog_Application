
import React, { useContext } from "react";

import * as ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import { ContextProvider } from "./contexts/ContextProvider";
import { AuthContextProvider } from "./contexts/authContext/AuthContext";
import { AuthContext } from "./contexts/authContext/AuthContext";
import App from "./App";





ReactDOM.createRoot(document.getElementById("root")).render(

  <AuthContextProvider>
    <ContextProvider>
    <BrowserRouter>
      <App/>
      </BrowserRouter>
    </ContextProvider>
  </AuthContextProvider>
);
