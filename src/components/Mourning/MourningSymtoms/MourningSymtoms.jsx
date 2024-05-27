import React from 'react';
import ServicesSymptoms from '../../ServiceSymptomsSection/ServiceSymptomsItem';
import servicesData from '../../ServicesData/ServicesData.json';
import './MourningSymtoms.css'

const MourningSymptons = () => {
    const MourningService = servicesData['duelo'];

    return (
        <div>
            <ServicesSymptoms service={MourningService} />
        </div>
    );
};

export default MourningSymptons;