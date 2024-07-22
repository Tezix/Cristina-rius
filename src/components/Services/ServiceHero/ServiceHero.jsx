import servicesData from "../../../languages/Services/servicesData.json";
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
          <h3>{servicesData.title[language]}</h3>
          <h1>{servicioProblemasEmocionales.title[language]}</h1>
          <p className="definition">
            {servicioProblemasEmocionales.definition[language]}
          </p>
        </div>
        <div className="service-image">
          <img
            src={servicioProblemasEmocionales.image}
            alt={servicioProblemasEmocionales.title[language]}
          />
        </div>
      </div>
      <div className="service-links">
        {servicioProblemasEmocionales.definitionLinks[language].map(
          (eachLink, idx) => {
            return (
              <a href={`#${eachLink}`} key={idx}>
                {eachLink}
              </a>
            );
          }
        )}
      </div>
    </div>
  );
};

export default ServiceHero;
