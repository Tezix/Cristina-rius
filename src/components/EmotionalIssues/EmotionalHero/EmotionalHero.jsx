import React from 'react';
import ServicesHero from '../../../components/ServiceHeroSection/ServicesHeroItem';
import servicesData from '../../ServiceData/ServicesData';
import './EmotionalHero.css'

const EmotionalHero = () => {
    const servicioProblemasEmocionales = servicesData['problemas-emocionales'];

    return (
        <div>
            <ServicesHero service={servicioProblemasEmocionales} />
            <div className="service-links">
                <a href="#">Ansiedad</a>
                <a href="#">Depresión</a>
                <a href="#">Apatía</a>

            </div>
        </div>
    );
};

export default EmotionalHero;