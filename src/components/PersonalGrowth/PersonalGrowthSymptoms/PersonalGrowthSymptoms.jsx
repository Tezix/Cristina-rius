import React from 'react';
import ServicesSymptoms from '../../ServiceSymptomsSection/ServiceSymptomsItem';
import servicesData from '../../ServicesData/ServicesData.json';
import './PersonalGrowthSymptoms.css';

const PersonalGrowthSymptoms = () => {
    const PersonalGrowthService = servicesData['crecimiento-personal'];

    return (
        <div>
            <ServicesSymptoms service={PersonalGrowthService} />
        </div>
    );
};

export default PersonalGrowthSymptoms;