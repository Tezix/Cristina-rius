import React from 'react';
import ServicesSymptoms from '../../ServiceSymptomsSection/ServiceSymptomsItem';
import servicesData from '../../ServiceData/ServicesData';
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