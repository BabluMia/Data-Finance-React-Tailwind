import React from "react";
import ReactTyped from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="w-full h-screen mt-[-96px] mx-auto  flex flex-col justify-center text-center max-w-[800px]">
        <p className="text-[#00df9a] font-bold p-2">GROWING WITH DATA ANALYTICS</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold md:py-3 mb-4 md:mb-0"> Grow with data.</h1>
        <div className="flex justify-center items-center">
            <p className="mx-2 text-3xl md:text-5xl">Fast, Flexible Financing for</p>
            <ReactTyped  className="text-4xl md:text-5xl text-[#00df9a] font-bold"
            strings={['BTB', 'BTC', 'SASS']}
            typeSpeed={140}
            backSpeed={120}
            loop
            />
            
        </div>
        <p className="text-xl md:text-2xl my-6 font-bold text-gray-500">Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button className="bg-[#00df9a] mx-auto my-6 text-black rounded-md w-[200px] p-4 font-bold">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
