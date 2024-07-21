import FAQItem from "../FaqSection/FAQItem";
import serviceFAQs from "../../languages/Services/servicesFaq.js";
import "./FaqSection.css";
import { useLanguage } from "../LanguageContext/LanguageContext";

const FaqSection = ({ serviceName }) => {
  const faqs = serviceFAQs[`Faq-${serviceName}`] || [];
  const { language } = useLanguage();

  return (
    <div className="faq-section">
      <h2>Preguntas frecuentes</h2>
      <div>
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question[language]}
            answer={faq.answer[language]}
          />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
