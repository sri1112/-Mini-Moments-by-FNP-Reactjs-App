import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./product/ProductDetail";
import Home from "./components/Home";
// import CartDrawer from "./cart/CartDrawer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        {/* <Route path="/cart" element={<CartDrawer/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
