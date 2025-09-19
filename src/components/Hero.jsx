import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section className=" bg-gradient-to-b h-screen flex flex-col items-center bg-orange-300 to-white ">
      <Navbar />
      <span className=" border rounded-md py-2 mb-16 px-4 font-semibold ">
        Your Personal AI Photographer
      </span>
      <h3 className=" text-5xl font-head leading-[64px] max-w-xl text-center ">
        Turn Your Ordinary Photographs Into Professional Photoshoots
      </h3>
      <button className=" mt-16  bg-black text-white py-2 px-5 rounded-md ">
        Start creating
      </button>
    </section>
  );
};

export default Hero;
