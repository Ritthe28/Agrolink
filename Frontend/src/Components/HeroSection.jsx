
import React from "react";


const heroBackgroundImageUrl =
  "https://images.unsplash.com/photo-1577097441609-3e304539f688?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen min-h-[700px] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${heroBackgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // This creates a nice parallax effect on scroll
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between h-full py-20">
        {/* Left Column: Main Title & Call to Action */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-16 md:mb-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            A Digital Marketplace for Modern Agriculture
          </h1>
          <p className="text-lg sm:text-xl font-light mb-8 max-w-lg drop-shadow-md">
            Connecting farmers directly with buyers for a more transparent and
            profitable trading experience.
          </p>
          <button className="bg-green-600 text-white font-bold text-lg px-10 py-4 rounded-lg shadow-xl hover:bg-green-700 transition-transform transform hover:scale-105 duration-300">
            Join the Marketplace
          </button>
        </div>

        {/* Right Column: Secondary "Glass" Card */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="bg-black bg-opacity-40 p-8 rounded-xl shadow-2xl max-w-md backdrop-blur-md border border-gray-500 border-opacity-30">
            <h3 className="text-2xl font-bold mb-4">
              Maximize Your Yield's Value
            </h3>
            <p className="text-lg mb-6 leading-relaxed">
              Gain access to a global network of verified buyers and sellers.
              Post your crop offers or bids and get the best market price, every
              time.
            </p>
            <button className="w-full bg-white text-green-700 font-bold text-lg px-8 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition-colors duration-300">
              Learn How It Works
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
