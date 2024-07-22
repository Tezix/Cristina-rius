import { useParams } from "react-router-dom";
import ServiceDataTypes from "./../../../languages/Services/servicesDataTypes.json";
import FAQItem from "../../FaqSection/FAQItem";
import "./ServiceTypes.css";
import { useLanguage } from "../../LanguageContext/LanguageContext";

const ServiceTypes = () => {
  const { serviceType } = useParams();
  const symptomTypes = ServiceDataTypes[serviceType] || [];
  const { language } = useLanguage();

  return (
    <div>
      {symptomTypes.map((symptom, index) => (
        <div className="service-symptoms-item" key={{ index }}>
          <div id={symptom.type[language]} className="symptom-types">
            <img src="/images/symptom.svg" alt="" />
            <h3>{symptom.type[language]}</h3>
            <p>{symptom.description[language]}</p>
          </div>
          <div className="symptom-subgroups">
            {symptom.subgroups &&
              symptom.subgroups.map((subgroup, index) => (
                <FAQItem
                  key={index}
                  question={subgroup.name[language]}
                  answer={subgroup.description[language]}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default ServiceTypes;
