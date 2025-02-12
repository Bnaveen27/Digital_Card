import React from "react";
import "./FormGenerate.css";

const FormGenerate = ({ selectedCard, onBack }) => {
  return (
    <div className="form-page">
      <div className="form-wrapper">
        <div className="form-container">
          <h2 className="form-title">Fill Out the Form</h2>
          <div className="form-content">
            <form className="form-section">
              {/* Common Name Input for All Forms */}
              <input className="form-input" type="text" placeholder="Enter Full Name" />

              {/* Organization Form Fields */}
              {selectedCard === "organization" && (
                <>
                  <input className="form-input" type="text" placeholder="Enter Job Position" />
                  <input className="form-input" type="text" placeholder="Enter ID Number" />
                  <input className="form-input" type="date" placeholder="Joined Date" />
                  <input className="form-input" type="date" placeholder="Expiry Date" />
                </>
              )}

              {/* Student Form Fields */}
              {selectedCard === "student" && (
                <>
                  <input className="form-input" type="date" placeholder="Date of Birth" />
                  <input className="form-input" type="text" placeholder="Enter Blood Group" />
                  <input className="form-input" type="text" placeholder="Enter School/College Name" />
                  <input className="form-input" type="tel" placeholder="Enter Phone Number" />
                  <input className="form-input" type="date" placeholder="Joined Date" />
                  <input className="form-input" type="date" placeholder="Expiry Date" />
                </>
              )}

              {/* Event Form Fields */}
              {selectedCard === "event" && (
                <>
                  <input className="form-input" type="text" placeholder="Enter Position" />
                  <input className="form-input" type="tel" placeholder="Enter Phone Number" />
                  <input className="form-input" type="date" placeholder="Expiry Date" />
                </>
              )}

              {/* Common Photo Upload Field */}
              <input className="form-input-file" type="file" />

              {/* Submit Button */}
              <button className="form-button" type="submit">Proceed to Next Step</button>
            </form>

            {/* Divider */}
            <div className="form-divider"></div>

            {/* Right Side - Description */}
            <div className="form-description">
              <h3><b>Digital Card</b></h3>
              <p>is a platform that allows you to create professional ID cards for your organization, school, or events.</p>
              <p>You can create ID cards by filling out the form on the left side of this page. You can also upload your own image to be used as the Avatar for the ID card.</p>
              <p>Once you are done filling out the form, click on the <b>Proceed</b> button. You will be redirected to a page where you can select the template for your ID card and then download it.</p>
            </div>
          </div>

          {/* Back Button */}
          <button className="back-btn" onClick={onBack}>← Back</button>
        </div>
      </div>
    </div>
  );
};

export default FormGenerate;
