import { Link } from "react-router-dom";
import "./ServiceCard.css";

const ServiceCard = ({ title, backgroundImage }) => {
  const cardStyle = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
  };

  return (
    <div className="service-card-container">
      <Link to={`/${title.toLowerCase().replace(/ /g, "-")}`}>
        <div className="service-card" style={cardStyle}></div>
        <div className="service-card-content">
          <h3>{title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
