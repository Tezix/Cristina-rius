import ServiceCard from "../../ServiceCard/ServiceCard";
import "./HomeServices.css";
import languagesData from "../../../languages/Home/home.json";
import { useLanguage } from "../../LanguageContext/LanguageContext";

const Services = () => {
  const { language } = useLanguage();
  const services = [
    {
      title: {
        esp: "Problemas emocionales",
        val: "Problemes emocionals",
      },
      image: "/images/blog1.webp",
    },
    {
      title: {
        esp: "Trastornos de la Conducta Alimentaria (TCA)",
        val: "Trastorns de la Conducta Alimentària (TCA)",
      },
      image: "/images/blog2.webp",
    },
    {
      title: {
        esp: "Duelo",
        val: "Dol",
      },
      image: "/images/blog3.webp",
    },
    {
      title: {
        esp: "Crecimiento Personal",
        val: "Creixement Personal",
      },
      image: "/images/blog4.webp",
    },
    {
      title: {
        esp: "Relaciones de Pareja",
        val: "Relacions de Parella",
      },
      image: "/images/blog5.webp",
    },
    {
      title: {
        esp: "Adicciones",
        val: "Addiccions",
      },
      image: "/images/blog6.webp",
    },
  ];

  const halfLength = Math.ceil(services.length / 2);
  const leftColumn = services.slice(0, halfLength);
  const rightColumn = services.slice(halfLength, services.length);

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
          <div className="service-column">
            {leftColumn.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title[language]}
                backgroundImage={service.image}
              />
            ))}
          </div>
          <div className="service-column">
            {rightColumn.map((service, index) => (
              <ServiceCard
                key={index + halfLength}
                title={service.title[language]}
                backgroundImage={service.image}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
