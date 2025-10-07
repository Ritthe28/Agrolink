import React from 'react'
import { assets } from '../assets/assets'
import { useappcontaxt } from '../context/Appcontext'

const Navbar = () => {
  const { navigate, isloggedin, setisloggedin } = useappcontaxt();

  return (
    <div className="w-full h-[10vh] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 shadow-lg flex items-center px-6">
      
      {/* Logo Section */}
      <div className="w-fit h-full flex items-center cursor-pointer" onClick={() => navigate("/")}>
        <img 
          src={assets.Agrologo} 
          alt="AgroLink Logo" 
          className="h-[80%] w-full object-cover rounded-md shadow-md"
        />
      </div>

      {/* Navbar Right Section */}
      <div className="flex-1 flex flex-row justify-end items-center gap-10 text-white font-medium text-lg">
        
        {/* ✅ Home Link */}
        <span 
          className="hover:text-orange-400 cursor-pointer transition-colors"
          onClick={() => navigate("/")}
        >
          Home
        </span>

        {/* Dropdown */}
        <div className="relative group cursor-pointer">
          <span className="hover:text-orange-400 transition-colors">
            Services Offered
          </span>

          <ul className="absolute left-0 mt-1 w-48 bg-white text-gray-800 shadow-lg rounded-lg overflow-hidden hidden group-hover:block">
            <li className="px-4 py-2 hover:bg-orange-100 cursor-pointer">Soil Testing</li>
            <li className="px-4 py-2 hover:bg-orange-100 cursor-pointer">Crop Assessment</li>
            <li className="px-4 py-2 hover:bg-orange-100 cursor-pointer">Buy</li>
            <li className="px-4 py-2 hover:bg-orange-100 cursor-pointer">Help</li>
          </ul>
        </div>

        {/* Other Links */}
        {!isloggedin && (
          <span
            className="hover:text-orange-400 cursor-pointer transition-colors"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        )}

        <span
          className="hover:text-orange-400 cursor-pointer transition-colors"
          onClick={() => navigate("/list-sell")}
        >
          List & Sell
        </span>

        {isloggedin && (
          <span className="hover:text-orange-400 cursor-pointer transition-colors relative group h-full">
            Profile
            <span
              className="text-sm text-black bg-white px-2 py-1 rounded-sm absolute top-8 hidden group-hover:block"
              onClick={() => setisloggedin(false)}
            >
              Logout
            </span>
          </span>
        )}
      </div>
    </div>
  )
}

export default Navbar
