import FaqSection from "../../FaqSection/FaqSection";
import "./HomeFaq.css";
import ContactCard from "../../ContactCard/ContactCard";

const HomeFaq = () => {
  return (
    <div className="home-fq-contact">
      <FaqSection serviceName={"home"} />
      <div className="home-contact-section"></div>
      <ContactCard />
    </div>
  );
};

export default HomeFaq;
