import React from "react";
import "./ContactCard.css";
import ContactButton from "../ContactButton/ContactButton";
const ContactCard = () => {
  return (
    <>
      <div className="contact-card">
        <div className="contact-card-text">
          <p>contacta para más información</p>
          <h1>Estaré encantada de ayudarte en tu proceso</h1>
          <ContactButton />
        </div>
        <div className="contact-card-image">
          <img src="/images/ContactImg.webp" alt="contact-card-image" />
        </div>
      </div>
    </>
  );
};
export default ContactCard;
