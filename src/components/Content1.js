import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Content1 = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  // Fetch categories from backend when component mounts
  useEffect(() => {
    axios.get("http://localhost:5000/api/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const hoverImageStyles = [
    "hover:scale-110 hover:shadow-lg",
    "hover:rotate-3 hover:scale-105",
    "hover:grayscale hover:scale-105",
    "hover:brightness-110",
    "hover:contrast-125",
    "hover:blur-sm hover:scale-95",
    "hover:saturate-200",
    "hover:opacity-80",
    "hover:ring-2 hover:ring-green-400",
  ];

  const hoverTextColors = [
    "group-hover:text-pink-600",
    "group-hover:text-blue-600",
    "group-hover:text-purple-600",
    "group-hover:text-yellow-600",
    "group-hover:text-green-600",
    "group-hover:text-red-600",
    "group-hover:text-orange-600",
    "group-hover:text-teal-600",
    "group-hover:text-rose-600",
  ];

  return (
    <div className="w-full px-4 py-6 bg-white">
      {/* 🔹 Top Banner Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <img
          src="https://www.fnp.com/assets/images/custom/new-home-2025/hero-banners/Fathers_Day_Desk-04-06-2025.jpg"
          alt="Dad Banner"
          className="rounded-lg w-full h-auto object-cover"
        />
        <img
          src="https://www.fnp.com/assets/images/custom/new-home-2025/hero-banners/Personalised_Gifts_Desk-10-06-25.jpg"
          alt="Personalised Gifts"
          className="rounded-lg w-full h-auto object-cover"
        />
        <img
          src="https://www.fnp.com/assets/images/custom/new-home-2025/hero-banners/cakes-banner_desk-03-06-25.jpg"
          alt="Birthday Anniversary"
          className="rounded-lg w-full h-auto object-cover"
        />
        <img
          src="https://www.fnp.com/assets/images/custom/new-home-2025/hero-banners/Mens_Accessories_Desk-10-06-25.jpg"
          alt="Accessories"
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>

      {/* 🔹 Scrollable Category Row */}
      <div className="flex space-x-5 overflow-x-auto scrollbar-hide py-2 px-1">
        {categories.map((cat, index) => (
          <div
            key={cat.id}
            className="group flex flex-col items-center min-w-[100px] sm:min-w-[120px] transition-transform duration-300 ease-in-out"
            onClick={() => navigate(`/product/${cat.id}`)}
          >
            <img
              src={cat.img}
              alt={cat.title}
              className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow transition-all duration-300 transform ${hoverImageStyles[index % hoverImageStyles.length]}`}
            />
            <span
              className={`mt-2 text-xs sm:text-sm text-center font-medium transition-colors duration-300 ${hoverTextColors[index % hoverTextColors.length]}`}
            >
              {cat.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content1;
