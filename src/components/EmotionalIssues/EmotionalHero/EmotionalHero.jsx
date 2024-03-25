import React from 'react';
import ServicesHero from '../../../components/ServiceHeroSection/ServicesHeroItem';
import servicesData from '../../ServiceData/ServicesData';
import './EmotionalHero.css'

const EmotionalHero = () => {
    const servicioProblemasEmocionales = servicesData['problemas-emocionales'];

    return (
        <div>
            <h2>me cago en todo</h2>
            <ServicesHero service={servicioProblemasEmocionales} />
        </div>
    );
};

export default EmotionalHero;