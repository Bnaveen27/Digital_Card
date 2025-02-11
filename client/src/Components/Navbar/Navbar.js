import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className='nav-container'>
      <nav className='nav-wrapper'>
        <div className='nav-left'>
          <p className='navtext-left'>Digital Card</p>
        </div>
        
        <div className={`menu-sec ${menuOpen ? "open" : ""}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/generate">Generate Card</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className='nav-right'>
          <button className='log-btn' onClick={() => navigate("/Register")}>
            Login / Register
          </button>
        </div>

        <div className="sidebar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <MdClose className="burger-menu" /> : <MdMenu className="burger-menu" />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
