import React from "react";
import "./Home.css";

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
        <h2 className="features-title">Our Features</h2>
        <p className="features-description">
          Digital Cards makes it simple to create professional ID cards for your
          organization or events.
        </p>
        <div className="features-container">
          <div className="feature-card">
            <h3>Easy to Use</h3>
            <p>
              Digital Cards makes it simple to create professional ID cards for
              your organization or events.
            </p>
          </div>
          <div className="feature-card">
            <h3>Smart Generation</h3>
            <p>
              Digital Cards makes it simple to create professional ID cards for
              your organization or events.
            </p>
          </div>
          <div className="feature-card">
            <h3>Secure Data</h3>
            <p>
              Digital Cards ensures the security and privacy of your data, giving
              you peace of mind.
            </p>
          </div>
        </div>
      </section>
      
      <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Digital Cards. All Rights Reserved.</p>
    </footer>

    </div>
  );
};

export default Home;
