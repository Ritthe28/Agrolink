import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative w-full h-screen min-h-[700px] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${assets.grainbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center justify-between h-full">
        {/* LEFT */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-extrabold mb-6">
            A Digital Marketplace for Modern Agriculture
          </h1>

          <p className="text-xl mb-8">
            Connecting farmers directly with buyers for a transparent and
            profitable trading experience.
          </p>

          <button
            onClick={() => navigate("/signup")}
            className="bg-green-600 px-10 py-4 rounded-lg text-lg font-bold hover:bg-green-700 transition"
          >
            Join the Marketplace
          </button>
        </div>

        {/* RIGHT */}
        <div className="md:w-1/2 mt-12 md:mt-0">
          <div className="bg-black bg-opacity-40 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">
              Maximize Your Yield's Value
            </h3>

            <p className="mb-6">
              Gain access to verified buyers and sellers across the market.
            </p>

            <button
              onClick={() => navigate("/login")}
              className="w-full bg-white text-green-700 py-3 rounded-lg font-bold hover:bg-gray-200"
            >
              Learn How It Works
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
