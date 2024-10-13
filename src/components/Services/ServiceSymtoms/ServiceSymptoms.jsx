import { useParams } from "react-router-dom";
import servicesData from "../../../languages/Services/servicesData.json";
import servicesDataTypes from "../../../languages/Services/servicesDataTypes.json";
import "./ServiceSymptoms.css";
import { useLanguage } from "../../LanguageContext/LanguageContext";

const EmotionalSymptoms = () => {
  const { serviceType } = useParams();
  const { language } = useLanguage();

  const servicioProblemasEmocionales = servicesData[serviceType];

  return (
    <div className="service-symptoms">
      <div className="service-symptoms-title">
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          width="24"
          height="24"
          color="var(--token-d5229cc0-15a0-4c38-b5da-2a811a526ceb, rgb(128, 82, 209))"
          className="service-symptoms-svg"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          ></path>
        </svg>

        <h3 className="symptoms-title">{servicesDataTypes.title[language]}</h3>
      </div>
      <p>{servicioProblemasEmocionales.symptoms[language]}</p>
    </div>
  );
};

export default EmotionalSymptoms;
