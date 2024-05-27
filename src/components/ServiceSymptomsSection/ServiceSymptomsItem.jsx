import React from "react";
import "./ServiceSymptomsItem.css";

const ServicesSymptoms = ({ service }) => {
  const { symptoms } = service;

  return (
    <div className="service-symptoms">
      <h2 className="symptoms-title">Síntomas:</h2>
      <p>{symptoms}</p>
    </div>
  );
};
export default ServicesSymptoms;
