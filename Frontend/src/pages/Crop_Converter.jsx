import React, { useState } from 'react';

const Crop_Converter = () => {
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [crop, setCrop] = useState('');

  const total = price && quantity ? (price * quantity).toFixed(2) : 0;

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-green-100 via-emerald-50 to-green-200">
      <div className="w-[90%] sm:w-[480px] bg-white shadow-2xl rounded-2xl p-6 sm:p-10 flex flex-col gap-6 border border-green-200">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-green-700 text-center drop-shadow-md">
          🌾 Crop Converter
        </h1>

        {/* Crop Selector */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="crop"
            className="font-semibold text-gray-700 text-sm sm:text-base"
          >
            Choose a Crop:
          </label>
          <select
            id="crop"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            value={crop}
            onChange={(e) => setCrop(e.target.value)}
          >
            <option value="">-- Select Crop --</option>
            <option value="rice">Rice</option>
            <option value="wheat">Wheat</option>
            <option value="maize">Maize (Corn)</option>
            <option value="barley">Barley</option>
            <option value="soybean">Soybean</option>
            <option value="potato">Potato</option>
            <option value="onion">Onion</option>
            <option value="banana">Banana</option>
            <option value="mango">Mango</option>
            <option value="tomato">Tomato</option>
            <option value="apple">Apple</option>
            <option value="grapes">Grapes</option>
            <option value="coffee">Coffee</option>
            <option value="tea">Tea</option>
            <option value="sugarcane">Sugarcane</option>
            <option value="chilli">Chilli</option>
          </select>
        </div>

        {/* Price Input */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="price"
            className="font-semibold text-gray-700 text-sm sm:text-base"
          >
            Price per Unit (₹):
          </label>
          <input
            id="price"
            type="number"
            placeholder="Enter price..."
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
        </div>

        {/* Quantity Input */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="quantity"
            className="font-semibold text-gray-700 text-sm sm:text-base"
          >
            Quantity:
          </label>
          <input
            id="quantity"
            type="number"
            placeholder="Enter quantity..."
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
        </div>

        {/* Total */}
        <div className="flex justify-between items-center bg-green-50 p-3 rounded-xl border border-green-200">
          <span className="font-bold text-green-700 text-lg">
            Total Price:
          </span>
          <span className="font-extrabold text-2xl text-green-800">
            ₹ {total}
          </span>
        </div>

        {/* Info / Summary */}
        {crop && (
          <div className="text-sm text-gray-600 text-center mt-2 italic">
            You selected <span className="font-semibold">{crop}</span> worth{' '}
            <span className="text-green-600 font-semibold">₹{total}</span>.
          </div>
        )}
      </div>
    </div>
  );
};

export default Crop_Converter;
