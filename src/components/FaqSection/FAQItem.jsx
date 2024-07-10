import { useState } from "react";
import "./FAQItem.css";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div
        className={`faq-question ${isOpen ? "open" : ""}`}
        onClick={toggleAccordion}
      >
        {question}
        <span className="question-symbol"></span>
      </div>
      <div className={`faq-answer ${isOpen ? "" : "closed"}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
