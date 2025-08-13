import React from "react";
import heroImg from "../../assets/Images/home-banner1.jpg";
const Hero = () => {
  return (
    <div className="relative w-full h-[500px]">
      {/* Background Image */}
      <img
        src={heroImg}
        alt="Healthy Food Banner"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}

      {/* Text Content */}
      <div className="absolute top-1/2 left-12 transform -translate-y-1/2 text-white max-w-lg">
        <h5 className="text-4xl font-bold leading-snug text-black">
          Healthy Inside, Fresh <span className="text-[#82b440]">Outside</span>
        </h5>
        <p className="mt-4 text-lg text-black">
          We deliver healthy food that is ready to eat. Just choose your own
          menu you like.
        </p>
        <button className="mt-6 px-6 py-3 bg-[#82b440] text-white rounded-lg hover:bg-[#82b440] transition">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
