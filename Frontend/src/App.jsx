import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import React, { useContext } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CreateBlog from "./pages/CreateBlog";
import SingleBlog from "./pages/SingleBlog";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Home from "./pages/Home";

import { AuthContext } from "./contexts/authContext/AuthContext";

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/home" /> : <LoginPage />} />
        {user && (
          <>
            <Route
              path="/home"
              element={
                <>
                  <Navbar />
                  <Home />
                  <Footer />
                </>
              }
            />
            <Route
              path="/create"
              element={
                <>
                  <Navbar />
                  <CreateBlog />
                  <Footer />
                </>
              }
            />
            <Route
              path="/post/:id"
              element={
                <>
                  <Navbar />
                  <SingleBlog />
                  <Footer />
                </>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
