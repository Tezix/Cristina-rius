import { useEffect } from "react";
import ServiceHero from "../../components/Services/ServiceHero/ServiceHero";
import "./ServicePage.css";
import ServiceSymptoms from "../../components/Services/ServiceSymtoms/ServiceSymptoms";
import ServiceTypes from "../../components/Services/ServiceTypes/ServiceTypes";
import ModalitiesSection from "../../components/ModalitiesCard/ModalitiesSection";
import ServiceIssuesFaq from "../../components/Services/ServiceIssuesFaq/ServiceIssuesFaq";
import Footer from "../../components/Footer/Footer";
import ContactCard from "../../components/ContactCard/ContactCard";
import { useParams } from "react-router-dom";
const ServicePage = () => {
  const { serviceType } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceType]);
  return (
    <>
      <ServiceHero />
      <div className="service-symptoms-and-types">
        <div className="service-symptoms-and-types-margin">
          <ServiceSymptoms />
          <ServiceTypes />
        </div>
      </div>
      <ModalitiesSection />
      <ServiceIssuesFaq />
      <ContactCard />
      <Footer />
    </>
  );
};
export default ServicePage;
