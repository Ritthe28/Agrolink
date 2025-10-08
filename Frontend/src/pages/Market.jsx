import React, { useState } from 'react';
import { assets, Market_Prodects, market_products_subproduct } from '../assets/assets.js';

const Market = () => {
  const [currrentsubproduct, setcurrrentsubproduct] = useState("Nuts");

  return (
    <div
      className="w-[100vw] h-[100vh] bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${assets.grainbg})` }}
    >
      <div className="bg-green-400/20 w-full h-full sm:p-20 flex items-center p-3 flex-col">
        {/* Title */}
        <div className="text-center w-fit text-2xl sm:text-4xl poppins-medium text-white font-extrabold p-2.5 sm:p-6">
          Select a Product to Buy and Sell
        </div>

        {/* Main Product Buttons */}
        <div className="text-white flex flex-wrap sm:gap-2.5 gap-1 p-5 sm:pb-12 w-fit">
          {Market_Prodects.map((e, index) => (
            <div
              key={index}
              onClick={() => setcurrrentsubproduct(e.name)}
              className={`cursor-pointer bg-white hover:bg-green-500 flex flex-row items-center duration-300 justify-center sm:p-5 w-fit group rounded-2xl gap-1 sm:gap-2.5 hover:-translate-y-1 ease-in-out ${
                currrentsubproduct === e.name ? "bg-green-600" : ""
              }`}
            >
              <img className="invert-0 w-6" src={e.image} alt={e.name} />
              <span className="text-green-500 group-hover:text-white duration-300 sm:text-lg font-bold">
                {e.name}
              </span>
            </div>
          ))}
        </div>

        <hr className="h-[2px] w-full bg-white" />

        {/* Subproducts Section */}
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {market_products_subproduct.map((e, index) => {
            if (currrentsubproduct === e.name) {
              return (
                <React.Fragment key={index}>
                  {e.image && e.image.length > 0 ? (
                    e.image.map((ele, inIndex) => (
                      <div
                        key={inIndex}
                        className="bg-white/80 hover:bg-green-100 p-3 rounded-xl flex flex-col items-center w-32 shadow-md hover:shadow-xl duration-300"
                      >
                        {ele.image && (
                          <img
                            src={ele.image}
                            alt={ele.name}
                            className="w-16 h-16 object-contain"
                          />
                        )}
                        <span className="text-black font-semibold mt-2">
                          {ele.name}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="text-white text-lg italic">
                      No items available for {e.name}
                    </div>
                  )}
                </React.Fragment>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default Market;
