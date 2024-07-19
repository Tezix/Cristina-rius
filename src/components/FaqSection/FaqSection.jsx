import FAQItem from "../FaqSection/FAQItem";
import serviceFAQs from "../ServicesData/servicesFAQs";
import "./FaqSection.css";

const FaqSection = ({ serviceName }) => {
  const faqs = serviceFAQs[`Faq-${serviceName}`] || [];

  return (
    <div className="faq-section">
      <h2>Preguntas frecuentes</h2>
      <div>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
