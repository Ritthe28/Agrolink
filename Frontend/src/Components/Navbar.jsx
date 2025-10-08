import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { useappcontaxt } from '../context/Appcontext'

const Navbar = () => {
  const [ismenu, setismenu] = useState(false);
  const { navigate, isloggedin, setisloggedin } = useappcontaxt();

  return (
    <div className="w-full bg-white h-[10vh]  shadow-lg flex items-center relative px-6 top-0 left-0 z-30 text-black">
      
      {/* Logo Section */}
      <div className="w-fit h-full flex items-center cursor-pointer" onClick={() => navigate("/")}>
        <img 
          src={assets.Agrologo} 
          alt="AgroLink Logo" 
          className="h-[80%] w-full object-cover rounded-md shadow-md"
        />
      </div>

      {/* Navbar Right Section (Desktop) */}
      <div className="flex-1 flex flex-row justify-end items-center gap-10 text-black font-medium text-lg max-sm:hidden">
        <span 
          className="hover:text-orange-400 cursor-pointer transition-colors group"
          onClick={() => navigate("/")}
        >
          <hr className='w-full h-1 bg-white outline-none border-0 group-hover:block group-hover:bg-orange-500 rounded-lg duration-200' />
          Home
        </span>

        <div className="relative group cursor-pointer">
          <span className="hover:text-orange-400 transition-colors group">
                      <hr className='w-full h-1 bg-white outline-none border-0 group-hover:block group-hover:bg-orange-500 rounded-lg duration-200' />

            Crop Converter
          </span>
          <ul className="absolute left-0 mt-1 w-48 bg-white text-gray-800 shadow-lg rounded-lg overflow-hidden hidden group-hover:block z-50">
            <li className="px-4 py-2 hover:bg-orange-100 cursor-pointer">Soil Testing</li>
            <li className="px-4 py-2 hover:bg-orange-100 cursor-pointer">Crop Assessment</li>
            <li className="px-4 py-2 hover:bg-orange-100 cursor-pointer">Buy</li>
            <li className="px-4 py-2 hover:bg-orange-100 cursor-pointer">Help</li>
          </ul>
        </div>

        <span className="hover:text-orange-400 cursor-pointer transition-colors group" onClick={() => navigate("/market")}>
                    <hr className='w-full h-1 bg-white outline-none border-0 group-hover:block group-hover:bg-orange-500 rounded-lg duration-200' />

          Market
        </span>

        <span className="hover:text-orange-400 cursor-pointer transition-colors group" onClick={() => navigate("/about")}>
                    <hr className='w-full h-1 bg-white outline-none border-0 group-hover:block group-hover:bg-orange-500 rounded-lg duration-200' />

          About Us
        </span>

        {!isloggedin && (
          <span
            className="hover:text-orange-400 cursor-pointer transition-colors group"
            onClick={() => navigate("/login")}
          >
                      <hr className='w-full h-1 bg-white outline-none border-0 group-hover:block group-hover:bg-orange-500 rounded-lg duration-200' />

            Login
          </span>
        )}

        <span
          className="hover:text-orange-400 cursor-pointer transition-colors group" 
          onClick={() => navigate("/list-sell")}
        >
                    <hr className='w-full h-1 bg-white outline-none border-0 group-hover:block group-hover:bg-orange-500 rounded-lg duration-200' />

          List & Sell
        </span>

        {isloggedin && (
          <span className="hover:text-orange-400 cursor-pointer transition-colors relative group h-full group">
                      <hr className='w-full h-1 bg-white outline-none border-0 group-hover:block group-hover:bg-orange-500 rounded-lg duration-200' />

            Profile
            <span
              className="text-sm text-black bg-white px-2 py-1 rounded-sm absolute top-8 hidden group-hover:block "
              onClick={() => setisloggedin(false)}
            >
                        <hr className='w-full h-1 bg-white outline-none border-0 group-hover:block group-hover:bg-orange-500 rounded-lg duration-200' />

              Logout
            </span>
          </span>
        )}
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div className='h-full flex-1 flex justify-end sm:hidden flex justify-center items-center'>
        <img 
          className='h-[60%] object-contain cursor-pointer h-[ 30px] w-[30px] object-contain'  
          onClick={() => setismenu(true)}
          src={assets.menu} 
          alt="menu" 
        />
      </div>

      {/* Sidebar for Small Screens */}
      <div
        className={`fixed top-0 right-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 h-[100vh] w-[70vw] text-white shadow-2xl transform transition-transform duration-500 ease-in-out z-50
        ${ismenu ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Close Button */}
        <span
          className="absolute top-4 right-4 text-white bg-red-600 px-3 py-1 rounded-lg cursor-pointer hover:bg-red-700 transition"
          onClick={() => setismenu(false)}
        >
          ✕
        </span>

        {/* Sidebar Links */}
        <div className="flex flex-col gap-6 text-lg font-medium mt-16 px-8">
          <span onClick={() => { navigate("/"); setismenu(false); }} className="hover:text-orange-400 cursor-pointer">Home</span>
          <span onClick={() => { navigate("/market"); setismenu(false); }} className="hover:text-orange-400 cursor-pointer">Market</span>
          <span onClick={() => { navigate("/about"); setismenu(false); }} className="hover:text-orange-400 cursor-pointer">About Us</span>
          <span onClick={() => { navigate("/list-sell"); setismenu(false); }} className="hover:text-orange-400 cursor-pointer">List & Sell</span>

          {!isloggedin ? (
            <span onClick={() => { navigate("/login"); setismenu(false); }} className="hover:text-orange-400 cursor-pointer">Login</span>
          ) : (
            <span onClick={() => { setisloggedin(false); setismenu(false); }} className="hover:text-orange-400 cursor-pointer">Logout</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
