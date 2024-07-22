import { Link } from "react-router-dom";
import "./ContactButton.css";

const ContactButton = ({ text, type, link }) => {
  return (
    <div className={`get-in-touch-button ${type}`}>
      <a href={link}>{text}</a>
    </div>
  );
};

export default ContactButton;
