import { useParams } from "react-router-dom";
import ServiceDataTypes from "./../../ServicesData/ServicesDataTypes.json";
import FAQItem from "../../FaqSection/FAQItem";
import "./ServiceTypes.css";

const ServiceTypes = () => {
  const { serviceType } = useParams();
  const symptomTypes = ServiceDataTypes[serviceType] || [];

  return (
    <div>
      {symptomTypes.map((symptom, index) => (
        <div className="service-symptoms-item" key={{ index }}>
          <div className="symptom-types">
            <h3>{symptom.type}</h3>
            <p>{symptom.description}</p>
          </div>
          <div className="symptom-subgroups">
            {symptom.subgroups &&
              symptom.subgroups.map((subgroup, index) => (
                <FAQItem
                  key={index}
                  question={subgroup.name}
                  answer={subgroup.description}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default ServiceTypes;
