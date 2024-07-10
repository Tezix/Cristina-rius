import servicesData from "../../ServicesData/ServicesData.json";
import "./ServiceHero.css";
import { useLanguage } from "../../LanguageContext/LanguageContext";
import { useParams } from "react-router-dom";

const ServiceHero = () => {
  const { serviceType } = useParams();
  const servicioProblemasEmocionales = servicesData[serviceType];
  const { language } = useLanguage();

  return (
    <div className="service-hero-margin">
      <div className="service-hero">
        <div className="service-info">
          <h3>servicios</h3>
          <h1>{servicioProblemasEmocionales.title}</h1>
          <p className="definition">
            {servicioProblemasEmocionales.definition}
          </p>
        </div>
        <div className="service-image">
          <img
            src={servicioProblemasEmocionales.image}
            alt={servicioProblemasEmocionales.title}
          />
        </div>
      </div>
      <div className="service-links">
        {servicioProblemasEmocionales.definitionLinks.map((eachLink, idx) => {
          return (
            <a href="#" key={idx}>
              {eachLink}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceHero;
