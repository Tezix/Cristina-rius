import React from 'react';
import FaqSection from '../../FaqSection/FaqSection';
import './MourningFaq.css';
import serviceFAQs from '../../ServicesData/servicesFAQs';

const MourningFaq = () => {
    const serviceName = 'Faq-duelo';

    return (
        <div className='duelo-fq'>
            <div className='duelo-faq-section'>
                <h2>Preguntas frecuentes</h2>
                <FaqSection serviceName={serviceName} />
            </div>
        </div>
    )
}

export default MourningFaq;





