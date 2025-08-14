import React from "react";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import FoodCards from "../FoodCards/Food-crads";
import Hero from "../HeroSection.jsx/Hero-Section";

const Home = () => {
  const isLoggedIn = localStorage.getItem("login") === "true";
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />
      <Hero />
      <FoodCards isLoggedIn={isLoggedIn} />
      <Footer isLoggedIn={isLoggedIn} />
    </>
  );
};

export default Home;
