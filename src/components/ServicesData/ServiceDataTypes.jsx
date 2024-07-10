import ServicesTypeItem from "../ServicesTypesSection/ServicesTypesItem";
import ServiceDataTypes from "./ServicesDataTypes.json";
const TypesSection = ({ typeName }) => {
  const symptomTypes = ServiceDataTypes[typeName] || [];

  return (
    <div className="service-symptoms-section">
      {symptomTypes.map((symptom, index) => (
        <ServicesTypeItem
          key={index}
          type={symptom.type}
          description={symptom.description}
          subgroups={symptom.subgroups}
        />
      ))}
    </div>
  );
};
export default TypesSection;
