import { Link } from "react-router-dom";
import "./ContactButton.css";

const ContactButton = ({ text, type, link }) => {
  return (
    <div className={`get-in-touch-button ${type}`}>
      <Link to={link}>{text}</Link>
    </div>
  );
};

export default ContactButton;
