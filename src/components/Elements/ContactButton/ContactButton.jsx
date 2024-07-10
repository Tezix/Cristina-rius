import { Link } from "react-router-dom";
import "./ContactButton.css";

const ContactButton = ({ text, type }) => {
  return (
    <div className={`get-in-touch-button ${type}`}>
      <Link to="#">{text}</Link>
    </div>
  );
};

export default ContactButton;
