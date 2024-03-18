import React from 'react';
import FaqSection from '../../FaqSection/FaqSection';
import './HomeFaq.css';
import ContactCard from '../../ContactCard/ContactCard';

const HomeFaq = () => {
    const serviceName = 'Faq-home';

    return (
        <div className='home-fq-contact'>
            <div className='home-faq-section'>
                <h2>Preguntas frecuentes</h2>
                <FaqSection serviceName={serviceName} />
            </div>
            <div className='home-contact-section'></div>
            <ContactCard />
        </div>
    );
};

export default HomeFaq;
