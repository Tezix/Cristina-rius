import EmotionalHero from "../../../components/EmotionalIssues/EmotionalHero/EmotionalHero";
import "./EmotionalIssuesPage.css";
import ServicesSymptoms from "../../../components/ServiceSymptomsSection/ServiceSymptomsItem";
import servicesData from "../../../components/ServicesData/ServicesData.json";
import TypesSection from "../../../components/ServicesData/ServiceDataTypes";
import ContactCard from "../../../components/ContactCard/ContactCard";
import ModalitiesSection from "../../../components/ModalitiesCard/ModalitiesSection";
import FaqSection from "../../../components/FaqSection/FaqSection";
const EmotionalIssuesPage = () => {
  const service = servicesData["problemas-emocionales"];
  const typeName = "problemas-emocionales";
  const serviceName = "Faq-problemas-emocionales";

  return (
    <>
      <div className="emotional-issues-page">
        <EmotionalHero />
        <ServicesSymptoms service={service} />
        <TypesSection typeName={typeName} />
        <ModalitiesSection />
        <FaqSection serviceName={serviceName} />
        <ContactCard />
      </div>
    </>
  );
};
export default EmotionalIssuesPage;
