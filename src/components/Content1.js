import React from "react";

const Content1 = () => {
  const categories = [
    {
      title: "Father's Day",
      img: "https://www.fnp.com/assets/images/custom/new-home-2025/hero-banners/Fathers_Day_Desk-04-06-2025.jpg",
    },
    {
      title: "Birthday",
      img: "https://www.fnp.com/assets/images/custom/new-desk-home/hero-banners/Birthday_Desk-28-03.jpg",
    },
    {
      title: "Anniversary",
      img: "https://www.fnp.com/assets/images/custom/new-desk-home/hero-banners/Anniversary_desk_10-03-2025.jpg",
    },
    {
      title: "2-Hour Delivery",
      img: "https://www.fnp.com/assets/images/custom/new-desk-home/hero-banners/2hourdelivery_Squircle_41224.jpg",
    },
    {
      title: "FNP Luxe",
      img: "https://www.fnp.com/assets/images/custom/new-desk-home/hero-banners/LUXE_NEW_Desk-02-05-2025.jpg",
    },
    {
      title: "Personalised",
      img: "https://www.fnp.com/assets/images/custom/new-desk-home/hero-banners/Persoanlised_Squircle-10-06-2025.jpg",
    },
    {
      title: "Cakes",
      img: "https://www.fnp.com/assets/images/custom/new-desk-home/hero-banners/Cakes-desk_20.jpg",
    },
    {
      title: "Plants",
      img: "https://www.fnp.com/assets/images/custom/new-desk-home/hero-banners/Plants_Squircle-10-06-2025.jpg",
    },
    {
      title: "Pride Month",
      img: "https://www.fnp.com/assets/images/custom/new-desk-home/hero-banners/pride_month_Desk_icon-07-06-2025.jpg",
    },
  ];

  // Unique hover styles for images
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

  // Unique text color hover styles
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

      {/* 🔹 Scrollable Category Row with hover effects */}
      <div className="flex space-x-5 overflow-x-auto scrollbar-hide py-2 px-1">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="group flex flex-col items-center min-w-[100px] sm:min-w-[120px] transition-transform duration-300 ease-in-out"
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
