import React, { useState } from "react";
import CardSelection from "./CardSelection/CardSelection";
import FormGenerator from "./GenerateForm/FormGenerate";
import "./GenerateCard.css";
import Navbar from "../../Components/Navbar/Navbar"
const GenerateCard = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="generate-container">
      <Navbar/>
    <div className="container">
      {!selectedCard ? (
        <CardSelection onSelect={setSelectedCard} />
      ) : (
        <FormGenerator selectedCard={selectedCard} onBack={() => setSelectedCard(null)} />
      )}
    </div>
    </div>
  );
};

export default GenerateCard;
