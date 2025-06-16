import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const CartDrawer = ({ setShowCart }) => {
  const product = {
    name: "Enchanting Orchids Flower Bouquet",
    price: 999,
    delivery: 29,
    convenience: 49,
    date: "20th Jun, 06:00 - 16:00 Hrs",
    express: 29,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyvuzAYf1TkLLcOM_yqS57LyCHuYThEPzQ5Q&s",
  };

  const finalAmount = product.price + product.delivery + product.convenience;

  return (
    <div className="fixed inset-0 z-40 flex justify-end bg-black bg-opacity-50">
      <div className="w-full sm:w-[400px] h-full bg-white shadow-2xl p-4 relative overflow-y-auto">
        {/* ❌ Close Button */}
        <button
          onClick={() => setShowCart(false)}
          className="absolute top-2 right-3 text-2xl text-gray-500"
        >
          &times;
        </button>

        {/* 🛍️ Main Content */}
        <div className="pb-28">
          {/* 📦 Location + Product */}
          <div className="border rounded-lg p-3 mb-4">
            <p className="text-sm text-gray-600">
              500018, Hyderabad, Telangana
            </p>

            {/* Product */}
            <div className="flex gap-3 mt-3">
              <img
                src={product.image}
                alt="Product"
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="flex-1">
                <p className="text-sm font-medium">{product.name}</p>
                <p className="text-md font-bold mt-1">₹ {product.price}</p>
              </div>
              <FaTrashAlt className="text-gray-500 cursor-pointer mt-2" />
            </div>

            {/* Delivery Info */}
            <div className="mt-4 border p-2 rounded flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500">
                  Delivery Date & Time Slot
                </p>
                <p className="text-sm font-semibold">{product.date}</p>
                <p className="text-xs text-green-600">
                  Express Delivery - ₹ {product.express}
                </p>
              </div>
              <span className="text-gray-400">{">"}</span>
            </div>

            {/* 🎁 Make it special */}
            <button className="mt-3 w-full border text-sm text-green-700 border-green-700 rounded py-1 font-semibold">
              🎁 Make it extra special
            </button>
          </div>

          {/* 🔐 fnpCash Section */}
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-700 mb-1">fnpCash</h3>
            <p className="text-xs text-gray-500">
              Proceed to checkout and login to check your fnpCash balance.
            </p>
          </div>

          {/* 💵 Price Details */}
          <div className="border-t pt-4">
            <h3 className="text-md font-semibold mb-3">Price Details</h3>
            <div className="text-sm flex justify-between py-1">
              <span>Total Product Price</span>
              <span>₹ {product.price}</span>
            </div>
            <div className="text-sm flex justify-between py-1">
              <span>Delivery Charges</span>
              <span>₹ {product.delivery}</span>
            </div>
            <div className="text-sm flex justify-between py-1">
              <span>Convenience Charge</span>
              <span>₹ {product.convenience}</span>
            </div>
            <div className="text-sm flex justify-between py-2 font-bold border-t mt-2">
              <span>Final Amount</span>
              <span>₹ {finalAmount}</span>
            </div>
          </div>
        </div>

        {/* 📦 Bottom Footer */}
        <div className="fixed bottom-0 right-0 w-full sm:w-[400px] bg-white border-t py-4 px-4 flex justify-between items-center z-50">
          <div className="text-lg font-bold">₹ {finalAmount}</div>
          <button className="bg-green-700 text-white px-5 py-2 rounded">
            Proceed to Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
