import React, { useState } from 'react';
import './FAQItem.css';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="faq-item">
            <div className={`faq-question ${isOpen ? 'open' : ''}`} onClick={toggleAccordion}>
                {question}
            </div>
            {isOpen && (
                <div className="faq-answer">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};

export default FAQItem;
