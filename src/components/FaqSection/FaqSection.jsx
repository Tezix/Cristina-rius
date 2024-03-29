import React from 'react';
import FAQItem from '../FaqSection/FAQItem';
import serviceFAQs from '../ServicesData/servicesFAQs';

const FaqSection = ({ serviceName }) => {
    const faqs = serviceFAQs[serviceName] || [];

    return (
        <div className="faq-section">
            {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
        </div>
    );
};

export default FaqSection;


// import React from 'react';
// import FAQItem from '../FaqSection/FAQItem';
// import FAQConst from './servicesFAQs'

// const FaqSection = ({ serviceName }) => {
//     const { [serviceName]: faqs } = FAQConst
//     return (
//         <div className="faq-section">
//             {faqs.map((faq, index) => (
//                 <FAQItem key={index} question={faq.question} answer={faq.answer} />
//             ))}
//         </div>
//     );
// };

// export default FaqSection;
