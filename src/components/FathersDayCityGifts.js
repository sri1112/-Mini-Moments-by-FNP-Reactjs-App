import React from "react";

const FathersDayCityGifts = () => {
  const cities = [
    {
      name: "Delhi NCR",
      image: "https://www.fnp.com/assets/images/custom/alpha-signature-icons/city/delhi_city-banner_web-copy-10-Jun-2025.jpg",
    },
    {
      name: "Mumbai",
      image: "https://www.fnp.com/assets/images/custom/alpha-signature-icons/city/mumbai_city-banner_web-copy-10-Jun-2025.jpg",
    },
    {
      name: "Bengaluru",
      image: "https://www.fnp.com/assets/images/custom/alpha-signature-icons/city/bengaluru_city-banner_web-copy-10-Jun-2025.jpg",
    },
    {
      name: "Kolkata",
      image: "https://www.fnp.com/assets/images/custom/alpha-signature-icons/city/kolkata_city-banner_web-10-Jun-2025.jpg",
    },
    {
      name: "Hyderabad",
      image: "https://www.fnp.com/assets/images/custom/alpha-signature-icons/city/hyderabad_city-banner_web-copy-10-Jun-2025.jpg",
    },
  ];

  return (
    <div className="px-8 py-10">
      <h2 className="text-xl font-semibold mb-4">Send Father's Day Gifts To</h2>
      <div className="flex gap-20 overflow-x-auto pb-4">
        {cities.map((city, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-48 rounded-lg overflow-hidden text-center shadow-md"
          >
            <img
              src={city.image}
              alt={city.name}
              className="w-full h-80 object-cover"
            />
            <p className="mt-3 text-sm font-medium">{city.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FathersDayCityGifts;
