import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { useappcontaxt } from '../context/Appcontext'

const Navbar = () => {
  const { navigate, isloggedin, setisloggedin } = useappcontaxt();

  return (
    <div className="w-full h-[10vh] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 shadow-lg flex items-center px-6 fixed top-0 left-0 z-30">
      
      {/* Logo Section */}1
      <div className="w-fit h-full flex items-center cursor-pointer" onClick={() => navigate("/")}>
        <img 
          src={assets.Agrologo} 
          alt="AgroLink Logo" 
          className="h-[80%] w-full object-cover rounded-md shadow-md"
        />
      </div>

      {/* Navbar Right Section */}
      <div className="flex-1 flex flex-row justify-end items-center gap-10 text-black font-medium text-lg max-sm:hidden">
        
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
Crop Converter           </span>

          <ul className="absolute left-0 mt-1 w-48 bg-white text-gray-800 shadow-lg rounded-lg overflow-hidden hidden group-hover:block z-50">
            <li className="px-4 py-2 hover:bg-orange-100 cursor-pointer">Soil Testing</li>
            <li className="px-4 py-2 hover:bg-orange-100 cursor-pointer">Crop Assessment</li>
            <li className="px-4 py-2 hover:bg-orange-100 cursor-pointer">Buy</li>
            <li className="px-4 py-2 hover:bg-orange-100 cursor-pointer">Help</li>
          </ul>
        </div>
    <span className="hover:text-orange-400 cursor-pointer transition-colors" onClick={()=>{
      navigate("/market")
    }}>
     Market
        </span>
            <span className="hover:text-orange-400 cursor-pointer transition-colors">
About us         </span>
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
      <div className='h-full flex-1 flex justify-end min-sm:hidden'>
        <span className=' flex items-center'>
          <img className=' h-[60%] object-contain'  onClick={()=>{
  setismenu (!ismenu)
}} src={assets.menu} alt="" />
        </span>
      </div>
     <div
  className={`fixed top-0 right-0 bg-white h-[100vh] w-[100vw] text-black transition-transform duration-700 ease-in-out
  ${ismenu ? 'translate-x-0' : 'translate-x-full'}`}
>
  <span
    className="text-white bg-red-800 p-2 absolute top-4 right-4 cursor-pointer"
    onClick={() => setismenu(!ismenu)}
  >
    Close
  </span>
</div>

    </div>
  )
}

export default Navbar
