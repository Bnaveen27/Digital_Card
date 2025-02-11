import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Navbar from "../../Components/Navbar/Navbar"
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted", formData);
    // Add login logic here (e.g., API call)
  };

  return (
    <div className="login-container">
      <Navbar/>
      <div className="login-wrapper">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="log-title">Sign in to your Account</h2>
        <p className="subtext">You've been Missed!</p>
        <input
          type="email"
          name="email"
          placeholder="Enter Email Address"
          value={formData.email}
          onChange={handleChange}
          className="log-input"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          className="log-input"
          required
        />
        <p className="forgot-password" onClick={() => navigate("/forgot-password")}>
          Forgot your password?
        </p>
        <button type="submit" className="login-btn">Login</button>
        <p className="signup-text">
          No Account? <span onClick={() => navigate("/Register")} className="signup-link">Sign up</span>
        </p>
      </form>
      </div>
    </div>
  );
};

export default Login;