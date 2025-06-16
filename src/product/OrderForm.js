import React, { useState } from "react";

const OrderForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    product: "Wedding Miniature",
  });

  const products = [
    {
      title: "Wedding Miniature",
      img: "https://www.fnp.com/assets/images/custom/new-home-2025/hero-banners/Fathers_Day_Desk-04-06-2025.jpg",
    },
    {
      title: "Baby & Kids Moments",
      img: "https://www.fnp.com/assets/images/custom/new-desk-home/hero-banners/Birthday_Desk-28-03.jpg",
    },
    {
      title: "3D Portrait Statues",
      img: "https://www.fnp.com/assets/images/custom/new-desk-home/hero-banners/pride_month_Desk_icon-07-06-2025.jpg",
    },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order submitted for ${form.name}`);
    console.log("Order Details:", form);
  };

  const selectedProduct = products.find((p) => p.title === form.product);

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">Place Your Order</h2>

      {/* 🔹 Product Preview */}
      {selectedProduct && (
        <div className="flex items-center space-x-4 mb-6">
          <img
            src={selectedProduct.img}
            alt={selectedProduct.title}
            className="w-24 h-24 rounded-lg object-cover"
          />
          <div>
            <h4 className="font-bold text-lg">{selectedProduct.title}</h4>
            <p className="text-sm text-gray-600">Your selected item</p>
          </div>
        </div>
      )}

      {/* 🔹 Order Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <textarea
          name="address"
          placeholder="Delivery Address"
          value={form.address}
          onChange={handleChange}
          rows="3"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        ></textarea>

        <select
          name="product"
          value={form.product}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {products.map((prod, index) => (
            <option key={index} value={prod.title}>
              {prod.title}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
