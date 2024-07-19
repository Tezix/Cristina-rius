import { useParams } from "react-router-dom";
import FaqSection from "../../FaqSection/FaqSection";
import "./ServiceIssuesFaq.css";

const ServiceIssuesFaq = () => {
  const { serviceType: serviceName } = useParams();

  return (
    <div className="emotional-fq">
      <div className="emotional-faq-section">
        <FaqSection serviceName={serviceName} />
      </div>
    </div>
  );
};

export default ServiceIssuesFaq;
