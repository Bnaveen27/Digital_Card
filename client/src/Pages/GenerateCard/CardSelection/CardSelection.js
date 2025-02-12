import React from "react";
import "./CardSelection.css";

const CardSelection = ({ onSelect }) => {
  return (
    <div className="card-grid">
      <div className="card organization" onClick={() => onSelect("organization")}>
        Organization Card
      </div>
      <div className="card student" onClick={() => onSelect("student")}>
        Student Card
      </div>
      <div className="card event" onClick={() => onSelect("event")}>
        Event Card
      </div>
    </div>
  );
};

export default CardSelection;
