import { useParams } from "react-router-dom";
import servicesData from "../../ServicesData/ServicesData.json";
import "./ServiceSymptoms.css";
const EmotionalSymptoms = () => {
  const { serviceType } = useParams();

  const servicioProblemasEmocionales = servicesData[serviceType];

  return (
    <div className="service-symptoms">
      <div className="service-symptoms">
        <h2 className="symptoms-title">Síntomas:</h2>
        <p>{servicioProblemasEmocionales.symptoms}</p>
      </div>
    </div>
  );
};

export default EmotionalSymptoms;
