import React, { useState, useEffect } from "react";
import axios from "axios";

const LoginRegister = ({ isRegister: defaultMode }) => {
  const [isRegister, setIsRegister] = useState(defaultMode || false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  useEffect(() => {
    setIsRegister(defaultMode);
  }, [defaultMode]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Axios-based handleSubmit function
  const handleSubmit = async () => {
    const url = isRegister
      ? "http://localhost:5000/api/register"
      : "http://localhost:5000/api/login";

    try {
      const response = await axios.post(url, formData);
      alert(response.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-center">
        {isRegister ? "Register" : "Login"}
      </h2>
      <div className="flex flex-col gap-4">
        {isRegister && (
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border p-2 rounded"
            value={formData.email}
            onChange={handleChange}
          />
        )}
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="border p-2 rounded"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border p-2 rounded"
          value={formData.password}
          onChange={handleChange}
        />
        <button
          onClick={handleSubmit}
          className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          {isRegister ? "Register" : "Login"}
        </button>
        <p
          className="text-center text-sm text-blue-600 cursor-pointer"
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister
            ? "Already have an account? Login"
            : "New here? Register"}
        </p>
      </div>
    </div>
  );
};

export default LoginRegister;
