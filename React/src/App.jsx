import React, { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login_page from "./pages/Login_page";
import Home_page from "./pages/Home_page";
import AboutUs_page from "./pages/AboutUs_page";
import Menu_page from "./pages/Menu_page";
import ContactUs_page from "./pages/ContactUs_page";
import ProtectedRoute from "./routes/ProtectedRoute";

import Footer from "./component/Footer/Footer";
BrowserRouter;
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home_page />} />
        <Route path="/login" element={<Login_page />} />
        <Route
          path="/about-us"
          element={<ProtectedRoute Component={AboutUs_page} />}
        />
        <Route
          path="/menu"
          element={<ProtectedRoute Component={Menu_page} />}
        />
        <Route
          path="/contact-us"
          element={<ProtectedRoute Component={ContactUs_page} />}
        />
        <Route
          path="/footer"
          element={<ProtectedRoute Component={<Footer />} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
