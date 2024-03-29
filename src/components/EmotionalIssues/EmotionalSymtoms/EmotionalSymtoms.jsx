import React from 'react';
import ServicesSymptoms from '../../ServiceSymptomsSection/ServiceSymptomsItem';
import servicesData from '../../ServicesData/ServicesData.json';
import './EmotionalSymtoms.css'

const EmotionalSymptons = () => {
    const servicioProblemasEmocionales = servicesData['problemas-emocionales'];

    return (
        <div>
            <ServicesSymptoms service={servicioProblemasEmocionales} />
        </div>
    );
};

export default EmotionalSymptons;