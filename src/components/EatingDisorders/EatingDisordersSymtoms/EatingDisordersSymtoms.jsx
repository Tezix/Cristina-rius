import React from 'react';
import ServicesSymptoms from '../../ServiceSymptomsSection/ServiceSymptomsItem';
import servicesData from '../../ServicesData/ServicesData.json';
import './EatingDisordersSymtoms.css'

const EatingDisordersSymptons = () => {
    const eatingDisordersService = servicesData['trastornos-de-conducta-alimentaria'];

    return (
        <div>
            <ServicesSymptoms service={eatingDisordersService} />
        </div>
    );
};

export default EatingDisordersSymptons;