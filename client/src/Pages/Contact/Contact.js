import React from "react";
import "./Contact.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Contact = () => {
  return (
    <div className="contact-container">
      <Navbar />
      <div className="contact-wrapper">
        <div className="contact-box">
          <h1>Contact Us</h1>
          <p>
            If you have any questions or concerns, please feel free to contact
            us at:
          </p>
          <a href="mailto:info@digitalcard.com" className="contact-email">
            info@digitalcard.com
          </a>
          <p>We will get back to you as soon as possible...!</p>
          <p className="thank-you">Thank you for contacting us!</p>
          <p>Have a great day!</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
