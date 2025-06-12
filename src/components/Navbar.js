import React, { useState } from "react";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { BsTruck, BsCurrencyRupee } from "react-icons/bs";
import { AiOutlineGift } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import LoginRegister from "../login&signin/LoginRegister";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false); // 👈 Track login/register mode

  const openLogin = () => {
    setIsRegister(false);
    setShowLogin(true);
  };

  const openRegister = () => {
    setIsRegister(true);
    setShowLogin(true);
  };

  return (
    <div className="w-full sticky top-0 z-50 bg-white shadow-sm border-b">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-2 text-sm">
        {/* Logo & Location */}
        <div className="flex items-center space-x-4">
          <img
            src="https://th.bing.com/th/id/OIP.-teuHVCfFGFWgOZa5RgteQHaE7?w=220&h=188&c=7&r=0&o=7&pid=1.7&rm=3"
            alt="mnmn Logo"
            className="h-24 w-auto object-contain"
          />
          <div className="flex items-center text-gray-700">
            <MdLocationOn className="mr-1" />
            <span>Where to deliver?</span>
            <span className="text-red-500 ml-1">Location missing</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-grow max-w-xl mx-4">
          <div className="flex items-center border rounded px-3 py-1">
            <BiSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Sending good luck plants or more"
              className="w-full outline-none"
            />
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-5 text-gray-700">
          <div className="flex flex-col items-center text-xs">
            <BsTruck className="text-lg" />
            <span>Same Day</span>
          </div>
          <div className="flex flex-col items-center text-xs">
            <BsCurrencyRupee className="text-lg" />
            <span>INR</span>
          </div>
          <div className="flex flex-col items-center text-xs">
            <AiOutlineGift className="text-lg" />
            <span>Corporate</span>
          </div>
          <div className="flex flex-col items-center text-xs">
            <FaShoppingCart className="text-lg" />
            <span>Cart</span>
          </div>

          {/* Login Button */}
          <div
            className="flex flex-col items-center text-xs cursor-pointer"
            onClick={openLogin}
          >
            <FaUserCircle className="text-lg" />
            <span>Login</span>
          </div>

          {/* Register Button */}
          <div
            className="flex flex-col items-center text-xs cursor-pointer"
            onClick={openRegister}
          >
            <FaUserCircle className="text-lg text-blue-600" />
            <span>Register</span>
          </div>

          <div className="flex flex-col items-center text-xs">
            <FiMoreHorizontal className="text-lg" />
            <span>More</span>
          </div>
        </div>
      </div>

      {/* Bottom Menu */}
      <div className="flex items-center justify-center space-x-6 px-6 py-2 text-sm text-gray-700 font-medium border-t overflow-x-auto whitespace-nowrap">
        {[
          "Father's Day",
          "Birthday",
          "Occasions",
          "Anniversary",
          "Cakes",
          "Flowers",
          "Personalised",
          "Plants",
          "Chocolates",
          "Luxe",
          "Combos",
          "Lifestyle",
          "Global",
        ].map((item) => (
          <div key={item} className="hover:text-green-700 cursor-pointer">
            {item} <span className="inline-block ml-1">▼</span>
          </div>
        ))}
      </div>

      {/* Login/Register Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-xl w-[400px] relative">
            <button
              className="absolute top-2 right-3 text-xl text-red-500"
              onClick={() => setShowLogin(false)}
            >
              ✖
            </button>
            <LoginRegister isRegister={isRegister} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
