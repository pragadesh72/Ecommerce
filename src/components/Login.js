// SignUp.js
import React, { useState } from "react";
import "../css/Register.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Implement signup logic here
    console.log("Form submitted:", formData);
    // Reset form data
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div style={{ width: "100%", height: "100vh" }} className="perfect-center">
      <div className="signup-container">
        <form onSubmit={handleSubmit}>
          <h2>Log In</h2>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
