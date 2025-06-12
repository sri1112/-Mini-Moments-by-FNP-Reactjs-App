import React from "react";

const FathersDayCityGifts = () => {
  // 🔹 Array of cities with image and name
  const cities = [
    {
      name: "Delhi NCR",
      image:
        "https://www.fnp.com/assets/images/custom/alpha-signature-icons/city/delhi_city-banner_web-copy-10-Jun-2025.jpg",
    },
    {
      name: "Mumbai",
      image:
        "https://www.fnp.com/assets/images/custom/alpha-signature-icons/city/mumbai_city-banner_web-copy-10-Jun-2025.jpg",
    },
    {
      name: "Bengaluru",
      image:
        "https://www.fnp.com/assets/images/custom/alpha-signature-icons/city/bengaluru_city-banner_web-copy-10-Jun-2025.jpg",
    },
    {
      name: "Kolkata",
      image:
        "https://www.fnp.com/assets/images/custom/alpha-signature-icons/city/kolkata_city-banner_web-10-Jun-2025.jpg",
    },
    {
      name: "Hyderabad",
      image:
        "https://www.fnp.com/assets/images/custom/alpha-signature-icons/city/hyderabad_city-banner_web-copy-10-Jun-2025.jpg",
    },
  ];

  return (
    <div className="px-4 sm:px-6 py-10 bg-white">
      {/* 🔸 Section Title */}
      <h2 className="text-xl sm:text-2xl font-semibold mb-6">
        Send Father's Day Gifts To
      </h2>

      {/* 🔸 Scrollable City Cards Row */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-2">
        {cities.map((city, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-48 sm:w-60 rounded-lg overflow-hidden text-center transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <img
              src={city.image}
              alt={city.name}
              className="w-full h-64 object-cover"
            />
            <p className="mt-3 text-sm font-medium">{city.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FathersDayCityGifts;
