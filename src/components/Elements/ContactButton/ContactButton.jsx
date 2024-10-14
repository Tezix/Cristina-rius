import { Link } from "react-router-dom";
import "./ContactButton.css";

const ContactButton = ({ text, type, link, linkScrolls = false }) => {
  return (
    <div className={`get-in-touch-button ${type}`}>
      {linkScrolls ? <a href={link}>{text}</a> : <Link to={link}>{text}</Link>}
    </div>
  );
};

export default ContactButton;
