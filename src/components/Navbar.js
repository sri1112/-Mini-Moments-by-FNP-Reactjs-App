import React, { useState } from "react";
import { FaShoppingCart, FaUserCircle, FaTruck } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import LoginRegister from "../login&signin/LoginRegister";
import CartDrawer from "../cart/CartDrawer";

const Navbar = () => {
  const navigate = useNavigate();

  // 🛒 Modal state for cart
  const [isCartOpen, setIsCartOpen] = useState(false);

  // 🔐 Login/Register modal states
  const [showLogin, setShowLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  // 👉 Functions to handle Login/Register switch
  const openLogin = () => {
    setIsRegister(false);
    setShowLogin(true);
  };

  const openRegister = () => {
    setIsRegister(true);
    setShowLogin(true);
  };

  // 🛒 Function to show cart modal
  const openCart = () => {
    setIsCartOpen(true);
  };

  return (
    <div className="w-full sticky top-0 z-50 bg-white shadow-sm border-b">
      {/* 🔼 Top Bar */}
      <div className="flex items-center justify-between px-6 py-2 text-sm">
        {/* 🔷 Logo + Location */}
        <div className="flex items-center space-x-4">
          <img
            src="https://th.bing.com/th/id/OIP.-teuHVCfFGFWgOZa5RgteQHaE7?w=220&h=188&c=7&r=0&o=7&pid=1.7&rm=3"
            alt="mnmn Logo"
            className="h-24 w-auto object-contain"
            onClick={() => navigate(`/`)}
          />

          {/* 📍 Delivery Location */}
          <div className="flex items-center text-gray-700">
            <MdLocationOn className="mr-1" />
            <span>Where to deliver?</span>
            <span className="text-red-500 ml-1">Location missing</span>
          </div>
        </div>

        {/* 🔍 Search Bar */}
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

        {/* 🧾 Right Icons Section */}
        <div className="flex items-center space-x-5 text-gray-700">
          {/* 🚚 Track Order */}
          <div className="flex flex-row items-center text-xs justify-between pr-2 gap-[7px] border-r border-blue-500">
            <FaTruck className="text-lg" />
            <span>Track Order</span>
          </div>

          {/* 🛒 Cart */}
          <div
            className="flex flex-row items-center text-xs justify-between pr-2 gap-[7px] border-r border-blue-500 cursor-pointer"
            onClick={openCart}
          >
            <FaShoppingCart className="text-lg" />
            <span>Cart</span>
          </div>

          {/* 🔐 Login/Register */}
          <div
            className="flex flex-row items-center text-xs cursor-pointer justify-between gap-[7px]"
            onClick={openLogin}
          >
            <FaUserCircle className="text-lg" />
            <span>Login / Register</span>
          </div>
        </div>
      </div>

      {/* 🔐 Login/Register Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-xl w-[400px] relative">
            {/* ❌ Close Button */}
            <button
              className="absolute top-2 right-3 text-xl text-red-500"
              onClick={() => setShowLogin(false)}
            >
              ✖
            </button>

            {/* Login or Register Form */}
            <LoginRegister isRegister={isRegister} />
          </div>
        </div>
      )}

      {/* 🛒 Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          {/* 👉 Pass setIsCartOpen to CartDrawer so it can close itself */}
          <CartDrawer setShowCart={setIsCartOpen} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
