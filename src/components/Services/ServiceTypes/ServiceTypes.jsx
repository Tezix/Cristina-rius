import { useParams } from "react-router-dom";
import TypesSection from "../../ServicesData/ServiceDataTypes";

const ServiceTypes = () => {
  const { serviceType } = useParams();

  return (
    <div className="emotional-symptom-types">
      <TypesSection typeName={serviceType} />
    </div>
  );
};
export default ServiceTypes;
