import ServiceCard from "../../ServiceCard/ServiceCard";
import "./HomeServices.css";
import languagesData from "../../../languages/Home/home.json";
import servicesData from "../../../languages/Services/servicesData.json";
import { useLanguage } from "../../LanguageContext/LanguageContext";

const Services = () => {
  const { language } = useLanguage();

  // Transform servicesData object into an array of services
  const services = Object.keys(servicesData)
    .filter((key) => key !== "title")
    .map((key) => ({
      title: servicesData[key].title,
      image: servicesData[key].image,
    }));

  return (
    <>
      <div className="services">
        <div className="services-info">
          <h2 className="services-title">
            {languagesData.homeServices.h2[language]}
          </h2>
          <p>
            {languagesData.homeServices.p1[language]}
            <span>{languagesData.homeServices.span1[language]}</span>
            {languagesData.homeServices.p2[language]}
            <span>{languagesData.homeServices.span2[language]}</span>
          </p>
          <br />
          <p>{languagesData.homeServices.p3[language]}</p>
          <h3 className="some-services">
            {languagesData.homeServices.h3[language]}
          </h3>
        </div>
        <div className="services-cards">
          {services.map((service, index) => (
            <div className="service-card-parent" key={index * 2}>
              <ServiceCard
                key={index}
                title={service.title[language]}
                link={service.title.esp}
                backgroundImage={service.image}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
