import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Navbar from "../../Components/Navbar/Navbar";
import { loginUser } from "../../Service/Api";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData);
      setMessage(response.message);
      setError("");
      localStorage.setItem("user", JSON.stringify(response.user)); // Store user data
      navigate("/Home"); // Redirect after successful login
    } catch (err) {
      setError(err.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <Navbar />
      <div className="login-wrapper">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="log-title">Sign in to your Account</h2>
          <p className="subtext">You've been Missed!</p>

          {message && <p className="success-msg">{message}</p>}
          {error && <p className="error-msg">{error}</p>}

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

          <p
            className="forgot-password"
            onClick={() => navigate("/forgot-password")}
          >
            Forgot your password?
          </p>

          <button type="submit" className="login-btn">
            Login
          </button>

          <p className="signup-text">
            No Account?{" "}
            <span onClick={() => navigate("/Register")} className="signup-link">
              Sign up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
