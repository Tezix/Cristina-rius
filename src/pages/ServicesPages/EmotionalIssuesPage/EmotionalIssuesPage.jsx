import EmotionalHero from "../../../components/EmotionalIssues/EmotionalHero/EmotionalHero";
import './EmotionalIssuesPage.css';
import EmotionalSymptons from "../../../components/EmotionalIssues/EmotionalSymtoms/EmotionalSymtoms";
import EmotionalTypes from "../../../components/EmotionalIssues/EmotionalTypes/EmotionalTypes";
import ModalitiesSection from "../../../components/ModalitiesCard/ModalitiesSection";
import EmotionalFaq from "../../../components/EmotionalIssues/EmotionalIssuesFaq/EmotionalIssuesFaq";
import Footer from "../../../components/Footer/Footer";
import ContactCard from "../../../components/ContactCard/ContactCard";


const EmotionalIssuesPage = () => {
  return (
    <>
      <EmotionalHero />
      <EmotionalSymptons />
      <EmotionalTypes />
      <ModalitiesSection />
      <EmotionalFaq />
      <ContactCard />
      <Footer />


    </>
  )
}
export default EmotionalIssuesPage;

