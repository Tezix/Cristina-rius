import FaqSection from "../../FaqSection/FaqSection";
import "./ServiceIssuesFaq.css";

const ServiceIssuesFaq = () => {
  const serviceName = "Faq-problemas-emocionales";

  return (
    <div className="emotional-fq">
      <div className="emotional-faq-section">
        <FaqSection serviceName={serviceName} />
      </div>
    </div>
  );
};

export default ServiceIssuesFaq;
