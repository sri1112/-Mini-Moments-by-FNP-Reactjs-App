import React, { useState } from "react"
import Navbar from "../components/Navbar";
import CartDrawer from "../cart/CartDrawer";

// SuggestedProducts Component
const SuggestedProducts = () => {
  const items = [
    {
      name: "Rose Bouquet",
      price: 499,
      image: process.env.PUBLIC_URL + "/img/a.jpg",
    },
    {
      name: "Chocolate Combo",
      price: 599,
      image: process.env.PUBLIC_URL + "/img/fb.jpg",
    },
    {
      name: "Cake & Teddy",
      price: 799,
      image: process.env.PUBLIC_URL + "/img/a.jpg",
    },
  ];

  return (
    <div className="mt-10 bg-gray-100 p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-gray-700">You May Also Like</h2>
      <div className="flex flex-wrap gap-4">
        {items.map((item, index) => (
          <div key={index} className="bg-white p-3 rounded w-48 shadow hover:shadow-lg">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-32 object-cover rounded mb-2"
            />
            <p className="text-sm font-semibold text-gray-800">{item.name}</p>
            <p className="text-green-600 font-bold">₹ {item.price}</p>
            <button className="mt-2 w-full bg-pink-500 text-white py-1 rounded text-sm">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};


// Main ProductDetail Component
const ProductDetail = () => {
  const imageList = [
    process.env.PUBLIC_URL + "/img/a.jpg",
    process.env.PUBLIC_URL + "/img/fb.jpg",
    process.env.PUBLIC_URL + "/img/ma.jpg",
    process.env.PUBLIC_URL + "/img/a.jpg",
    process.env.PUBLIC_URL + "/img/a.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(imageList[0]);

  return (
    <div>
      <Navbar/>
    <div className="max-w-4xl mx-auto p-2 font-sans">
      {/* Top Section: Image + Info */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left : Images */}
        <div className="lg:w-1/2">
          <img
            src={selectedImage}
            alt="Selected"
            className="rounded-lg w-full h-auto"
          />
          <div className="flex gap-3 mt-4">
            {imageList.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                className={`w-16 h-16 object-cover rounded-md cursor-pointer border ${
                  selectedImage === img ? "border-blue-500" : "border-gray-300"
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="lg:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Wedding Miniatures</h2>
          <p className="text-green-600 font-semibold text-xl">₹ 329</p>
          <p className="text-sm text-gray-600">⭐ 4.8 | 80 Reviews</p>

          {/* Combos */}
          <div className="flex gap-3 mt-2">
            {["Design 1", "Design 2", "Design 3"].map((design, idx) => (
              <div
                key={idx}
                className="border p-2 rounded text-center text-sm cursor-pointer"
              >
                <img
                  src={imageList[0]}
                  alt={`combo-${idx}`}
                  className="w-16 h-16 object-cover rounded mx-auto"
                />
                <p>{design}</p>
                <p className="text-gray-700">₹ {329 + idx * 300}</p>
              </div>
            ))}
          </div>

          {/* Location Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gift Receiver's Location
            </label>
            <input
              type="text"
              placeholder="Enter Receiver's pincode, location, area"
              className="w-full border rounded p-2"
            />
          </div>

          {/* Date and Time Picker */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Delivery Date & Time Slot
            </label>
            <button className="border rounded p-2 w-full text-left text-gray-500">
              Select Delivery Date & Time Slot
            </button>
          </div>

          {/* Personalised Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Add Personalised Text
            </label>
            <input
              type="text"
              maxLength={25}
              placeholder="Enter Message On Cake"
              className="w-full border rounded p-2"
            />
          </div>

          {/* Offers */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Offers Available</h3>
            <ul className="space-y-2">
              <li className="p-2 border rounded bg-blue-50 text-sm">
                <strong>Paytm UPI:</strong> Assured Cashback up to ₹100 using Paytm UPI
              </li>
              <li className="p-2 border rounded bg-red-50 text-sm">
                <strong>Airtel:</strong> Flat 10% off up to ₹200 on minimum ₹999
              </li>
              <li className="p-2 border rounded bg-indigo-50 text-sm">
                <strong>Mobikwik:</strong> Get up to ₹500 via Wallet or ₹250 via UPI
              </li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button className="bg-yellow-500 text-white px-6 py-2 rounded">
              Add to Cart
            </button>
            {/* <button><CartDrawer/></button> */}
            <button className="bg-green-600 text-white px-6 py-2 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Accordion Section */}
      <div className="mt-5 space-y-2">
        <details className="border rounded p-4">
          <summary className="font-semibold">Product Description</summary>
          <p className="mt-2 text-sm text-gray-600">
            A vibrant bouquet of blue orchids wrapped beautifully.
          </p>
        </details>

        <details className="border rounded p-2">
          <summary className="font-semibold">Care Instructions</summary>
          <ul className="list-disc pl-6 mt-2 text-sm text-gray-600">
            <li>Keep flowers in a cool spot</li>
            <li>Change water every 2 days</li>
          </ul>
        </details>

        <details className="border rounded p-2">
          <summary className="font-semibold">Delivery Information</summary>
          <p className="mt-2 text-sm text-gray-600">
            Same day and fixed time delivery available in select cities.
          </p>
        </details>
      </div>

      {/* ✅ Suggested Products Section */}
      <SuggestedProducts />
      {/* <CartDrawer/> */}
    </div>
    </div>
  );
};

export default ProductDetail;
