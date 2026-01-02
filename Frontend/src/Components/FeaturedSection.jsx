import React from "react";
import { useNavigate } from "react-router-dom";
import { assets, featuresData, partnersData } from "../assets/assets";

const FeaturedSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full text-gray-800">

      {/* OUR SOLUTION */}
      <div className="px-10 py-20 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-8">
          OUR <span className="text-green-600">SOLUTION</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          <img src={assets.Solution} className="md:w-1/2" />

          <div className="md:w-1/2 space-y-6">
            <p>
              AgroLink connects farmers directly with buyers without middlemen.
            </p>

            <button
              onClick={() => navigate("/market")}
              className="border border-green-600 px-6 py-2 rounded hover:bg-green-600 hover:text-white"
            >
              Explore Marketplace
            </button>
          </div>
        </div>
      </div>

      {/* GET STARTED */}
      <div className="bg-white py-20 text-center">
        <h2 className="text-4xl font-serif mb-10">GET STARTED</h2>

        <div className="flex flex-col md:flex-row justify-center gap-16">
          {/* SELLER */}
          <div>
            <h3 className="font-bold text-green-700">POST OFFER AS SELLER</h3>
            <p className="my-4">Sell crops directly to buyers.</p>
            <button
              onClick={() => navigate("/signup?role=farmer")}
              className="border-2 border-green-600 px-6 py-2 rounded hover:bg-green-600 hover:text-white"
            >
              Register as Seller
            </button>
          </div>

          {/* BUYER */}
          <div>
            <h3 className="font-bold text-green-700">POST BID AS BUYER</h3>
            <p className="my-4">Buy directly from farmers.</p>
            <button
              onClick={() => navigate("/signup?role=consumer")}
              className="border-2 border-green-600 px-6 py-2 rounded hover:bg-green-600 hover:text-white"
            >
              Register as Buyer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
