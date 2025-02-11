import React, { useState } from "react";
import "./Register.css";
import Navbar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="register-container">
        <Navbar/>
        <div className="register-wrapper">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="reg-title">Create New Account</h2>
        <p className="subtitle">It's free and only takes a minute</p>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          className="reg-input"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email Address"
          value={formData.email}
          onChange={handleChange}
          className="reg-input"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          className="reg-input"
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="reg-input"
          required
        />

        <button  className="reg-butn" type="submit">Register</button>

        <p className="login-link">
          Already have an account? <Link to="/login">Sign in Here</Link>
        </p>
      </form>
      </div>
    </div>
  );
};

export default Register;
