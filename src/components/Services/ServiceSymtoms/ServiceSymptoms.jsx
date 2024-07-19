import { useParams } from "react-router-dom";
import servicesData from "../../ServicesData/ServicesData.json";
import "./ServiceSymptoms.css";
const EmotionalSymptoms = () => {
  const { serviceType } = useParams();

  const servicioProblemasEmocionales = servicesData[serviceType];

  return (
    <div className="service-symptoms">
      <h3 className="symptoms-title">Síntomas:</h3>
      <p>{servicioProblemasEmocionales.symptoms}</p>
    </div>
  );
};

export default EmotionalSymptoms;
