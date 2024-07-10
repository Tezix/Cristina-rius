import FaqSection from "../../FaqSection/FaqSection";
import "./HomeFaq.css";
import ContactCard from "../../ContactCard/ContactCard";

const HomeFaq = () => {
  const serviceName = "Faq-home";

  return (
    <div className="home-fq-contact">
      <FaqSection serviceName={serviceName} />
      <div className="home-contact-section"></div>
      <ContactCard />
    </div>
  );
};

export default HomeFaq;
