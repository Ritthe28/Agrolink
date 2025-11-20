import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { useappcontaxt } from '../context/Appcontext';

// Clerk imports
import { UserButton, SignedIn, SignedOut, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const [ismenu, setismenu] = useState(false);
  const { navigate } = useappcontaxt();
  const { user, isSignedIn } = useUser();   // Clerk auth status

  const navItem = (label, path, action) => (
    <span
      onClick={() => { action ? action() : navigate(path) }}
      className="relative cursor-pointer group"
    >
      {label}
      <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
    </span>
  );

  return (
    <nav className="w-full bg-white h-[10vh] shadow-md flex items-center justify-between px-6 fixed top-0 z-40">

      {/* LOGO */}
      <div className="h-full flex items-center cursor-pointer" onClick={() => navigate("/")}>
        <img src={assets.Agrologo} alt="Logo" className="h-[70%] rounded-md" />
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden sm:flex items-center gap-8 font-medium text-gray-800 text-lg">

        {navItem("Home", "/")}

        {/* DROPDOWN */}
        <div className="relative group cursor-pointer">
          {navItem("Crop Converter")}
          <div className="absolute left-0 mt-2 w-44 bg-white shadow-md rounded-md hidden group-hover:block overflow-hidden">
            {["Soil Testing", "Crop Assessment", "Buy", "Help", "Calculate Price"].map((item, i) => (
              <p
                key={i}
                className="px-4 py-2 hover:bg-orange-100 transition"
                onClick={() => {
                  if (item === "Calculate Price") navigate("/crop_converter");
                }}
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        {navItem("Market", "/market")}
        {navItem("About Us", "/about")}

        {/* Show Login if NOT signed in */}
        <SignedOut>
          {navItem("Login", "/login")}
        </SignedOut>

        {/* List and Sell */}
        <span
          onClick={() => {
            isSignedIn ? navigate("/layout") : navigate("/login");
          }}
          className="relative cursor-pointer group"
        >
          List & Sell  
          <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
        </span>

        {/* PROFILE (Clerk UserButton) */}
        <SignedIn>
          <UserButton 
            afterSignOutUrl="/" 
            appearance={{
              elements: {
                avatarBox: "w-10 h-10"
              }
            }}
          />
        </SignedIn>
      </div>

      {/* MOBILE MENU ICON */}
      <div className="sm:hidden flex items-center">
        <img
          onClick={() => setismenu(true)}
          src={assets.menu}
          className="w-8 h-8 cursor-pointer"
        />
      </div>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 right-0 w-[65vw] h-screen bg-gray-900 text-white transform transition-transform duration-300 ${
          ismenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 bg-red-500 px-3 py-1 rounded"
          onClick={() => setismenu(false)}
        >
          ✕
        </button>

        <div className="flex flex-col gap-6 mt-20 text-lg px-6">
          {navItem("Home", "/", () => { navigate("/"); setismenu(false) })}
          {navItem("Market", "/market", () => { navigate("/market"); setismenu(false) })}
          {navItem("About Us", "/about", () => { navigate("/about"); setismenu(false) })}

          {/* List & Sell */}
          {navItem("List & Sell", null, () => {
            isSignedIn ? navigate("/layout") : navigate("/login");
            setismenu(false);
          })}

          {/* MOBILE LOGIN/LOGOUT */}
          <SignedOut>
            {navItem("Login", "/login", () => { navigate("/login"); setismenu(false) })}
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
