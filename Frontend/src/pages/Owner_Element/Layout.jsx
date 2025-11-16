import React, { useState } from 'react';
import Sidebar from './Sidebar.jsx';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar.jsx';
import { assets } from '../../assets/assets';

const Layout = () => {
  const [ismenu, setmenu] = useState(false);

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col" >

      {/* 🔵 TOP NAVBAR */}
      <div className="h-[10vh] w-full fixed top-0 left-0 z-50 bg-white shadow">
        <Navbar />
      </div>

      {/* 🔵 MAIN SECTION */}
      <div className="flex flex-row pt-[10vh] h-full">

        {/* 🟣 DESKTOP SIDEBAR */}
        <div className="h-[90vh] fixed left-0 top-[10vh] bg-gray-900 text-white sm:w-56 sm:block hidden">
          <Sidebar />
        </div>

        {/* 🟣 MOBILE MENU BUTTON */}
        <div className="sm:hidden left-2 top-[12vh] z-40">
          <img
            src={assets.menu}
            className="w-7 cursor-pointer"
            onClick={() => setmenu(!ismenu)}
            alt="menu"
          />
        </div>

        {/* 🟣 MOBILE SLIDING SIDEBAR */}
        <div
          className={`sm:hidden fixed top-[10vh] left-0 h-[90vh] bg-gray-900 text-white z-40 transition-all duration-300 ${
            ismenu ? "w-48" : "w-0"
          } overflow-hidden`}
        >
          <Sidebar onLinkClick={() => setmenu(false)} />
            

        </div>

        {/* 🟢 PAGE CONTENT */}
        <div className="flex-1 ml-0 sm:ml-56 h-[90vh] overflow-y-auto p-5 bg-gray-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
