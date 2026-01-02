import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useappcontaxt } from "../context/Appcontext";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const navigate = useNavigate();

  const { isloggedin, user, logout } = useappcontaxt();

  const navItem = (label, path) => (
    <span
      onClick={() => {
        navigate(path);
        setIsMenu(false);
      }}
      className="relative cursor-pointer group"
    >
      {label}
      <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
    </span>
  );

  return (
    <nav className="w-full bg-white h-[10vh] shadow-md flex items-center justify-between px-6 fixed top-0 z-40">
      {/* LOGO */}
      <div onClick={() => navigate("/")} className="cursor-pointer">
        <img src={assets.Agrologo} className="h-12 rounded-md" />
      </div>

      {/* ================= DESKTOP MENU ================= */}
      <div className="hidden sm:flex items-center gap-8 font-medium text-lg">

        {navItem("Home", "/")}
        {navItem("Market", "/market")}
        {navItem("Products", "/products")}
        {navItem("About Us", "/about")}

        {isloggedin && (
          <span
          onClick={() => navigate("/cart")}
          className="cursor-pointer font-semibold"
          >
    Cart
  </span>
)}
{/* ROLE BADGE */}

        {isloggedin && user && (
          <span className="text-green-600 font-semibold uppercase">
            {user.role}
          </span>
        )}

        {/* FARMER ONLY → ADD PRODUCT */}
        {isloggedin && user?.role === "farmer" && (
          <span
            onClick={() => navigate("/farmer/add-product")}
            className="cursor-pointer font-semibold text-green-700"
          >
            Add Product
          </span>
        )}

        {/* LIST & SELL */}
        <span
          onClick={() => {
            if (!isloggedin) return navigate("/login");

            if (user.role === "farmer") {
              navigate("/farmer/dashboard");
            } else {
              navigate("/products");
            }
          }}
          className="cursor-pointer font-semibold text-green-700"
        >
          List & Sell
        </span>

        {/* AUTH */}
        {!isloggedin ? (
          <>
            {navItem("Login", "/login")}
            {navItem("Signup", "/signup")}
          </>
        ) : (
          <>
            {navItem("Profile", "/profile")}
            <span
              onClick={() => {
                logout();
                navigate("/login");
              }}
              className="cursor-pointer text-red-500"
            >
              Logout
            </span>
          </>
        )}
      </div>

      {/* ================= MOBILE MENU ICON ================= */}
      <div className="sm:hidden">
        <img
          src={assets.menu}
          className="w-8 cursor-pointer"
          onClick={() => setIsMenu(true)}
        />
      </div>

      {/* ================= MOBILE SIDEBAR ================= */}
      <div
        className={`fixed top-0 right-0 w-[65vw] h-screen bg-gray-900 text-white transition-transform duration-300 ${
          isMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 bg-red-500 px-3 py-1 rounded"
          onClick={() => setIsMenu(false)}
        >
          ✕
        </button>

        <div className="flex flex-col gap-6 mt-20 px-6">

          {navItem("Home", "/")}
          {navItem("Market", "/market")}
          {navItem("Products", "/products")}
          {navItem("About Us", "/about")}
          {isloggedin && (
  <span
    onClick={() => navigate("/cart")}
    className="cursor-pointer font-semibold"
  >
    Cart
  </span>
)}


          {isloggedin && user && (
            <span className="text-yellow-400 font-bold uppercase">
              {user.role}
            </span>
          )}

          {/* FARMER ONLY */}
          {isloggedin && user?.role === "farmer" && (
            <span
              onClick={() => {
                navigate("/farmer/add-product");
                setIsMenu(false);
              }}
              className="cursor-pointer text-green-400 font-semibold"
            >
              Add Product
            </span>
          )}

          {/* AUTH */}
          {!isloggedin ? (
            <>
              {navItem("Login", "/login")}
              {navItem("Signup", "/signup")}
            </>
          ) : (
            <>
              {navItem("Profile", "/profile")}
              <span
                onClick={() => {
                  logout();
                  navigate("/login");
                  setIsMenu(false);
                }}
                className="cursor-pointer text-red-400"
              >
                Logout
              </span>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
