import React from "react";
import "./Home.css";
import Footer from "../../Components/Footer/Footer";
import { FaUserShield, FaMagic, FaCheckCircle } from "react-icons/fa";
const Home = () => {
  return (
    <div className="home-container">
      <div className="homepage">
        <h1 className="title">Welcome to Digital Cards!</h1>
        <p className="description">
          Stand out from the crowd with professionally designed ID cards that
          reflect the uniqueness of your organization. Digital Cards is your
          ultimate solution for creating stunning and professional ID cards that
          leave a lasting impression. Whether you need ID cards for your
          organization, school, or events, Digital Cards has got you covered.
        </p>
        <button className="create-btn">Create ID Card</button>
        <div className="background-bubbles">
          <div className="bubble bubble1"></div>
          <div className="bubble bubble2"></div>
          <div className="bubble bubble3"></div>
          <div className="bubble bubble4"></div>
          <div className="bubble bubble5"></div>
        </div>
      </div>

      <section className="features-section">
        <h2 className="features-title">Why Choose Us?</h2>
        <p className="features-description">
          We offer an innovative and efficient way to create professional ID cards.
        </p>
        <div className="features-container">
          <div className="feature-card">
            <FaUserShield className="feature-icon" />
            <h3>Secure & Reliable</h3>
            <p>Ensuring the privacy and security of your data.</p>
          </div>
          <div className="feature-card">
            <FaMagic className="feature-icon" />
            <h3>Smart Generation</h3>
            <p>Automatically generate professional and stylish ID cards.</p>
          </div>
          <div className="feature-card">
            <FaCheckCircle className="feature-icon" />
            <h3>Easy to Use</h3>
            <p>Our platform is simple and intuitive for everyone.</p>
          </div>
        </div>
      </section>

      
  <Footer/>

    </div>
  );
};

export default Home;
