import Cart from "./cart/Cart";
import { useState } from "react";
import HeroSection from "./HeroSection";
import Products from "./products";

const Home = () => {
  return (
    <div>
      <div className="space-y-6 px-10">
        <HeroSection />
        <Cart />

        <Products />
      </div>
    </div>
  );
};

export default Home;
