import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Fetch user whenever the component renders
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Listen for localStorage changes (Fixes lag issue)
  useEffect(() => {
    const checkUser = () => {
      const storedUser = localStorage.getItem("user");
      setUser(storedUser ? JSON.parse(storedUser) : null);
    };

    window.addEventListener("storage", checkUser);
    return () => window.removeEventListener("storage", checkUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  const handleGenerateClick = (e) => {
    if (!user) {
      e.preventDefault(); // Prevent navigation
      navigate("/Login"); // Redirect to login page
    }
  };

  return (
    <div className='nav-container'>
      <nav className='nav-wrapper'>
        <div className='nav-left'>
          <p className='navtext-left'>Digital Card</p>
        </div>
        
        <div className={`menu-sec ${menuOpen ? "open" : ""}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/GenerateCard" onClick={handleGenerateClick}>Generate Card</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className='nav-right'>
          {user ? (
            <div className="user-menu">
              <button className="user-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
                {user.name} ▼
              </button>

              {dropdownOpen && (
                <div className="dropdown">
                  <Link to="/Profile" className="dropdown-item">
                    <FaUser className="icon" /> Profile
                  </Link>
                  <button className="dropdown-item" onClick={handleLogout}>
                    <FaSignOutAlt className="icon" /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button className='log-btn' onClick={() => navigate("/Register")}>
              Login / Register
            </button>
          )}
        </div>

        <div className="sidebar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <MdClose className="burger-menu" /> : <MdMenu className="burger-menu" />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
